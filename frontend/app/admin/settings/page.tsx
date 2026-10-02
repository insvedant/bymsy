'use client';

import { FormEvent, useEffect, useState } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { adminFetch, SiteSettings } from '@/lib/admin';

function AdminSettings() {
  const [form, setForm] = useState<SiteSettings | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'saving' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    setStatus('loading');
    adminFetch('/api/settings')
      .then((r) => r.json())
      .then((d) => { setForm(d); setStatus('idle'); })
      .catch(() => { setError('Could not load current settings.'); setStatus('error'); });
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form) return;
    setStatus('saving');
    setError('');
    try {
      const res = await adminFetch('/api/admin/settings', { method: 'PUT', body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus('error');
        setError(data.error || 'Could not save settings.');
        return;
      }
      setForm(data.settings);
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setError('Could not reach the server.');
    }
  }

  if (!form) {
    return (
      <>
        <h1>Site settings</h1>
        {status === 'error' ? <p className="form-status form-status-err">{error}</p> : <p className="admin-lede">Loading…</p>}
      </>
    );
  }

  return (
    <>
      <h1>Site settings</h1>
      <p className="admin-lede">Changes here update the contact email, phone number and social links shown across the site — the footer, the About and Contact pages, and every mailto link.</p>

      <form className="admin-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="s-email">Contact email</label>
          <input id="s-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="field">
          <label htmlFor="s-phone">Phone number</label>
          <input id="s-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div className="field field-wide">
          <label htmlFor="s-linkedin">LinkedIn URL</label>
          <input id="s-linkedin" type="url" placeholder="https://www.linkedin.com/company/…" value={form.social.linkedin} onChange={(e) => setForm({ ...form, social: { ...form.social, linkedin: e.target.value } })} />
        </div>
        <div className="field field-wide">
          <label htmlFor="s-instagram">Instagram URL</label>
          <input id="s-instagram" type="url" placeholder="https://www.instagram.com/…" value={form.social.instagram} onChange={(e) => setForm({ ...form, social: { ...form.social, instagram: e.target.value } })} />
        </div>
        <div className="field field-wide">
          <label htmlFor="s-x">X (Twitter) URL</label>
          <input id="s-x" type="url" placeholder="https://x.com/…" value={form.social.x} onChange={(e) => setForm({ ...form, social: { ...form.social, x: e.target.value } })} />
        </div>

        <div className="field-wide admin-form-actions">
          <button type="submit" className="btn btn-primary" disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : 'Save changes'}
          </button>
          {status === 'saved' && <span className="admin-saved">Saved.</span>}
          {status === 'error' && <span className="form-status form-status-err">{error}</span>}
        </div>
      </form>
    </>
  );
}

export default function Page() {
  return <AdminShell><AdminSettings /></AdminShell>;
}
