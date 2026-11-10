'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { clearAdminToken, getAdminToken } from '@/lib/admin';

const NAV = [
  { href: '/admin/', label: 'Overview' },
  { href: '/admin/leads/', label: 'Leads' },
  { href: '/admin/database/', label: 'Database' },
  { href: '/admin/settings/', label: 'Site settings' },
];

/** Wraps every /admin page except /admin/login: redirects out if there is no token. */
export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getAdminToken()) {
      router.replace('/admin/login/');
      return;
    }
    setReady(true);
  }, [router]);

  const logout = () => {
    clearAdminToken();
    router.replace('/admin/login/');
  };

  if (!ready) return null;

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <div className="admin-brand">bymsy admin</div>
        <nav className="admin-nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={pathname === n.href ? 'is-active' : ''}>{n.label}</Link>
          ))}
        </nav>
        <div className="admin-side-foot">
          <Link href="/" className="admin-view-site">View site</Link>
          <button type="button" className="admin-logout" onClick={logout}>Log out</button>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
