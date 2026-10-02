'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useApp } from './Providers';
import { SERVICE_IDS, SITE } from '@/lib/site';
import { PLANS } from '@/lib/pricing';

type Props = { source: 'contact' | 'popup'; compact?: boolean; onSuccess?: () => void };
type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', boolean>>;

export function LeadForm({ source, compact = false, onSuccess }: Props) {
  const { t, locale } = useApp();
  const c = t.contact;
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const uid = `${source}-`;
  const [service, setService] = useState('');
  const [planId, setPlanId] = useState('');

  // Links like /contact-us/?service=web&plan=web-starter preselect the service.
  useEffect(() => {
    if (source !== 'contact') return;
    const q = new URLSearchParams(window.location.search);
    const s = q.get('service');
    if (s && ([...SERVICE_IDS, 'other'] as string[]).includes(s)) setService(s);
    const p = q.get('plan');
    if (p && PLANS.some((x) => x.id === p)) setPlanId(p);
  }, [source]);
  const plan = PLANS.find((x) => x.id === planId);

  const budgets = c.budgetOptions.map((label, i) => ({ v: ['lt-5k', '5k-15k', '15k-50k', '50k+', 'unsure'][i], label }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) || '').trim();

    const next: Errors = {};
    if (get('name').length < 2) next.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) next.email = true;
    if (!compact && get('message').length < 10) next.message = true;
    if (!compact && !fd.get('consent')) next.consent = true;
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    try {
      const res = await fetch(`${SITE.apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: get('name'),
          email: get('email'),
          phone: get('phone'),
          company: get('company'),
          service: get('service'),
          plan: planId,
          budget: get('budget'),
          message: get('message'),
          website: get('website'), // honeypot: must stay empty
          source,
          locale,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('ok');
      form.reset();
      setService('');
      setPlanId('');
      onSuccess?.();
    } catch {
      setStatus('error');
    }
  }

  const field = (key: keyof Errors) => (errors[key] ? { 'aria-invalid': true, className: 'is-invalid' } : {});

  if (status === 'ok') {
    return <p className="form-status form-status-ok" role="status">{c.ok}</p>;
  }

  return (
    <form className={`lead-form${compact ? ' lead-form-compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor={`${uid}name`}>{c.name}</label>
        <input id={`${uid}name`} name="name" type="text" autoComplete="name" required {...field('name')} />
      </div>
      <div className="field">
        <label htmlFor={`${uid}email`}>{c.email}</label>
        <input id={`${uid}email`} name="email" type="email" autoComplete="email" required {...field('email')} />
      </div>
      <div className="field">
        <label htmlFor={`${uid}phone`}>{c.phone}</label>
        <input id={`${uid}phone`} name="phone" type="tel" autoComplete="tel" />
      </div>

      {!compact && (
        <div className="field">
          <label htmlFor={`${uid}company`}>{c.company}</label>
          <input id={`${uid}company`} name="company" type="text" autoComplete="organization" />
        </div>
      )}

      <div className="field">
        <label htmlFor={`${uid}service`}>{c.service}</label>
        <select id={`${uid}service`} name="service" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="" disabled>{c.select}</option>
          {SERVICE_IDS.map((id, i) => (
            <option key={id} value={id}>{t.services.items[i].n}</option>
          ))}
          <option value="other">{c.other}</option>
        </select>
        {plan && <p className="field-hint">{plan.t[locale][0]}</p>}
      </div>

      {!compact && (
        <>
          <div className="field">
            <label htmlFor={`${uid}budget`}>{c.budget}</label>
            <select id={`${uid}budget`} name="budget" defaultValue="">
              <option value="" disabled>{c.select}</option>
              {budgets.map((b) => <option key={b.v} value={b.v}>{b.label}</option>)}
            </select>
          </div>
          <div className="field field-wide">
            <label htmlFor={`${uid}message`}>{c.message}</label>
            <textarea id={`${uid}message`} name="message" rows={5} required {...field('message')} />
          </div>
          <div className="field field-wide field-check">
            <label>
              <input type="checkbox" name="consent" {...field('consent')} /> <span>{c.consent}</span>
            </label>
          </div>
        </>
      )}

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="field-wide">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? c.sending : compact ? t.popup.send : c.send}
        </button>
        {status === 'error' && <p className="form-status form-status-err" role="alert">{c.err}</p>}
      </div>
    </form>
  );
}
