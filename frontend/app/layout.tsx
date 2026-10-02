import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { SiteSettingsProvider } from '@/components/SiteSettingsProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoPopup } from '@/components/PromoPopup';
import { Preloader } from '@/components/Preloader';
import { MobileBar } from '@/components/MobileBar';
import { SmoothScroll } from '@/components/SmoothScroll';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'bymsy | Technology and marketing consultancy in Calgary',
    template: '%s | bymsy',
  },
  description:
    'Web development, mobile apps, AI, blockchain, cloud, cybersecurity, design and digital marketing from a senior team in Calgary, Alberta.',
  openGraph: {
    type: 'website',
    siteName: 'bymsy',
    url: SITE.url,
    locale: 'en_CA',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08131f' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Skip the loader on repeat visits within a session, before first paint */}
        <script dangerouslySetInnerHTML={{ __html: "try{if(sessionStorage.getItem('bymsy.loaded')==='1')document.documentElement.setAttribute('data-seen','1')}catch(e){}" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=DM+Serif+Display&family=Instrument+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <SiteSettingsProvider>
        <Providers>
          <Preloader />
          <SmoothScroll />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <PromoPopup />
          <MobileBar />
        </Providers>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
