import type { Metadata } from 'next';
import Image from 'next/image';
import { careSteps } from '@/data/catalog';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = { title: 'Care Guide' };

export default function CareGuidePage() {
  return (
    <>
      <section className="care-hero section-sand"><div className="container care-hero__grid"><div><span className="eyebrow">Care guide</span><h1>Keep the softness.<br/><em>Keep it simple.</em></h1><p>The care instructions shown in the client’s current bamboo concept are intentionally straightforward.</p></div><div className="care-hero__image"><Image src="/images/editorial-2-3.webp" alt="Aura Living bamboo sheet care guide" fill sizes="(max-width: 900px) 100vw, 46vw"/></div></div></section>
      <section className="section-pad"><div className="container care-steps"><div className="section-heading section-heading--split"><div><span className="eyebrow">Five essentials</span><h2>A gentler routine<br/>for everyday care.</h2></div><p>Use the instructions provided with the final product as the authority if supplier guidance changes before launch.</p></div><div className="care-steps__grid">{careSteps.map((step,index)=><Reveal key={step} delay={index*60}><article><span>0{index+1}</span><h3>{step}</h3></article></Reveal>)}</div></div></section>
      <section className="care-note section-dark section-pad"><div className="container-narrow centered-copy"><span className="eyebrow eyebrow--light">A final note</span><h2>Care should protect the feel, not complicate your day.</h2><p>Cold gentle washing, lower heat and avoiding harsh treatments are the current Aura care direction.</p></div></section>
    </>
  );
}
