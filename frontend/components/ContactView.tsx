'use client';

import { useApp } from './Providers';
import { LeadForm } from './LeadForm';
import { SITE } from '@/lib/site';
import { useSiteSettings } from './SiteSettingsProvider';

export function ContactView() {
  const { t } = useApp();
  const settings = useSiteSettings();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{t.contact.h1}</h1>
          <p className="lede">{t.contact.sub}</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <LeadForm source="contact" />
          <aside className="contact-aside">
            <h2>{t.contact.officeTitle}</h2>
            <address>
              {SITE.city}, {SITE.region}<br />
              {SITE.country}
            </address>
            <p><a href={`mailto:${settings.email}`}>{settings.email}</a></p>
            <p><a href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{settings.phone}</a></p>
            <p className="aside-note">{t.contact.reply}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
