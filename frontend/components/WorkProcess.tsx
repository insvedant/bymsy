'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { ProcessSteps, StepIcon, STEP_ICON_ORDER } from './ProcessSteps';

type Step = { t: string; d: string; dur: string; out: string; b: string[] };
type Labels = { durLabel: string; outLabel: string };
const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Desktop: a pinned tab strip + panel — the active step advances as you
 * scroll past it (framer-motion's scroll-linked useScroll/useTransform),
 * and can also be jumped to by clicking a tab. The section heading stays
 * pinned alongside the tabs, so it's visible throughout the scroll, not
 * just before it starts. Falls back to the plain stacked ProcessSteps on
 * small screens and under reduced motion, where a pinned section would
 * only add scroll friction.
 */
export function WorkProcess({ steps, title, labels }: { steps: Step[]; title: string; labels: Labels }) {
  const [reduced, setReduced] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mw = window.matchMedia('(max-width: 999px)');
    const set = () => { setReduced(mq.matches); setNarrow(mw.matches); };
    set();
    mq.addEventListener('change', set);
    mw.addEventListener('change', set);
    return () => { mq.removeEventListener('change', set); mw.removeEventListener('change', set); };
  }, []);

  if (reduced || narrow) return <ProcessSteps steps={steps} />;
  return <PinnedProcess steps={steps} title={title} labels={labels} />;
}

function PinnedProcess({ steps, title, labels }: { steps: Step[]; title: string; labels: Labels }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const stepValue = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const fillWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(stepValue, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.round(v)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const jump = (i: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const range = Math.max(0, wrap.offsetHeight - window.innerHeight);
    const progress = steps.length > 1 ? i / (steps.length - 1) : 0;
    window.scrollTo({ top: wrap.offsetTop + range * progress, behavior: 'smooth' });
  };

  return (
    <div className="wp-wrap" ref={wrapRef} style={{ height: `${steps.length * 68}vh` }}>
      <div className="wp-pin">
        <p className="wp-heading">{title}</p>

        <div className="wp-tabs" role="tablist" aria-label={title}>
          {steps.map((s, i) => (
            <button
              key={s.t}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`wp-tab${active === i ? ' is-active' : ''}`}
              onClick={() => jump(i)}
            >
              <span className="wp-tab-num">{pad(i + 1)}</span>
              <span className="wp-tab-title">{s.t}</span>
            </button>
          ))}
        </div>

        <div className="wp-track" aria-hidden="true">
          <motion.span className="wp-track-fill" style={{ width: fillWidth }} />
        </div>

        <div className="wp-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.45, ease: [0.22, 0.7, 0.2, 1] }}
              className="wp-panel-inner"
            >
              <span className="wp-num">{pad(active + 1)}</span>
              <div className="wp-panel-body">
                <div className="wp-panel-head">
                  <span className="wp-panel-icon"><StepIcon kind={STEP_ICON_ORDER[active] ?? 'build'} size={38} /></span>
                  <h3>{steps[active].t}</h3>
                  <span className="wp-dur">{labels.durLabel}: {steps[active].dur}</span>
                </div>
                <p>{steps[active].d}</p>
                <ul className="wp-bullets">
                  {steps[active].b.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <p className="wp-out"><strong>{labels.outLabel}:</strong> {steps[active].out}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
