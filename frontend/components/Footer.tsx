'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useApp } from './Providers';
import { Logo } from './Logo';
import { SERVICE_IDS, SITE } from '@/lib/site';
import { serviceHref } from '@/lib/services';
import { useSiteSettings } from './SiteSettingsProvider';
import { LOCALE_TAGS } from '@/lib/i18n';

type Geo = { city: string | null; country: string | null; timezone: string | null };

function timeIn(tz: string | undefined, tag: string, now: Date): string {
  try {
    return new Intl.DateTimeFormat(tag, {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }).format(now);
  } catch {
    return '';
  }
}

export function Footer() {
  const { t, locale } = useApp();
  const settings = useSiteSettings();
  const pathname = usePathname();
  const [now, setNow] = useState<Date | null>(null);
  const [geo, setGeo] = useState<Geo | null>(null);
  const [browserTz, setBrowserTz] = useState<string | undefined>(undefined);

  // Live clock (starts after mount so server and client markup match).
  useEffect(() => {
    setNow(new Date());
    setBrowserTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // The backend reads the visitor's IP and returns city, country and timezone.
  // If it is unreachable, the browser's own timezone is used instead.
  useEffect(() => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    fetch(`${SITE.apiUrl}/api/geo`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((g) => { if (g && g.timezone) setGeo(g); })
      .catch(() => { /* fall back to browser timezone */ })
      .finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, []);

  const tag = LOCALE_TAGS[locale];
  const visitorTz = geo?.timezone || browserTz;
  let countryName = geo?.country || '';
  try {
    if (geo?.country) countryName = new Intl.DisplayNames([tag], { type: 'region' }).of(geo.country) || geo.country;
  } catch { /* keep the code */ }
  const place = geo ? [geo.city, countryName].filter(Boolean).join(', ') : '';

  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="bymsy"><Logo light /></Link>
          <p>{t.footer.tag}</p>
          <address>
            <strong>{t.footer.hq}</strong><br />
            {SITE.city}, {SITE.region}, {SITE.country}<br />
            <a href={`mailto:${settings.email}`}>{settings.email}</a><br />
            <a href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{settings.phone}</a>
          </address>
        </div>

        <div>
          <h2 className="footer-h">{t.footer.services}</h2>
          <ul>
            {SERVICE_IDS.map((id, i) => (
              <li key={id}><Link href={serviceHref(id)}>{t.services.items[i].n}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-h">{t.footer.company}</h2>
          <ul>
            <li><Link href="/portfolio/">{t.nav.work}</Link></li>
            <li><Link href="/about-us/">{t.nav.about}</Link></li>
            <li><Link href="/#process">{t.nav.process}</Link></li>
            <li><Link href="/contact-us/">{t.nav.contact}</Link></li>
          </ul>
          <h2 className="footer-h footer-h-gap">{t.footer.follow}</h2>
          <ul>
            <li><a href={settings.social.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href={settings.social.instagram} rel="noopener noreferrer" target="_blank">Instagram</a></li>
            <li><a href={settings.social.x} rel="noopener noreferrer" target="_blank">X</a></li>
          </ul>
        </div>

        <div className="footer-clocks" aria-live="off">
          <div className="clock">
            <span className="clock-label">{t.footer.calgary}</span>
            <span className="clock-time">{now ? timeIn(SITE.timezone, tag, now) : '--:--:--'}</span>
          </div>
          <div className="clock">
            <span className="clock-label">{t.footer.you}{place ? ` · ${place}` : ''}</span>
            <span className="clock-time">{now && visitorTz ? timeIn(visitorTz, tag, now) : '--:--:--'}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <svg className="footer-mark" viewBox="0 0 1000 330" aria-hidden="true" focusable="false">
          <text className="fm-text" x="0" y="150">BYMSY</text>
          <text className="fm-text" x="0" y="312" textLength="1000" lengthAdjust="spacingAndGlyphs">CONSULTANCY</text>
        </svg>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} bymsy. {t.footer.rights}</span>
      </div>
    </footer>
  );
}
