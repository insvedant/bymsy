import type { Metadata } from 'next';
import { AboutView } from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'About',
  description:
    'bymsy is a technology and marketing consultancy in Calgary, Alberta. A small senior team building web platforms, mobile apps, AI systems and growth programs.',
  alternates: { canonical: '/about-us/' },
};

export default function Page() {
  return <AboutView />;
}
