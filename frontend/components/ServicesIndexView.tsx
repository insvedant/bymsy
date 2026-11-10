'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { SERVICE_GROUPS, GROUP_ORDER } from '@/lib/site';
import { groupLabel, plansFor, serviceHref, serviceIndex } from '@/lib/services';

export function ServicesIndexView() {
  const { t, locale } = useApp();
  const si = t.servicesIndex;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{t.servicePage.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{si.title}</span>
          </nav>
          <h1>{si.h1}</h1>
          <p className="lede">{si.sub}</p>
        </div>
      </section>

      {GROUP_ORDER.map((g, gi) => (
        <section key={g} className={`section${gi % 2 ? ' section-soft' : ''}`}>
          <div className="container">
            <div className="section-head"><h2>{groupLabel(t.menu, g)}</h2></div>
            <div className="service-grid">
              {SERVICE_GROUPS[g].map((id) => {
                const s = t.services.items[serviceIndex(id)];
                return (
                  <Link key={id} href={serviceHref(id)} className="service-card">
                    <span className="service-tag">{s.tag}</span>
                    <h3>{s.n}</h3>
                    <p>{s.d}</p>
                    <ul className="service-plans">
                      {plansFor(id).slice(0, 4).map((p) => <li key={p.id}>{p.t[locale][0]}</li>)}
                    </ul>
                    <span className="text-link">{si.view}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{t.cta.title}</h2>
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
