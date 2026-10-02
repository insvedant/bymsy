'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './Providers';
import { WorkCard } from './WorkCard';
import { Reveal, revealDelay } from './Reveal';
import { PROJECTS } from '@/lib/portfolio';
import { SERVICE_IDS, ServiceId } from '@/lib/site';
import { serviceIndex } from '@/lib/services';

export function PortfolioIndexView() {
  const { t } = useApp();
  const [filter, setFilter] = useState<'all' | ServiceId>('all');
  const services = SERVICE_IDS.filter((id) => PROJECTS.some((p) => p.service === id));
  const shown = PROJECTS.filter((p) => filter === 'all' || p.service === filter);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{t.servicePage.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{t.portfolio.title}</span>
          </nav>
          <h1>{t.portfolio.h1}</h1>
          <p className="lede">{t.portfolio.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chips filter-chips" role="group" aria-label={t.portfolio.title}>
            <button type="button" className="chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t.portfolio.all}</button>
            {services.map((id) => (
              <button key={id} type="button" className="chip" aria-pressed={filter === id} onClick={() => setFilter(id)}>
                {t.services.items[serviceIndex(id)].n}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={revealDelay(i % 3, 80)}><WorkCard project={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{t.portfolio.ctaTitle}</h2>
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
