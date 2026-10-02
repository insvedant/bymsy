import { SITE } from './site';

const TOKEN_KEY = 'bymsy.admin.token';

export function getAdminToken(): string | null {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
}
export function setAdminToken(token: string) {
  try { localStorage.setItem(TOKEN_KEY, token); } catch { /* ignore */ }
}
export function clearAdminToken() {
  try { localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ }
}

/** Fetch wrapper that attaches the admin bearer token and redirects to login on 401. */
export async function adminFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getAdminToken();
  const res = await fetch(`${SITE.apiUrl}${path}`, {
    ...init,
    headers: {
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers || {}),
    },
  });
  if (res.status === 401 && typeof window !== 'undefined') {
    clearAdminToken();
    window.location.href = '/admin/login/';
  }
  return res;
}

export type Lead = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  plan?: string;
  budget?: string;
  message?: string;
  source: 'contact' | 'popup';
  locale: string;
  status?: string;
  createdAt: string;
};

export type SiteSettings = {
  email: string;
  phone: string;
  social: { linkedin: string; instagram: string; x: string };
};
