const mongoose = require('mongoose');

// Editable from the admin panel: contact details shown on the public site.
// Anything not set falls back to these defaults.
const DEFAULTS = {
  email: 'bymsyconsulting@gmail.com',
  phone: '+1 (403) 000-0000',
  social: {
    linkedin: 'https://www.linkedin.com/company/bymsy',
    instagram: 'https://www.instagram.com/bymsy',
    x: 'https://x.com/bymsy',
  },
};

const settingsSchema = new mongoose.Schema(
  {
    _id: { type: String, default: 'site' },
    email: { type: String, maxlength: 200 },
    phone: { type: String, maxlength: 40 },
    social: {
      linkedin: { type: String, maxlength: 300 },
      instagram: { type: String, maxlength: 300 },
      x: { type: String, maxlength: 300 },
    },
  },
  { timestamps: true }
);
const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);

// In-memory fallback so the admin panel still works without MongoDB
// configured — changes just don't survive a server restart.
let memorySettings = { ...DEFAULTS, social: { ...DEFAULTS.social } };

async function getSettings(useDb) {
  if (useDb) {
    const doc = await Settings.findById('site').lean();
    if (!doc) return { ...DEFAULTS };
    return {
      email: doc.email || DEFAULTS.email,
      phone: doc.phone || DEFAULTS.phone,
      social: { ...DEFAULTS.social, ...(doc.social || {}) },
    };
  }
  return memorySettings;
}

async function updateSettings(useDb, patch) {
  const clean = {};
  if (typeof patch.email === 'string') clean.email = patch.email.trim().slice(0, 200);
  if (typeof patch.phone === 'string') clean.phone = patch.phone.trim().slice(0, 40);
  if (patch.social && typeof patch.social === 'object') {
    clean.social = {};
    for (const key of ['linkedin', 'instagram', 'x']) {
      if (typeof patch.social[key] === 'string') clean.social[key] = patch.social[key].trim().slice(0, 300);
    }
  }

  if (useDb) {
    await Settings.findByIdAndUpdate(
      'site',
      { $set: clean },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  } else {
    memorySettings = {
      email: clean.email ?? memorySettings.email,
      phone: clean.phone ?? memorySettings.phone,
      social: { ...memorySettings.social, ...(clean.social || {}) },
    };
  }
  return getSettings(useDb);
}

module.exports = { getSettings, updateSettings, DEFAULTS };
