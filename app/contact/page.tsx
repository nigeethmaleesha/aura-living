import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="contact-page section-pad section-pad--top"><div className="container contact-page__grid"><div className="contact-page__intro"><span className="eyebrow">Contact</span><h1>Let’s make home<br/><em>feel better.</em></h1><p>Questions about the collection, delivery or wholesale? Send a note through the form.</p><div className="contact-facts"><span><small>Market</small>Sri Lanka</span><span><small>Brand</small>Aura Living</span><span><small>Focus</small>Premium bedding & homeware</span></div></div><ContactForm/></div></section>
  );
}
