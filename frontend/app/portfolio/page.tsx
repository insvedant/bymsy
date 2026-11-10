import type { Metadata } from 'next';
import { PortfolioIndexView } from '@/components/PortfolioIndexView';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Concept projects from bymsy showing our approach, design and stack across web, mobile, AI, blockchain and marketing.',
  alternates: { canonical: '/portfolio/' },
};

export default function Page() {
  return <PortfolioIndexView />;
}
