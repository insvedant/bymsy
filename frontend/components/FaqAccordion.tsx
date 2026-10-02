'use client';

import { useId, useState } from 'react';

type QA = { q: string; a: string };

function PlusMinus() {
  return (
    <svg className="faq-icon" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line className="faq-icon-v" x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AccordionItem({ q, a, open, onToggle }: QA & { open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <h3>
        <button type="button" className="faq-q" id={`${id}-h`} aria-expanded={open} aria-controls={`${id}-p`} onClick={onToggle}>
          <span>{q}</span>
          <PlusMinus />
        </button>
      </h3>
      <div className="faq-panel" role="region" aria-labelledby={`${id}-h`} id={`${id}-p`}>
        <div className="faq-panel-inner"><p>{a}</p></div>
      </div>
    </div>
  );
}

/** Animated accordion (height + icon rotate), one or more items open at once. */
export function FaqAccordion({ items }: { items: QA[] }) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) => setOpenSet((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return (
    <div className="faq">
      {items.map((it, i) => (
        <AccordionItem key={it.q} q={it.q} a={it.a} open={openSet.has(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}
