import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/Icons';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <Image src="/images/sandstone-bed.webp" alt="Warm Sandstone Aura Living bedroom" fill priority sizes="100vw" />
        <div className="about-hero__overlay"/>
        <div className="container about-hero__content"><span className="eyebrow eyebrow--light">Our story</span><h1>Beautiful everyday living,<br/><em>without the noise.</em></h1></div>
      </section>
      <section className="about-intro section-pad"><div className="container-narrow"><Reveal><span className="eyebrow">Aura Living</span><p className="display-statement">A premium homeware brand built around comfort, calm, quality and understated elegance.</p></Reveal></div></section>
      <section className="about-values section-pad section-sand"><div className="container about-values__grid"><Reveal><span className="eyebrow">Our purpose</span><h2>Make home feel more considered.</h2><p>Aura Living exists to make everyday bedrooms and homes feel more comfortable and beautiful through premium products and thoughtful design.</p></Reveal><Reveal delay={100}><span className="eyebrow">Our point of view</span><h2>Premium, never distant.</h2><p>The brand is intentionally warm, tactile and aspirational — refined without feeling formal, loud or inaccessible.</p></Reveal><Reveal delay={180}><span className="eyebrow">What comes next</span><h2>Designed beyond bedding.</h2><p>Bedding is the starting point. The identity is built to grow into a broader homeware and lifestyle offering over time.</p></Reveal></div></section>
      <section className="about-visual section-pad"><div className="container about-visual__grid"><div className="about-visual__image"><Image src="/images/packaging-detail.webp" alt="Aura Living bamboo sheet set packaging" fill sizes="50vw"/></div><div><span className="eyebrow">Warm. Refined. Calm.</span><h2>The experience begins before the product is opened.</h2><p>From the wordmark and warm neutral palette to the reusable pouch and tactile photography, each touchpoint is designed to belong to the same quiet world.</p><Link href="/shop" className="text-link">Explore the collection <ArrowRightIcon size={17}/></Link></div></div></section>
    </>
  );
}
