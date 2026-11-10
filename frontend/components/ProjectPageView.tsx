'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { ProjectVisual } from './ProjectVisual';
import { WorkCard } from './WorkCard';
import { Reveal, revealDelay } from './Reveal';
import { PROJECTS, Project } from '@/lib/portfolio';
import { midSentence, serviceHref, serviceIndex } from '@/lib/services';

export function ProjectPageView({ project }: { project: Project }) {
  const { t, locale } = useApp();
  const pf = t.portfolio;
  const c = project.t[locale];
  const svc = t.services.items[serviceIndex(project.service)];
  const svcName = locale === 'en' ? svc.n : midSentence(svc.n);
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{t.servicePage.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href="/portfolio/">{pf.title}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.title}</span>
          </nav>
          {project.kind === 'concept' && <p className="badge-concept badge-inline">{pf.concept}</p>}
          <h1>{c.title}</h1>
          <p className="lede">{c.summary}</p>
        </div>
      </section>

      <section className="section project-section">
        <div className="container">
          <Reveal variant="scale" className="project-visual"><ProjectVisual type={project.visual} /></Reveal>

          <div className="project-grid">
            <Reveal className="project-main">
              <h2>{pf.challenge}</h2>
              <p>{c.challenge}</p>
              <h2>{pf.solution}</h2>
              <p>{c.solution}</p>
              <h2>{pf.features}</h2>
              <ul className="check-list">
                {c.features.map((f, i) => (
                  <Reveal as="li" key={f} delay={revealDelay(i, 70)}>{f}</Reveal>
                ))}
              </ul>
            </Reveal>

            <Reveal as="aside" className="project-aside" delay={140}>
              <h3>{pf.stack}</h3>
              <ul className="tag-row">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <h3>{pf.related}</h3>
              <p>{pf.relatedText.replace('{n}', svcName)}</p>
              <Link href={serviceHref(project.service)} className="btn btn-primary btn-sm">{svc.n}</Link>
              {project.kind === 'concept' && <p className="aside-note">{pf.conceptNote}</p>}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head"><h2>{pf.more}</h2></div>
          <div className="work-grid work-grid-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={revealDelay(i, 90)}><WorkCard project={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{pf.ctaTitle}</h2>
            <p>{t.cta.sub}</p>
          </div>
          <div className="cta-actions">
            <Link href={`/contact-us/?service=${project.service}`} className="btn btn-gold">{t.cta.btn}</Link>
            <span className="cta-place">{t.cta.place}</span>
          </div>
        </div>
      </section>
    </>
  );
}
