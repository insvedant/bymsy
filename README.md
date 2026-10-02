# bymsy.com: Phase 1

Next.js 14 (frontend) + Node/Express (API). Node 18.18+ required.

## Run locally
```bash
# API (terminal 1)
cd backend && cp .env.example .env && npm install && npm run dev      # http://localhost:4000

# Website (terminal 2)
cd frontend && cp .env.example .env.local && npm install && npm run dev  # http://localhost:3000
```
Without `MONGODB_URI`, leads are logged to the API console instead of saved.

## Edit these first
| What | Where |
|---|---|
| Phone, email, social links, office | `frontend/lib/site.ts` |
| Prices (CAD base) and package text (EN/FR/ES) | `frontend/lib/pricing.ts` |
| Currency rates (USD, EUR, AED) | `frontend/lib/currency.ts` |
| All site copy in EN/FR/ES | `frontend/lib/i18n.ts` |
| Colours and fonts | top of `frontend/app/globals.css` |

## Built so far
Home (with selected work), Work / portfolio (6 projects + a page each), Services index, 9 service pages (`/services/<slug>/`) each with one-time and monthly plans,
About, Pricing (currency toggle), Contact (form, prefilled from plan buttons), 5-second popup form,
EN/FR/ES switch, desktop mega menu + mobile drawer, page loader with % counter, two-line footer
wordmark, footer clocks (Calgary + visitor via `/api/geo`), mobile call/quote bar, sitemap + robots,
leads API.

## Not built yet
Admin panel with login, blog CRUD + public blog, legal pages (privacy, terms, cookies),
locale URLs (/fr, /es) for SEO, email notifications, live currency rates.

## Brand (logo: serif seal, capitals)
Files in `brand/`: horizontal lockup (navy and white), seal (navy and white), app icon, each as SVG
with PNG exports of the navy lockup, seal and icon. All lettering is outlined, so no font is needed.
Colours: Prairie Navy `#0B2540`, Chinook Teal `#0E7C7B`, Signal Gold `#E3A72F`.
Lettering is DM Serif Display (SIL Open Font License). The site favicon is `frontend/app/icon.svg`.
Regenerate paths by editing `brand/` sources, or ask for changes and re-export.

## Portfolio
Projects live in `frontend/lib/portfolio.ts`. The six shipped projects are marked `kind: 'concept'`, which
shows a "Concept project" badge. For real delivered work set `kind: 'client'`, replace the copy with the real
story, and add real results only if you can back them up. The preview images are drawn in
`frontend/components/ProjectVisual.tsx`; swap in real screenshots when you have them.

## Motion (this update)
- Smooth scroll (Lenis) site-wide, skipped automatically under reduced-motion. `frontend/components/SmoothScroll.tsx`.
- Scroll-reveal on cards, steps, FAQ, industries, etc. `frontend/components/Reveal.tsx` (`<Reveal>` wrapper, `revealDelay()` for stagger).
- New animated hero visual (workflow graph, gear, floating panels), replacing the static Chinook arch. `frontend/components/BuildScene.tsx`.
- FAQ is now an animated accordion (`frontend/components/FaqAccordion.tsx`) instead of native `<details>`.
- Pricing page's sticky category scroller is now a scroll-spy with a sliding pill (`frontend/components/PricingChipNav.tsx`) that tracks which service section is in view.
- Portfolio project pages reveal their sections and feature list as you scroll.

## Motion (this update)
- Hero heading/subtext/buttons stagger in on load (`.hero-in`, `HomeView.tsx`).
- New hero visual, tools marquee now shows a stylised lettermark badge per tool (`ToolBadge.tsx`) — not a reproduction of each brand's real logo — plus a larger title.
- Stats under the marquee count up from 0 when scrolled into view (`CountUp.tsx`).
- "How we work" is a dedicated animated component (`ProcessSteps.tsx`): each step's line, number and hand-drawn icon animate in as you scroll, one step at a time. Used on the home page and every service page.
- Service cards get a richer hover: corner glow, lift, shadow, sliding arrow.
- Pricing page's category scroller lost its visible scrollbar and gained left/right arrow buttons (`PricingChipNav.tsx`), alongside the existing scroll-spy pill.
- All of the above respects prefers-reduced-motion: animations are skipped and content shows at once.

## This update: pinned process tabs + futuristic services section
- "How the work actually moves" (home page) is now a framer-motion, scroll-pinned tab
  experience on desktop: the tab strip + panel pin in place while you scroll, and the
  active step advances with scroll position (click a tab to jump straight there too).
  `WorkProcess.tsx` (pinned version) falls back to the plain stacked `ProcessSteps.tsx`
  on narrow screens and under reduced-motion, where pinning would only add friction.
  Added `framer-motion` as a dependency for this.
- Home page's Services section is redesigned: a dark section with a grid backdrop and
  soft glow, glass cards with a cursor-tracked spotlight and a rotating gradient border
  on hover, a custom line icon per service, and a numbered index. `ServicesShowcase.tsx`
  + `ServiceIcon.tsx`. The Services *index page* (`/services/`) still uses the original
  light card design — say the word if you want that switched too.

## On matching zanservices.com exactly
I can read their page's text and structure, not their compiled CSS or JS, so I can't
extract their literal animation code or exact font names from a fetch. What's here is my
own build of a comparable pinned-scroll effect (also using framer-motion) inferred from
their markup pattern (numbered tabs + a single content panel). Fonts are unchanged
(Bricolage Grotesque / Instrument Sans) — tell me the font name if you have it (e.g. from
inspecting their page) and I'll swap it in.

## This update: pricing removed, Salesforce practice added
- **Pricing removed everywhere**: no `/pricing/` page, no "Pricing" in the header, mobile
  drawer or footer, no dollar figures on any service page, the homepage hero, or the
  About page. Packages (tiers) still exist per service — shown as a name plus feature
  bullets and a "Get a quote" button, just with no price attached. Removed
  `lib/currency.ts`, `CurrencyToggle.tsx` and `PricingChipNav.tsx` entirely, and stripped
  `base`/`monthly` fields from the `Plan` type in `lib/pricing.ts`. The contact form's
  budget dropdown now uses plain static labels instead of live currency conversion.
- **Salesforce practice added**: 6 new services (Implementation, Customization,
  Integration, Data Migration, Admin & Support, Consulting), each with its own page,
  packages and 3 FAQs, in all three languages. They appear:
  - as a third tab ("Salesforce") in the desktop mega menu and the mobile drawer,
  - in a distinct, separately-styled homepage section (`SalesforceSection.tsx`, light-blue
    accent) below the main services grid, and
  - as a third group on the `/services/` index page.
  Icons are original line-art (`ServiceIcon.tsx`), not Salesforce's trademarked cloud
  logo. Content makes no claim to being a certified Salesforce partner — add that only if
  true.

## This update: per-service process content, email, and bigger stats
- Each of the 15 service pages now has its own "how it goes" steps (title, description,
  duration, outcome, 4 bullets each) tailored to that service, instead of every page
  reusing the same generic 4 steps. New file: `frontend/lib/processes.ts`. The homepage's
  own "How the work actually moves" section still uses the general 4-step version, since
  it isn't about one specific service.
- Contact email changed to **bymsyconsulting@gmail.com** everywhere on the frontend
  (footer, About, Contact page) and in every `mailto:` link — all driven from one place,
  `frontend/lib/site.ts`. The backend already defaulted to this address.
- Fixed a CSS bug where the big stat numbers under "The tools behind every project"
  (10 / 1 day / 3 / 6) were rendering far smaller than intended — a `.stat span` selector
  was unintentionally also matching the count-up number's inner span, not just its label.
  Numbers are now genuinely large (`clamp(3.2rem, 5vw, 4.2rem)`), and the tools-strip title
  and logos above it were also enlarged.

## This update: SAP, Microsoft 365, Bitrix24 practices + hero polish
- Added Azure, Power BI and Tableau to the tools marquee (lettermark tiles — Simple
  Icons doesn't carry marks for these either, same reasoning as OpenAI/AWS earlier).
  `frontend/components/ToolBadge.tsx` now also has a `CUSTOM_LOGOS` map — drop a real
  logo file in `frontend/public/tools/` and list it there if you'd rather use the real
  mark for any of these.
- Added a glowing "Free consultation & audit" pill under the hero CTAs, linking to
  `/contact-us/` (`.hero-glow` in `globals.css`, pure CSS pulse animation).
- Three new service practices, matching the Salesforce pattern — SAP (Implementation,
  Migration & Upgrade, Integration, Support & Managed Services), Microsoft 365
  (Migration, SharePoint & Intranet, Power Platform Automation, Security & Support),
  and Bitrix24 (Implementation, Customization & Automation, Integration, Training &
  Support). Each has its own page, 2 packages, 4-step process and 3 FAQs, in EN/FR/ES.
- Each practice gets its own homepage section, visually distinct by colour (Salesforce
  blue, SAP navy-blue, Microsoft 365 purple, Bitrix24 teal) — built from one shared,
  reusable `PracticeSection.tsx` component instead of four near-duplicate files.
- The mega menu and `/services/` index now loop over all 6 groups automatically via
  `GROUP_ORDER` in `lib/site.ts` — adding a 7th practice later means updating that list
  and the data files, not the menu or index page code.
