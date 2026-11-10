import type { MetadataRoute } from 'next';
import { SERVICE_IDS, SERVICE_SLUGS, SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['/', '/services/', '/portfolio/', '/about-us/', '/contact-us/',
    ...PROJECTS.map((p) => `/portfolio/${p.slug}/`),
    ...SERVICE_IDS.map((id) => `/services/${SERVICE_SLUGS[id]}/`)];
  return routes.map((r) => ({ url: `${SITE.url}${r}`, lastModified: now }));
}
