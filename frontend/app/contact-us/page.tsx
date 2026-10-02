import type { Metadata } from 'next';
import { ContactView } from '@/components/ContactView';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about your project. bymsy replies within one business day from Calgary, Alberta.',
  alternates: { canonical: '/contact-us/' },
};

export default function Page() {
  return <ContactView />;
}
