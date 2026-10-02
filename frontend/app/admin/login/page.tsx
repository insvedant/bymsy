'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '@/lib/site';
import { getAdminToken, setAdminToken } from '@/lib/admin';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (getAdminToken()) router.replace('/admin/');
  }, [router]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`${SITE.apiUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        setStatus('error');
        setError(data.error || 'Could not sign in.');
        return;
      }
      setAdminToken(data.token);
      router.replace('/admin/');
    } catch {
      setStatus('error');
      setError('Could not reach the server. Is the API running?');
    }
  }

  return (
    <div className="admin-login">
      <form className="admin-login-card" onSubmit={onSubmit}>
        <h1>bymsy admin</h1>
        <p className="admin-login-sub">Sign in to view leads and edit contact details.</p>
        <div className="field">
          <label htmlFor="admin-email">Email</label>
          <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Signing in…' : 'Sign in'}
        </button>
        {status === 'error' && <p className="form-status form-status-err" role="alert">{error}</p>}
      </form>
    </div>
  );
}
