'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { SITE } from '@/lib/site';

type Social = { linkedin: string; instagram: string; x: string };
type Settings = { email: string; phone: string; social: Social };

const DEFAULTS: Settings = { email: SITE.email, phone: SITE.phone, social: SITE.social };

const SettingsContext = createContext<Settings>(DEFAULTS);

/**
 * Fetches the editable contact details (email, phone, social links) set from
 * the admin panel. Starts from the static defaults in lib/site.ts and swaps
 * in live values once they load, so nothing is ever blank while waiting.
 */
export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    fetch(`${SITE.apiUrl}/api/settings`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && d.email && d.phone && d.social) setSettings(d);
      })
      .catch(() => { /* keep defaults */ })
      .finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, []);

  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

export function useSiteSettings(): Settings {
  return useContext(SettingsContext);
}
