'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

/**
 * Global smooth-scroll: eased native scrolling (Lenis), plus a --scroll-y
 * CSS variable other components read for subtle scroll-linked motion
 * (e.g. the hero parallax). Skipped entirely for reduced-motion, so no
 * inertia is imposed on anyone who has asked for less animation.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith('/admin')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 1 });
    document.documentElement.classList.add('has-lenis');

    let raf = 0;
    const setVar = (y: number) => document.documentElement.style.setProperty('--scroll-y', String(Math.max(0, y)));
    lenis.on('scroll', ({ scroll }: { scroll: number }) => setVar(scroll));

    const tick = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);

    // In-page anchors (FAQ jump links, footer/menu #service links) get the same easing.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.querySelector(url.hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -96 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      document.documentElement.classList.remove('has-lenis');
      lenis.destroy();
    };
    // Recreated per route: a fresh document height after navigation keeps Lenis's measurements correct.
  }, [pathname]);

  useEffect(() => {
    if (pathname?.startsWith('/admin')) return;
    // Landing on a page with a #hash (e.g. a pricing chip link) still needs the offset applied once Lenis is live.
    if (!window.location.hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      el?.scrollIntoView({ block: 'start' });
    }, 60);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
