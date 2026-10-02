import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageView } from '@/components/ServicePageView';
import { dict } from '@/lib/i18n';
import { SERVICE_IDS, SERVICE_SLUGS } from '@/lib/site';
import { idFromSlug, serviceIndex } from '@/lib/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_IDS.map((id) => ({ slug: SERVICE_SLUGS[id] }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const id = idFromSlug(params.slug);
  if (!id) return {};
  const item = dict.en.services.items[serviceIndex(id)];
  return {
    title: `${item.n} in Calgary`,
    description: `${item.d} Fixed-scope packages with transparent pricing from bymsy, Calgary, Alberta.`,
    alternates: { canonical: `/services/${params.slug}/` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const id = idFromSlug(params.slug);
  if (!id) notFound();
  return <ServicePageView id={id} />;
}
