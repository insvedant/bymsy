'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { TECH_STACK } from '@/lib/site';
import { PROJECTS } from '@/lib/portfolio';
import { WorkCard } from './WorkCard';
import { Reveal, revealDelay } from './Reveal';
import { BuildScene } from './BuildScene';
import { WorkProcess } from './WorkProcess';
import { ServicesShowcase } from './ServicesShowcase';
import { PracticeSection } from './PracticeSection';
import { CountUp } from './CountUp';
import { ToolBadge } from './ToolBadge';
import { FaqAccordion } from './FaqAccordion';

export function HomeView() {
  const { t } = useApp();
  const marquee = [...TECH_STACK, ...TECH_STACK];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-place hero-in" style={{ animationDelay: '0s' }}>{t.hero.place}</p>
            <h1 className="hero-in" style={{ animationDelay: '0.1s' }}>{t.hero.title}</h1>
            <p className="lede hero-in" style={{ animationDelay: '0.24s' }}>{t.hero.sub}</p>
            <div className="btn-row hero-in" style={{ animationDelay: '0.38s' }}>
              <Link href="/contact-us/" className="btn btn-primary">{t.hero.primary}</Link>
              <Link href="/services/" className="btn btn-ghost">{t.hero.secondary}</Link>
            </div>
            <Link href="/contact-us/" className="hero-glow hero-in" style={{ animationDelay: '0.5s' }}>
              <span className="hero-glow-dot" />
              {t.hero.glow}
            </Link>
          </div>
          <div className="hero-visual">
            <BuildScene />
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label={t.stack}>
        <p className="marquee-title">{t.stack}</p>
        <div className="marquee" aria-hidden="true">
          <ul className="marquee-track">
            {marquee.map((s, i) => (
              <li key={`${s}-${i}`}><ToolBadge name={s} /><span>{s}</span></li>
            ))}
          </ul>
        </div>
        <ul className="sr-only">{TECH_STACK.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {t.stats.map((s, i) => (
            <Reveal key={s.l} className="stat" delay={revealDelay(i, 90)}>
              <strong><CountUp value={s.v} /></strong>
              <span>{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <ServicesShowcase />
      <PracticeSection group="salesforce" translationKey="salesforce" quoteServiceId="sf-consulting" />
      <PracticeSection group="sap" translationKey="sap" quoteServiceId="sap-support" />
      <PracticeSection group="m365" translationKey="m365" quoteServiceId="m365-security" />
      <PracticeSection group="bitrix" translationKey="bitrix" quoteServiceId="bx-support" />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t.portfolio.selectedTitle}</h2>
            <p>{t.portfolio.selectedSub}</p>
            <Link href="/portfolio/" className="text-link">{t.portfolio.title}</Link>
          </div>
          <div className="work-grid work-grid-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={revealDelay(i, 80)}><WorkCard project={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section section-soft process-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>{t.process.title}</h2>
            <p>{t.process.sub}</p>
          </Reveal>
          <WorkProcess steps={t.process.steps} title={t.process.title} labels={{ durLabel: t.process.durLabel, outLabel: t.process.outLabel }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t.industries.title}</h2>
            <p>{t.industries.sub}</p>
          </div>
          <ul className="industry-grid">
            {t.industries.items.map((it, i) => (
              <Reveal key={it.t} as="li" delay={revealDelay(i, 50)}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head"><h2>{t.why.title}</h2></div>
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

      <section id="about" className="section">
        <div className="container about-grid">
          <Reveal>
            <h2>{t.about.title}</h2>
            <p className="about-p">{t.about.p1}</p>
            <p className="about-p">{t.about.p2}</p>
            <Link href="/about-us/" className="btn btn-primary">{t.about.cta}</Link>
          </Reveal>
          <Reveal as="dl" className="facts" delay={120}>
            {t.about.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-wrap">
          <h2>{t.faq.title}</h2>
          <FaqAccordion items={t.faq.items} />
        </div>
      </section>

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
