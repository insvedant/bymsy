'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from './Providers';
import { useSiteSettings } from './SiteSettingsProvider';

/** Sticky call / start-a-project bar, shown on phones only. */
export function MobileBar() {
  const { t } = useApp();
  const settings = useSiteSettings();
  const pathname = usePathname();
  if (pathname?.startsWith('/contact-us') || pathname?.startsWith('/admin')) return null;
  return (
    <div className="mobile-bar">
      <a className="btn btn-ghost" href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{t.common.call}</a>
      <Link className="btn btn-primary" href="/contact-us/">{t.nav.start}</Link>
    </div>
  );
}
