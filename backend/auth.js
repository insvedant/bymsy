const jwt = require('jsonwebtoken');

// Falls back to a random secret if none is set, so the server still boots —
// but that invalidates every token on restart, so set JWT_SECRET in .env for
// real use (see .env.example).
const SECRET = process.env.JWT_SECRET || require('crypto').randomBytes(32).toString('hex');
if (!process.env.JWT_SECRET) {
  console.warn('JWT_SECRET not set: using a random secret for this run only — admin sessions will not survive a restart.');
}

function signAdminToken(email) {
  return jwt.sign({ sub: email, role: 'admin' }, SECRET, { expiresIn: '12h' });
}

/** Protects a route: requires a valid "Bearer <token>" Authorization header. */
function requireAdmin(req, res, next) {
  const header = req.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ ok: false, error: 'Missing token' });
  try {
    req.admin = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ ok: false, error: 'Invalid or expired token' });
  }
}

module.exports = { signAdminToken, requireAdmin };
