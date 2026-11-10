'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useApp } from './Providers';
import { LeadForm } from './LeadForm';

const SEEN_KEY = 'bymsy.popup.seen';
const DELAY_MS = 10000;

export function PromoPopup() {
  const { t } = useApp();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onContact = pathname?.startsWith('/contact-us');
  const onAdmin = pathname?.startsWith('/admin');

  // Open once, five seconds after the visitor lands. Not on the contact page,
  // and not again after it has been closed in this browser session.
  useEffect(() => {
    if (onContact || onAdmin) return;
    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* ignore */ }
    if (seen) return;
    const id = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(id);
  }, [onContact, onAdmin]);

  function dismiss() {
    setOpen(false);
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* ignore */ }
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open || onAdmin) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) dismiss(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <button ref={closeRef} type="button" className="modal-close" aria-label={t.popup.close} onClick={dismiss}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <h2 id="popup-title">{t.popup.title}</h2>
        <p className="modal-sub">{t.popup.sub}</p>
        <LeadForm source="popup" compact onSuccess={() => setTimeout(dismiss, 2500)} />
      </div>
    </div>
  );
}
