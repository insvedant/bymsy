require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const geoip = require('geoip-lite');
const mongoose = require('mongoose');
const { sendLeadEmail } = require('./mailer');
const { signAdminToken, requireAdmin } = require('./auth');
const { getSettings, updateSettings } = require('./settings');
const { connectDb, isDbReady } = require('./db');

const app = express();
app.set('trust proxy', 1); // correct client IP behind Nginx / Cloudflare / a load balancer
app.use(helmet());
app.use(express.json({ limit: '20kb' }));
app.use(
  cors({
    origin: (process.env.CORS_ORIGINS || 'http://localhost:3000').split(',').map((s) => s.trim()),
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ---- Leads ---------------------------------------------------------------
const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 120 },
    email: { type: String, required: true, maxlength: 200 },
    phone: { type: String, maxlength: 40 },
    company: { type: String, maxlength: 160 },
    plan: { type: String, maxlength: 60 },
    service: { type: String, maxlength: 40 },
    budget: { type: String, maxlength: 20 },
    message: { type: String, maxlength: 4000 },
    source: { type: String, enum: ['contact', 'popup'], default: 'contact' },
    locale: { type: String, enum: ['en', 'fr', 'es'], default: 'en' },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// In-memory fallback so the admin panel has something to show without MongoDB
// configured. Capped so a long-running dev server doesn't grow unbounded.
const memoryLeads = [];
const MEMORY_LEADS_CAP = 500;

connectDb();

const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const leadLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false });

app.post('/api/leads', leadLimiter, async (req, res) => {
  const b = req.body || {};
  if (str(b.website, 200)) return res.status(201).json({ ok: true }); // honeypot filled: pretend success

  const lead = {
    name: str(b.name, 120),
    email: str(b.email, 200).toLowerCase(),
    phone: str(b.phone, 40),
    company: str(b.company, 160),
    plan: str(b.plan, 60),
    service: str(b.service, 40),
    budget: str(b.budget, 20),
    message: str(b.message, 4000),
    source: b.source === 'popup' ? 'popup' : 'contact',
    locale: ['en', 'fr', 'es'].includes(b.locale) ? b.locale : 'en',
  };
  if (lead.name.length < 2 || !EMAIL_RE.test(lead.email)) {
    return res.status(400).json({ ok: false, error: 'Invalid name or email' });
  }

  const dbReady = isDbReady();
  try {
    if (dbReady) {
      await Lead.create(lead);
    } else {
      console.log('New lead:', lead);
      memoryLeads.unshift({ ...lead, _id: String(Date.now()), createdAt: new Date().toISOString() });
      if (memoryLeads.length > MEMORY_LEADS_CAP) memoryLeads.length = MEMORY_LEADS_CAP;
    }
  } catch (err) {
    console.error('Lead save failed:', err.message);
    return res.status(500).json({ ok: false, error: 'Could not save lead' });
  }

  // Email delivery is best-effort: the lead is already saved, so a failed or
  // unconfigured mailer still returns success to the visitor.
  const { sent } = await sendLeadEmail(lead);
  res.status(201).json({ ok: true, emailed: sent });
});

// ---- Visitor geolocation (used for the footer clock) ----------------------
// The IP is read from the request, looked up in an offline database and
// discarded. Nothing is stored.
app.get('/api/geo', rateLimit({ windowMs: 60 * 1000, limit: 60 }), (req, res) => {
  const ip = (req.ip || '').replace('::ffff:', '');
  const g = geoip.lookup(ip);
  res.set('Cache-Control', 'no-store');
  res.json({
    city: g?.city || null,
    region: g?.region || null,
    country: g?.country || null,
    timezone: g?.timezone || null, // null for private/local IPs: the frontend falls back to the browser timezone
  });
});

// ---- Public site settings (email, phone, social links) -------------------
app.get('/api/settings', async (_req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json(await getSettings(isDbReady()));
});

// ---- Admin: login ----------------------------------------------------------
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false });

app.post('/api/admin/login', loginLimiter, (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    return res.status(503).json({ ok: false, error: 'Admin login is not configured on the server yet.' });
  }
  if (
    typeof email !== 'string' || typeof password !== 'string' ||
    email.trim().toLowerCase() !== adminEmail.toLowerCase() || password !== adminPassword
  ) {
    return res.status(401).json({ ok: false, error: 'Incorrect email or password' });
  }
  res.json({ ok: true, token: signAdminToken(adminEmail) });
});

// ---- Admin: leads ----------------------------------------------------------
app.get('/api/admin/leads', requireAdmin, async (req, res) => {
  const limit = Math.min(200, Math.max(1, parseInt(req.query.limit, 10) || 100));
  if (isDbReady()) {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(limit).lean();
    return res.json({ ok: true, leads, source: 'database' });
  }
  res.json({ ok: true, leads: memoryLeads.slice(0, limit), source: 'memory' });
});

// ---- Admin: site settings ---------------------------------------------------
app.put('/api/admin/settings', requireAdmin, async (req, res) => {
  try {
    const settings = await updateSettings(isDbReady(), req.body || {});
    res.json({ ok: true, settings });
  } catch (err) {
    console.error('Settings update failed:', err.message);
    res.status(500).json({ ok: false, error: 'Could not save settings' });
  }
});

// ---- Admin: database status & connection test ------------------------------
// There is deliberately no endpoint that saves a pasted connection string —
// see the note in the admin Database page for why. This only reports status
// and lets you test a string against Atlas without persisting it anywhere.
app.get('/api/admin/db-status', requireAdmin, (_req, res) => {
  const configured = Boolean(process.env.MONGODB_URI);
  const connected = isDbReady();
  let host = null;
  if (configured) {
    try { host = new URL(process.env.MONGODB_URI.replace('mongodb+srv://', 'https://').replace('mongodb://', 'https://')).host; } catch { /* ignore */ }
  }
  res.json({
    ok: true,
    configured,
    connected,
    host,
    dbName: connected ? mongoose.connection.name : (process.env.MONGODB_DB_NAME || null),
    leadCount: connected ? undefined : memoryLeads.length,
  });
});

const dbTestLimiter = rateLimit({ windowMs: 5 * 60 * 1000, limit: 10 });
app.post('/api/admin/db-test', requireAdmin, dbTestLimiter, async (req, res) => {
  const uri = typeof req.body?.uri === 'string' ? req.body.uri.trim() : '';
  if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
    return res.status(400).json({ ok: false, error: 'That doesn\'t look like a MongoDB connection string.' });
  }
  // A throwaway connection, closed immediately either way — never stored, never logged.
  let testConn;
  try {
    testConn = await mongoose.createConnection(uri, {
      dbName: process.env.MONGODB_DB_NAME || 'bymsy',
      serverSelectionTimeoutMS: 8000,
    }).asPromise();
    const admin = testConn.db.admin();
    const info = await admin.ping();
    res.json({ ok: Boolean(info?.ok), message: 'Connected successfully.' });
  } catch (err) {
    res.json({ ok: false, error: err.message });
  } finally {
    if (testConn) testConn.close().catch(() => {});
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, db: isDbReady() ? 'connected' : 'not connected' }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`bymsy API listening on :${port}`));
