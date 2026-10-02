const nodemailer = require('nodemailer');

// The site's lead inbox. Override with LEADS_EMAIL if that ever changes.
const LEADS_EMAIL = process.env.LEADS_EMAIL || 'bymsyconsulting@gmail.com';

let transporter;
function getTransporter() {
  if (transporter !== undefined) return transporter;
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    transporter = null; // not configured — see backend/.env.example
    return transporter;
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/** Emails a submitted lead to LEADS_EMAIL. Returns { sent } and never throws. */
async function sendLeadEmail(lead) {
  const t = getTransporter();
  if (!t) {
    console.warn('Email not sent (SMTP is not configured — see backend/.env.example). Lead was still saved.');
    return { sent: false, reason: 'not_configured' };
  }

  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Company', lead.company],
    ['Service', lead.service],
    ['Package', lead.plan],
    ['Budget', lead.budget],
    ['Source', lead.source === 'popup' ? 'Popup form' : 'Contact page'],
    ['Language', lead.locale],
  ].filter(([, v]) => v);

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1f2f3f">
      <h2 style="color:#0b2540;margin:0 0 16px">New enquiry from bymsy.com</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#566878;padding-right:12px"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      ${lead.message ? `<p style="margin-top:16px"><strong>Message</strong></p><p>${escapeHtml(lead.message).replace(/\n/g, '<br/>')}</p>` : ''}
    </div>
  `.trim();

  try {
    await t.sendMail({
      from: process.env.MAIL_FROM || `bymsy website <${process.env.SMTP_USER}>`,
      to: LEADS_EMAIL,
      replyTo: lead.email,
      subject: `New enquiry: ${lead.name}${lead.service ? ` — ${lead.service}` : ''}`,
      html,
    });
    return { sent: true };
  } catch (err) {
    console.error('Lead email failed to send:', err.message);
    return { sent: false, reason: err.message };
  }
}

module.exports = { sendLeadEmail, LEADS_EMAIL };
