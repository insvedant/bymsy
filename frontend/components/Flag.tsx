import type { Locale } from '@/lib/i18n';

// Inline SVG flags: emoji flags do not render on Windows browsers.
export function Flag({ code }: { code: Locale }) {
  const common = { width: 22, height: 15, viewBox: '0 0 30 20', 'aria-hidden': true, focusable: 'false' } as const;
  if (code === 'fr') {
    return (
      <svg {...common} className="flag">
        <rect width="10" height="20" fill="#1f3f9b" />
        <rect x="10" width="10" height="20" fill="#fff" />
        <rect x="20" width="10" height="20" fill="#d6283a" />
      </svg>
    );
  }
  if (code === 'es') {
    return (
      <svg {...common} className="flag">
        <rect width="30" height="20" fill="#c8202f" />
        <rect y="5" width="30" height="10" fill="#f7c31b" />
      </svg>
    );
  }
  return (
    <svg {...common} className="flag">
      <rect width="30" height="20" fill="#1f3a7a" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#c8202f" strokeWidth="1.6" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#c8202f" strokeWidth="3.4" />
    </svg>
  );
}
