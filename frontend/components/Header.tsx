'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties, FocusEvent, useEffect, useRef, useState } from 'react';
import { useApp } from './Providers';
import { Logo } from './Logo';
import { Flag } from './Flag';
import { ServiceIcon } from './ServiceIcon';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n';
import { SERVICE_GROUPS, GROUP_ORDER, GroupId, ServiceId } from '@/lib/site';
import { groupLabel } from '@/lib/services';
import { serviceHref, serviceIndex } from '@/lib/services';
import { useSiteSettings } from './SiteSettingsProvider';


const OPEN_DELAY = 90;   // hover intent: ignore a pointer that is only passing over "Services"
const CLOSE_DELAY = 220; // forgive small slips while moving into the panel
const TAB_DELAY = 110;   // stops the tab flipping when the pointer travels diagonally

function Chevron() {
  return (
    <svg className="chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 4.25l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const { t, locale, setLocale } = useApp();
  const settings = useSiteSettings();
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [drawerServices, setDrawerServices] = useState(false);
  const [mega, setMega] = useState(false);
  const [tab, setTab] = useState<GroupId>('engineering');
  const [active, setActive] = useState<ServiceId>('web');
  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const tabTimer = useRef<ReturnType<typeof setTimeout>>();
  const openedAtScroll = useRef(0);

  const clearAll = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(tabTimer.current);
  };
  useEffect(() => clearAll, []);

  // Close everything on navigation.
  useEffect(() => {
    clearAll();
    setMega(false);
    setDrawer(false);
  }, [pathname]);

  // Lock page scroll behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  // Escape closes; scrolling away from where it opened closes too.
  useEffect(() => {
    if (!mega && !drawer) return;
    openedAtScroll.current = window.scrollY;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMega(false); setDrawer(false); }
    };
    const onScroll = () => {
      if (mega && Math.abs(window.scrollY - openedAtScroll.current) > 60) setMega(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mega, drawer]);

  const hoverOpen = () => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    if (!mega) openTimer.current = setTimeout(() => setMega(true), OPEN_DELAY);
  };
  const cancelOpen = () => clearTimeout(openTimer.current);
  const keepOpen = () => { clearTimeout(closeTimer.current); clearTimeout(openTimer.current); };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), CLOSE_DELAY);
  };
  const closeNow = () => { clearAll(); setMega(false); };

  const chooseTab = (g: GroupId) => {
    clearTimeout(tabTimer.current);
    setTab(g);
    setActive((cur) => (SERVICE_GROUPS[g].includes(cur) ? cur : SERVICE_GROUPS[g][0]));
  };
  const hoverTab = (g: GroupId) => {
    clearTimeout(tabTimer.current);
    if (g !== tab) tabTimer.current = setTimeout(() => chooseTab(g), TAB_DELAY);
  };

  // Keyboard users: close when focus leaves the header.
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (mega && !e.currentTarget.contains(e.relatedTarget as Node | null)) setMega(false);
  };

  const item = (id: ServiceId) => t.services.items[serviceIndex(id)];
  const groupName = (g: GroupId) => groupLabel(t.menu, g);
  const preview = item(active);
  const cur = (path: string) => (pathname?.startsWith(path) ? 'page' : undefined);
  if (pathname?.startsWith('/admin')) return null;

  return (
    <>
      <a className="skip" href="#main">{t.common.skip}</a>
      <header className="site-header" onMouseLeave={scheduleClose} onBlur={onBlur}>
        <div className="container header-row">
          <Link href="/" className="brand" aria-label="bymsy" onMouseEnter={closeNow}><Logo /></Link>

          <nav className="nav nav-desktop" aria-label="Main">
            <span className="nav-services" onMouseEnter={hoverOpen} onMouseLeave={cancelOpen}>
              <Link href="/services/" aria-current={cur('/services')}>{t.nav.services}</Link>
              <button type="button" className="chev-btn" aria-expanded={mega} aria-controls="mega" aria-label={t.nav.services}
                onClick={() => { clearAll(); setMega((v) => !v); }}>
                <Chevron />
              </button>
            </span>
            <Link href="/portfolio/" aria-current={cur('/portfolio')} onMouseEnter={closeNow}>{t.nav.work}</Link>
            <Link href="/#process" onMouseEnter={closeNow}>{t.nav.process}</Link>
            <Link href="/about-us/" aria-current={cur('/about-us')} onMouseEnter={closeNow}>{t.nav.about}</Link>
            <Link href="/contact-us/" aria-current={cur('/contact-us')} onMouseEnter={closeNow}>{t.nav.contact}</Link>
          </nav>

          <div className="header-tools" onMouseEnter={closeNow}>
            <a className="header-phone" href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{settings.phone}</a>
            <div className="lang" role="group" aria-label={t.common.lang}>
              {LOCALES.map((l) => (
                <button key={l} type="button" className="lang-btn" aria-pressed={locale === l}
                  aria-label={LOCALE_NAMES[l]} title={LOCALE_NAMES[l]} onClick={() => setLocale(l)}>
                  <Flag code={l} /><span>{l.toUpperCase()}</span>
                </button>
              ))}
            </div>
            <Link href="/contact-us/" className="btn btn-primary btn-sm header-cta">{t.nav.start}</Link>
            <button type="button" className="menu-btn" aria-expanded={drawer} aria-controls="drawer"
              aria-label={t.common.menu} onClick={() => setDrawer((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <div id="mega" className={`mega${mega ? ' is-open' : ''}`} onMouseEnter={keepOpen}>
          <div className="container mega-grid">
            <div className="mega-tabs" role="tablist">
              {GROUP_ORDER.map((g) => (
                <button key={g} type="button" role="tab" aria-selected={tab === g} className="mega-tab"
                  onMouseEnter={() => hoverTab(g)} onMouseLeave={() => clearTimeout(tabTimer.current)} onClick={() => chooseTab(g)}>
                  {groupName(g)}
                </button>
              ))}
              <Link href="/services/" className="mega-all">{t.menu.all}</Link>
            </div>

            <ul className="mega-list" key={tab}>
              {SERVICE_GROUPS[tab].map((id, i) => (
                <li key={id} style={{ '--i': i } as CSSProperties}>
                  <Link href={serviceHref(id)} className={active === id ? 'is-active' : ''}
                    onMouseEnter={() => setActive(id)} onFocus={() => setActive(id)}>
                    <span className="mega-name">{item(id).n}</span>
                    <small>{item(id).tag}</small>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mega-preview">
              <div className="mega-preview-inner" key={active}>
                <span className="mega-preview-icon"><ServiceIcon id={active} /></span>
                <h3>{preview.n}</h3>
                <p>{preview.d}</p>
              </div>
              <Link href={serviceHref(active)} className="btn btn-primary btn-sm">{t.menu.explore}</Link>
            </div>
          </div>
        </div>
      </header>

      <div className={`mega-scrim${mega ? ' is-on' : ''}`} onClick={closeNow} aria-hidden="true" />

      {/* Mobile drawer (outside the header so the header's blur does not trap it) */}
      <div id="drawer" className={`drawer${drawer ? ' is-open' : ''}`} aria-hidden={!drawer}>
        <button type="button" className="drawer-row" aria-expanded={drawerServices} onClick={() => setDrawerServices((v) => !v)}>
          {t.nav.services}<Chevron />
        </button>
        <div className={`drawer-sub${drawerServices ? ' is-open' : ''}`}>
          <div>
            {GROUP_ORDER.map((g) => (
              <div key={g}>
                <p className="drawer-group">{groupName(g)}</p>
                {SERVICE_GROUPS[g].map((id) => (
                  <Link key={id} href={serviceHref(id)} className="drawer-link">{item(id).n}</Link>
                ))}
              </div>
            ))}
            <Link href="/services/" className="drawer-link drawer-all">{t.menu.all}</Link>
          </div>
        </div>
        <Link href="/portfolio/" className="drawer-row">{t.nav.work}</Link>
        <Link href="/#process" className="drawer-row" onClick={() => setDrawer(false)}>{t.nav.process}</Link>
        <Link href="/about-us/" className="drawer-row">{t.nav.about}</Link>
        <Link href="/contact-us/" className="drawer-row">{t.nav.contact}</Link>
        <div className="drawer-foot">
          <Link href="/contact-us/" className="btn btn-primary">{t.nav.start}</Link>
          <a className="drawer-phone" href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}>{settings.phone}</a>
        </div>
      </div>
    </>
  );
}
