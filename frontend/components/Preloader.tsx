'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogoMark } from './Logo';

const KEY = 'bymsy.loaded';

/**
 * Full-screen loader: a percentage counter over a faint page skeleton, then a
 * curtain lifts to reveal the site. Shown once per browser session.
 */
export function Preloader() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<'run' | 'leave' | 'gone'>(isAdmin ? 'gone' : 'run');

  useEffect(() => {
    if (isAdmin) return;
    let seen = false;
    try { seen = sessionStorage.getItem(KEY) === '1'; } catch { /* ignore */ }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduce) { setPhase('gone'); return; }

    let raf = 0;
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();
    const DURATION = 1300;
    let loaded = document.readyState === 'complete';
    const onLoad = () => { loaded = true; };
    window.addEventListener('load', onLoad);

    const tick = (now: number) => {
      const elapsed = now - start;
      const eased = 1 - Math.pow(1 - Math.min(1, elapsed / DURATION), 3);
      // Hold at 92% until the page has really finished loading (3 s safety limit).
      const cap = loaded || elapsed > 3000 ? 1 : 0.92;
      const v = Math.min(eased, cap);
      setPct(Math.round(v * 100));
      if (v >= 1) {
        setPhase('leave');
        try { sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
        leaveTimer = setTimeout(() => setPhase('gone'), 850);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (leaveTimer) clearTimeout(leaveTimer);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`preloader${phase === 'leave' ? ' is-leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading">
      <div className="pl-skeleton" aria-hidden="true">
        <div className="pl-nav"><i className="pl-pill pl-w1" /><i className="pl-pill pl-w2" /><i className="pl-pill pl-w3" /></div>
        <div className="pl-hero">
          <i className="pl-bar pl-b1" /><i className="pl-bar pl-b2" /><i className="pl-bar pl-b3" />
          <i className="pl-line" /><i className="pl-line pl-short" />
        </div>
        <div className="pl-cards"><i /><i /><i /></div>
      </div>
      <div className="pl-center">
        <LogoMark size={72} />
        <div className="pl-count" aria-hidden="true">
          <span>{String(pct).padStart(2, '0')}</span><small>%</small>
        </div>
        <div className="pl-track" aria-hidden="true"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
      </div>
    </div>
  );
}
