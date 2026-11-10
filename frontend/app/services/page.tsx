import type { Metadata } from 'next';
import { ServicesIndexView } from '@/components/ServicesIndexView';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, mobile apps, AI, blockchain, cloud, cybersecurity, product design, digital marketing and branding from one senior team in Calgary.',
  alternates: { canonical: '/services/' },
};

export default function Page() {
  return <ServicesIndexView />;
}
