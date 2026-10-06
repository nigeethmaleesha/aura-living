'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRightIcon } from './Icons';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="form-success"><span>Thank you.</span><h2>Your message is ready.</h2><p>The form interaction is complete in this frontend preview. No data is transmitted to a server.</p><button className="text-link" onClick={()=>setSent(false)}>Send another message <ArrowRightIcon size={16}/></button></div>;
  return (
    <form className="contact-form" onSubmit={(e: FormEvent<HTMLFormElement>)=>{e.preventDefault();setSent(true)}}>
      <div className="field-grid"><label><span>First name</span><input name="firstName" required /></label><label><span>Last name</span><input name="lastName" required /></label></div>
      <label><span>Email</span><input name="email" type="email" required /></label>
      <label><span>What can we help with?</span><select name="topic" defaultValue=""><option value="" disabled>Select an option</option><option>Product question</option><option>Delivery</option><option>Wholesale</option><option>Other</option></select></label>
      <label><span>Message</span><textarea name="message" rows={6} required /></label>
      <button className="button button--dark" type="submit">Send enquiry <ArrowRightIcon size={18}/></button>
    </form>
  );
}
