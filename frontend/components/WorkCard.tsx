'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { ProjectVisual } from './ProjectVisual';
import type { Project } from '@/lib/portfolio';
import { serviceIndex } from '@/lib/services';

export function WorkCard({ project }: { project: Project }) {
  const { t, locale } = useApp();
  const c = project.t[locale];
  return (
    <Link href={`/portfolio/${project.slug}/`} className="work-card">
      <div className="work-visual">
        <ProjectVisual type={project.visual} />
        {project.kind === 'concept' && <span className="badge-concept">{t.portfolio.concept}</span>}
      </div>
      <div className="work-body">
        <span className="service-tag">{t.services.items[serviceIndex(project.service)].n}</span>
        <h3>{c.title}</h3>
        <p>{c.summary}</p>
        <ul className="tag-row">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <span className="text-link">{t.portfolio.view}</span>
      </div>
    </Link>
  );
}
