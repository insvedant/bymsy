'use client';

import { useEffect, useRef, useState } from 'react';

type Step = { t: string; d: string; dur?: string };
export type IconKind = 'search' | 'design' | 'build' | 'launch';
export const STEP_ICON_ORDER: IconKind[] = ['search', 'design', 'build', 'launch'];
const ICONS = STEP_ICON_ORDER;

export function StepIcon({ kind, size = 30 }: { kind: IconKind; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 30 30', fill: 'none' as const, 'aria-hidden': true };
  if (kind === 'search') {
    return (
      <svg {...common}>
        <circle className="si-draw" cx="13" cy="13" r="8.5" stroke="currentColor" strokeWidth="2.2" />
        <line className="si-draw si-d2" x1="19.2" y1="19.2" x2="26" y2="26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'design') {
    return (
      <svg {...common}>
        <path className="si-draw" d="M6 24 L6 19.5 L19 6.5 A2.6 2.6 0 0 1 22.7 10.2 L9.7 23.2 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <line className="si-draw si-d2" x1="16.5" y1="9" x2="20.5" y2="13" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }
  if (kind === 'build') {
    return (
      <svg {...common}>
        <path className="si-draw" d="M11 8 L4 15 L11 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="si-draw si-d2" d="M19 8 L26 15 L19 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path className="si-draw" d="M15 4c4 2 6.5 6 6.5 11 0 3-.9 5.7-2.2 7.9l-2.1-2.1M15 4c-4 2-6.5 6-6.5 11 0 3 .9 5.7 2.2 7.9l2.1-2.1M8.5 20.8 5 22l1.2-3.5M21.5 20.8 25 22l-1.2-3.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="si-draw si-d2" cx="15" cy="13" r="2.6" stroke="currentColor" strokeWidth="2.1" />
    </svg>
  );
}

/** "How we work": each step's number, icon and text draw in as it scrolls into view. */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  const [shown, setShown] = useState<boolean[]>(() => steps.map(() => false));
  const refs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setShown((prev) => (prev[i] ? prev : prev.map((v, idx) => (idx === i ? true : v))));
          io.disconnect();
        },
        { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
      );
      io.observe(el);
      return io;
    });
    const fallback = setTimeout(() => setShown(steps.map(() => true)), 1800);
    return () => { observers.forEach((io) => io?.disconnect()); clearTimeout(fallback); };
  }, [steps.length]);

  return (
    <ol className="steps steps-animated">
      {steps.map((s, i) => (
        <li
          key={s.t}
          ref={(el) => { refs.current[i] = el; }}
          className={`step${shown[i] ? ' is-shown' : ''}`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div className="step-top">
            <span className="step-num">{i + 1}</span>
            <span className="step-icon"><StepIcon kind={ICONS[i] ?? 'build'} /></span>
            {s.dur && <span className="step-dur">{s.dur}</span>}
          </div>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}
