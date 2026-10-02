'use client';

import { ElementType, ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** 'up' (default) for content, 'scale' for cards/media. */
  variant?: 'up' | 'scale' | 'fade';
  [key: string]: unknown;
};

/**
 * Reveals its children with a short fade/slide once they scroll into view.
 * Falls back to visible immediately if IntersectionObserver is unavailable
 * or the reveal never fires (guards against being stuck hidden).
 */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'up', ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    const fallback = setTimeout(() => setShown(true), 1500);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${shown ? ' is-shown' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** For a list where each child should stagger in; pass the array index as `i`. */
export function revealDelay(i: number, step = 70, max = 420) {
  return Math.min(i * step, max);
}
