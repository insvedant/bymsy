'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { dict, Dict, Locale, LOCALES } from '@/lib/i18n';

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const AppContext = createContext<Ctx | null>(null);

const LOCALE_KEY = 'bymsy.locale';

export function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Restore the saved language, or pick one from the browser on the first visit.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
      if (saved && LOCALES.includes(saved)) {
        setLocaleState(saved);
      } else {
        const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
        if (nav === 'fr' || nav === 'es') setLocaleState(nav);
      }
    } catch {
      /* storage unavailable: keep defaults */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(LOCALE_KEY, l); } catch { /* ignore */ }
  }, []);

  const value = useMemo<Ctx>(() => ({ locale, setLocale, t: dict[locale] }), [locale, setLocale]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): Ctx {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <Providers>');
  return ctx;
}
