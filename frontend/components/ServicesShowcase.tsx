'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useApp } from './Providers';
import { ServiceIcon } from './ServiceIcon';
import { SERVICE_IDS } from '@/lib/site';
import { serviceHref } from '@/lib/services';

function SpotlightCard({ href, index, children }: { href: string; index: number; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    const fallback = setTimeout(() => setShown(true), 1500);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={onMove}
      className={`svc2-card${shown ? ' is-shown' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 70, 350)}ms` }}
    >
      {children}
    </Link>
  );
}

/** Home page services section: dark, glass cards with a cursor-tracked spotlight and animated gradient border. */
export function ServicesShowcase() {
  const { t } = useApp();

  return (
    <section id="services" className="section svc2-section">
      <div className="svc2-bg" aria-hidden="true">
        <div className="svc2-grid" />
        <div className="svc2-glow svc2-glow-a" />
        <div className="svc2-glow svc2-glow-b" />
      </div>

      <div className="container">
        <div className="section-head svc2-head">
          <h2>{t.services.title}</h2>
          <p>{t.services.sub}</p>
          <Link href="/services/" className="text-link svc2-link">{t.menu.all}</Link>
        </div>

        <div className="svc2-cards">
          {SERVICE_IDS.map((id, i) => {
            const s = t.services.items[i];
            return (
              <SpotlightCard key={id} href={serviceHref(id)} index={i}>
                <span className="svc2-top">
                  <span className="svc2-icon"><ServiceIcon id={id} /></span>
                  <span className="svc2-index">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="svc2-tag">{s.tag}</span>
                <h3>{s.n}</h3>
                <p>{s.d}</p>
                <span className="svc2-cta">
                  {t.services.explore}
                  <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M3 7.5h8.5M8 3l4.5 4.5L8 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
