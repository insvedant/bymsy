'use client';

import Link from 'next/link';
import { useApp } from './Providers';
import type { Plan } from '@/lib/pricing';

export function PlanCard({ plan }: { plan: Plan }) {
  const { t, locale } = useApp();
  const [name, ...features] = plan.t[locale];
  return (
    <article className={`plan${plan.popular ? ' plan-popular' : ''}`}>
      {plan.popular && <span className="badge">{t.common.popular}</span>}
      <h3>{name}</h3>
      <ul>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Link href={`/contact-us/?service=${plan.cat}&plan=${plan.id}`} className="btn btn-ghost btn-sm plan-cta">
        {t.servicePage.choose}
      </Link>
    </article>
  );
}
