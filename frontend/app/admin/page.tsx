'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { adminFetch, Lead } from '@/lib/admin';

function AdminOverview() {
  const [leads, setLeads] = useState<Lead[] | null>(null);

  useEffect(() => {
    adminFetch('/api/admin/leads?limit=200')
      .then((r) => r.json())
      .then((d) => setLeads(d.leads || []))
      .catch(() => setLeads([]));
  }, []);

  const total = leads?.length ?? null;
  const fromContact = leads?.filter((l) => l.source === 'contact').length ?? null;
  const fromPopup = leads?.filter((l) => l.source === 'popup').length ?? null;
  const last7 = leads?.filter((l) => Date.now() - new Date(l.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000).length ?? null;

  return (
    <>
      <h1>Overview</h1>
      <p className="admin-lede">A quick look at enquiries coming from the contact page and the popup form.</p>
      <div className="admin-stats">
        <div className="admin-stat"><strong>{total ?? '–'}</strong><span>Total enquiries</span></div>
        <div className="admin-stat"><strong>{last7 ?? '–'}</strong><span>In the last 7 days</span></div>
        <div className="admin-stat"><strong>{fromContact ?? '–'}</strong><span>From the contact page</span></div>
        <div className="admin-stat"><strong>{fromPopup ?? '–'}</strong><span>From the popup</span></div>
      </div>
      <div className="admin-cards">
        <Link href="/admin/leads/" className="admin-card">
          <h2>View all leads</h2>
          <p>Every message submitted through the contact form or the popup, newest first.</p>
        </Link>
        <Link href="/admin/settings/" className="admin-card">
          <h2>Edit site settings</h2>
          <p>Update the contact email, phone number and social media links shown on the site.</p>
        </Link>
      </div>
    </>
  );
}

export default function Page() {
  return <AdminShell><AdminOverview /></AdminShell>;
}
