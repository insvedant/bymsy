'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import { ServiceIcon } from './ServiceIcon';
import { Reveal, revealDelay } from './Reveal';
import { SERVICE_GROUPS, GroupId } from '@/lib/site';
import { serviceHref, serviceIndex } from '@/lib/services';

type Theme = { className: string; eyebrow: string };

const THEMES: Record<Exclude<GroupId, 'engineering' | 'marketing'>, Theme> = {
  salesforce: { className: 'sf', eyebrow: 'sf' },
  sap: { className: 'sap', eyebrow: 'sap' },
  m365: { className: 'm365', eyebrow: 'm365' },
  bitrix: { className: 'bx', eyebrow: 'bx' },
};

/**
 * A homepage section for one non-engineering practice group (Salesforce, SAP,
 * Microsoft 365, Bitrix24) — visually distinct from the main services grid,
 * and from each other, via a per-group colour theme in globals.css.
 */
export function PracticeSection({
  group,
  translationKey,
  quoteServiceId,
}: {
  group: Exclude<GroupId, 'engineering' | 'marketing'>;
  translationKey: 'salesforce' | 'sap' | 'm365' | 'bitrix';
  quoteServiceId: string;
}) {
  const { t } = useApp();
  const ids = SERVICE_GROUPS[group];
  const theme = THEMES[group];
  const copy = t[translationKey];
  const menuLabel = { salesforce: t.menu.sf, sap: t.menu.sap, m365: t.menu.m365, bitrix: t.menu.bx }[group];
  const headingId = `${theme.className}-heading`;

  return (
    <section className={`section ${theme.className}-section`} aria-labelledby={headingId}>
      <div className={`${theme.className}-bg`} aria-hidden="true" />
      <div className="container">
        <Reveal as="div" className={`${theme.className}-head`}>
          <span className={`${theme.className}-eyebrow`}>{menuLabel}</span>
          <h2 id={headingId}>{copy.title}</h2>
          <p>{copy.sub}</p>
        </Reveal>

        <div className={`${theme.className}-grid`}>
          {ids.map((id, i) => {
            const s = t.services.items[serviceIndex(id)];
            return (
              <Reveal key={id} as={Link} href={serviceHref(id)} className={`${theme.className}-card`} variant="scale" delay={revealDelay(i, 60)}>
                <span className={`${theme.className}-icon`}><ServiceIcon id={id} /></span>
                <h3>{s.n}</h3>
                <p>{s.d}</p>
                <span className={`text-link ${theme.className}-link`}>{t.services.explore}</span>
              </Reveal>
            );
          })}
        </div>

        <Reveal as="div" className={`${theme.className}-cta`} delay={120}>
          <Link href={`/contact-us/?service=${quoteServiceId}`} className="btn btn-primary">{copy.cta}</Link>
        </Reveal>
      </div>
    </section>
  );
}
