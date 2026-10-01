'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRightIcon } from './Icons';

export function NewsletterForm() {
  const [joined, setJoined] = useState(false);
  if (joined) return <div className="newsletter-success">You’re on the list. <button type="button" onClick={() => setJoined(false)}>Use another email</button></div>;
  return (
    <form className="newsletter-form" onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setJoined(true); }}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" placeholder="Your email address" required />
      <button type="submit" aria-label="Join newsletter"><ArrowRightIcon/></button>
    </form>
  );
}
