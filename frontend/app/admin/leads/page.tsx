'use client';

import { useEffect, useMemo, useState } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { adminFetch, Lead } from '@/lib/admin';

function fmt(d: string) {
  try { return new Date(d).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }); } catch { return d; }
}

function AdminLeads() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState('');
  const [source, setSource] = useState<'all' | 'contact' | 'popup'>('all');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const load = () => {
    setError('');
    adminFetch('/api/admin/leads?limit=200')
      .then((r) => r.json())
      .then((d) => {
        if (!d.ok) { setError(d.error || 'Could not load leads.'); return; }
        setLeads(d.leads || []);
      })
      .catch(() => setError('Could not reach the server.'));
  };

  useEffect(load, []);

  const filtered = useMemo(() => {
    if (!leads) return [];
    return leads.filter((l) => {
      if (source !== 'all' && l.source !== source) return false;
      if (!q.trim()) return true;
      const hay = `${l.name} ${l.email} ${l.company || ''} ${l.service || ''} ${l.message || ''}`.toLowerCase();
      return hay.includes(q.trim().toLowerCase());
    });
  }, [leads, source, q]);

  return (
    <>
      <div className="admin-head-row">
        <div>
          <h1>Leads</h1>
          <p className="admin-lede">Every enquiry from the contact form and the popup, newest first.</p>
        </div>
        <button type="button" className="btn btn-ghost btn-sm" onClick={load}>Refresh</button>
      </div>

      <div className="admin-filters">
        <input type="search" placeholder="Search name, email, message…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="seg">
          {(['all', 'contact', 'popup'] as const).map((s) => (
            <button key={s} type="button" className="seg-btn" aria-pressed={source === s} onClick={() => setSource(s)}>
              {s === 'all' ? 'All' : s === 'contact' ? 'Contact page' : 'Popup'}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="form-status form-status-err">{error}</p>}
      {!leads && !error && <p className="admin-lede">Loading…</p>}
      {leads && filtered.length === 0 && <p className="admin-lede">No leads match yet.</p>}

      <div className="admin-lead-list">
        {filtered.map((l) => {
          const isOpen = open === l._id;
          return (
            <div key={l._id} className={`admin-lead${isOpen ? ' is-open' : ''}`}>
              <button type="button" className="admin-lead-row" onClick={() => setOpen(isOpen ? null : l._id)}>
                <span className="admin-lead-name">{l.name}</span>
                <span className="admin-lead-email">{l.email}</span>
                <span className={`admin-lead-source admin-lead-source-${l.source}`}>{l.source}</span>
                <span className="admin-lead-date">{fmt(l.createdAt)}</span>
              </button>
              {isOpen && (
                <div className="admin-lead-detail">
                  {l.phone && <p><strong>Phone:</strong> {l.phone}</p>}
                  {l.company && <p><strong>Company:</strong> {l.company}</p>}
                  {l.service && <p><strong>Service:</strong> {l.service}</p>}
                  {l.plan && <p><strong>Package:</strong> {l.plan}</p>}
                  {l.budget && <p><strong>Budget:</strong> {l.budget}</p>}
                  <p><strong>Language:</strong> {l.locale}</p>
                  {l.message && <p className="admin-lead-message"><strong>Message:</strong><br />{l.message}</p>}
                  <a className="btn btn-ghost btn-sm" href={`mailto:${l.email}`}>Reply by email</a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function Page() {
  return <AdminShell><AdminLeads /></AdminShell>;
}
