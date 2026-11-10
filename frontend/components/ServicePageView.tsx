'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { FaqAccordion } from './FaqAccordion';
import { WorkProcess } from './WorkProcess';
import { Reveal, revealDelay } from './Reveal';
import { PlanCard } from './PlanCard';
import { ServiceIcon } from './ServiceIcon';
import { FAQS } from '@/lib/faqs';
import { PROCESSES } from '@/lib/processes';
import { SERVICE_IDS, ServiceId } from '@/lib/site';
import { midSentence, plansFor, serviceHref, serviceIndex } from '@/lib/services';

export function ServicePageView({ id }: { id: ServiceId }) {
  const { t, locale } = useApp();
  const sp = t.servicePage;
  const item = t.services.items[serviceIndex(id)];
  const plans = plansFor(id);
  const faqs = FAQS[id][locale];
  const steps = PROCESSES[id][locale];
  const nameInSentence = locale === 'en' ? item.n : midSentence(item.n);

  return (
    <>
      <section className="page-hero svc-hero">
        <div className="container svc-hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">{sp.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/">{sp.services}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{item.n}</span>
            </nav>
            <p className="svc-tag">{item.tag}</p>
            <h1>{item.n}</h1>
            <p className="lede">{item.d}</p>
          </div>

          <aside className="svc-card">
            <span className="svc-card-icon"><ServiceIcon id={id} /></span>
            <p className="svc-card-label">{sp.included}</p>
            <ul>
              {plans.slice(0, 4).map((p) => <li key={p.id}>{p.t[locale][0]}</li>)}
            </ul>
            <Link href={`/contact-us/?service=${id}`} className="btn btn-primary">{sp.quote}</Link>
          </aside>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <div className="section-head">
            <h2>{sp.packagesTitle}</h2>
            <p>{sp.packagesSub}</p>
          </div>
          <div className="plan-grid">
            {plans.map((p, i) => <Reveal key={p.id} variant="scale" delay={revealDelay(i, 60)}><PlanCard plan={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section-soft process-section">
        <div className="container">
          <Reveal as="div" className="section-head"><h2>{sp.processTitle}</h2></Reveal>
          <WorkProcess steps={steps} title={sp.processTitle} labels={{ durLabel: t.process.durLabel, outLabel: t.process.outLabel }} />
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <h2>{sp.faqTitle}</h2>
          <FaqAccordion items={faqs} />
          <nav className="chips other-services" aria-label={sp.other}>
            {SERVICE_IDS.filter((s) => s !== id).map((s) => (
              <Link key={s} href={serviceHref(s)}>{t.services.items[serviceIndex(s)].n}</Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{sp.ctaTitle.replace('{n}', nameInSentence)}</h2>
            <p>{t.cta.sub}</p>
          </div>
          <div className="cta-actions">
            <Link href={`/contact-us/?service=${id}`} className="btn btn-gold">{t.cta.btn}</Link>
            <span className="cta-place">{t.cta.place}</span>
          </div>
        </div>
      </section>
    </>
  );
}
