'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { SITE } from '@/lib/site';
import { useSiteSettings } from './SiteSettingsProvider';
import { Reveal, revealDelay } from './Reveal';

export function AboutView() {
  const { t } = useApp();
  const settings = useSiteSettings();
  const a = t.aboutPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{t.servicePage.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{a.crumb}</span>
          </nav>
          <h1>{a.h1}</h1>
          <p className="lede">{a.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <p className="about-p about-p-first">{a.p1}</p>
            <p className="about-p">{a.p2}</p>
          </Reveal>
          <Reveal as="dl" className="facts" delay={120}>
            {a.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container about-grid">
          <div>
            <h2 className="about-h2">{a.locTitle}</h2>
            <p className="about-p">{a.locText}</p>
          </div>
          <div className="office-card">
            <h3>{t.footer.hq}</h3>
            <address>
              {SITE.city}, {SITE.region}<br />
              {SITE.country}
            </address>
            <p><a href={`mailto:${settings.email}`}>{settings.email}</a></p>
            <p><a href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{settings.phone}</a></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><h2>{a.howTitle}</h2></div>
          <div className="why-grid">
            {t.why.items.map((it, i) => (
              <Reveal key={it.t} delay={revealDelay(i, 60)}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{a.ctaTitle}</h2>
            <p>{t.cta.sub}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact-us/" className="btn btn-gold">{t.cta.btn}</Link>
            <span className="cta-place">{t.cta.place}</span>
          </div>
        </div>
      </section>
    </>
  );
}
