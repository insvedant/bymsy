'use client';

import { FormEvent, useEffect, useState } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { adminFetch } from '@/lib/admin';

type Status = { configured: boolean; connected: boolean; host: string | null; dbName: string | null; leadCount?: number };

function AdminDatabase() {
  const [status, setStatus] = useState<Status | null>(null);
  const [statusError, setStatusError] = useState('');
  const [uri, setUri] = useState('');
  const [testState, setTestState] = useState<'idle' | 'testing' | 'ok' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');

  const loadStatus = () => {
    adminFetch('/api/admin/db-status')
      .then((r) => r.json())
      .then((d) => { if (d.ok) setStatus(d); else setStatusError('Could not load database status.'); })
      .catch(() => setStatusError('Could not reach the server.'));
  };
  useEffect(loadStatus, []);

  async function onTest(e: FormEvent) {
    e.preventDefault();
    setTestState('testing');
    setTestMessage('');
    try {
      const res = await adminFetch('/api/admin/db-test', { method: 'POST', body: JSON.stringify({ uri }) });
      const data = await res.json();
      setTestState(data.ok ? 'ok' : 'error');
      setTestMessage(data.ok ? data.message : data.error);
    } catch {
      setTestState('error');
      setTestMessage('Could not reach the server.');
    }
  }

  return (
    <>
      <h1>Database</h1>
      <p className="admin-lede">Where contact-form and popup leads are stored, and where the site settings live.</p>

      <div className="admin-db-status">
        {statusError && <p className="form-status form-status-err">{statusError}</p>}
        {!status && !statusError && <p className="admin-lede">Loading…</p>}
        {status && (
          <>
            <div className={`admin-db-badge ${status.connected ? 'is-connected' : status.configured ? 'is-warn' : 'is-off'}`}>
              <span className="admin-db-dot" />
              {status.connected ? 'Connected' : status.configured ? 'Configured, not connected' : 'Not configured'}
            </div>
            <dl className="admin-db-facts">
              <div><dt>Cluster host</dt><dd>{status.host || '—'}</dd></div>
              <div><dt>Database name</dt><dd>{status.dbName || '—'}</dd></div>
              {!status.connected && typeof status.leadCount === 'number' && (
                <div><dt>Leads held in memory</dt><dd>{status.leadCount} (until connected, or the server restarts)</dd></div>
              )}
            </dl>
            <button type="button" className="btn btn-ghost btn-sm" onClick={loadStatus}>Refresh status</button>
          </>
        )}
      </div>

      <div className="admin-db-note">
        <h2>Why there's no save-a-connection-string field here</h2>
        <p>
          A database connection string is a full-access password to everything in your database. Storing it somewhere the
          app itself reads back — including in this database, or in a file the app writes — means anyone who ever gets
          into the admin panel, or a copy of the database, also gets full control of the database. The standard, secure
          place for it is an environment variable on whatever server runs this backend, set directly in that host's
          dashboard, never in application data.
        </p>
        <p>You can still test a connection string here — it's used once, then discarded, never saved or logged.</p>
      </div>

      <form className="admin-form admin-db-test" onSubmit={onTest}>
        <div className="field field-wide">
          <label htmlFor="db-uri">Connection string to test</label>
          <input id="db-uri" type="text" placeholder="mongodb+srv://user:password@cluster0.xxxxx.mongodb.net" value={uri} onChange={(e) => setUri(e.target.value)} required />
        </div>
        <div className="field-wide admin-form-actions">
          <button type="submit" className="btn btn-primary" disabled={testState === 'testing'}>
            {testState === 'testing' ? 'Testing…' : 'Test this connection'}
          </button>
          {testState === 'ok' && <span className="admin-saved">{testMessage}</span>}
          {testState === 'error' && <span className="form-status form-status-err">{testMessage}</span>}
        </div>
      </form>

      <div className="admin-db-note">
        <h2>Once a test succeeds</h2>
        <ol>
          <li>In MongoDB Atlas, go to <strong>Network Access</strong> and allow the IP your backend runs from — for hosts with dynamic IPs (Vercel, most serverless platforms), that usually means allowing <code>0.0.0.0/0</code>.</li>
          <li>On your backend's host (Render, Railway, etc. — not Vercel; see the deploy note below), set <code>MONGODB_URI</code> to this string in its environment variables, and <code>MONGODB_DB_NAME</code> if you want a database name other than <code>bymsy</code>.</li>
          <li>Redeploy. This page's status will flip to <strong>Connected</strong>.</li>
        </ol>
        <p className="admin-lede">
          One more thing: this backend is a standalone Node/Express server, so it needs a host built for that (Render,
          Railway, Fly.io, a small VPS) — Vercel itself is built for the Next.js frontend and serverless functions, not a
          persistent Express app. Deploy the frontend to Vercel as planned, deploy this backend elsewhere, then set
          <code>NEXT_PUBLIC_API_URL</code> on the Vercel project to that backend's URL.
        </p>
      </div>
    </>
  );
}

export default function Page() {
  return <AdminShell><AdminDatabase /></AdminShell>;
}
