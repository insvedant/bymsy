import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectPageView } from '@/components/ProjectPageView';
import { PROJECTS, projectBySlug } from '@/lib/portfolio';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projectBySlug(params.slug);
  if (!p) return {};
  return {
    title: p.t.en.title,
    description: p.t.en.summary,
    alternates: { canonical: `/portfolio/${p.slug}/` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = projectBySlug(params.slug);
  if (!p) notFound();
  return <ProjectPageView project={p} />;
}
