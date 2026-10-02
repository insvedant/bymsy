import { PLANS, Plan } from './pricing';
import { SERVICE_IDS, SERVICE_SLUGS, GroupId, ServiceId } from './site';
import type { Dict } from './i18n';

export const serviceIndex = (id: ServiceId) => SERVICE_IDS.indexOf(id);
export const serviceHref = (id: ServiceId) => `/services/${SERVICE_SLUGS[id]}/`;
export const plansFor = (id: ServiceId): Plan[] => PLANS.filter((p) => p.cat === id);

export function idFromSlug(slug: string): ServiceId | undefined {
  return SERVICE_IDS.find((id) => SERVICE_SLUGS[id] === slug);
}

/** The "Popular" package if the service has one, otherwise its first package. */
export function featuredPlan(id: ServiceId): Plan | undefined {
  const all = plansFor(id);
  return all.find((p) => p.popular) ?? all[0];
}

/** Lower-case the first letter for use mid-sentence in French and Spanish, unless it is an acronym. */
export function midSentence(name: string): string {
  if (name.length > 1 && name[0] === name[0].toUpperCase() && name[1] === name[1].toLowerCase()) {
    return name[0].toLowerCase() + name.slice(1);
  }
  return name;
}

export function groupLabel(menu: Dict['menu'], g: GroupId): string {
  return { engineering: menu.eng, marketing: menu.mkt, salesforce: menu.sf, sap: menu.sap, m365: menu.m365, bitrix: menu.bx }[g];
}
