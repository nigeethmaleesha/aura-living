import type { Metadata } from 'next';
import Link from 'next/link';
import { ShopCollection } from '@/components/ShopCollection';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/Icons';

export const metadata: Metadata = { title: 'Shop' };

export default function ShopPage() {
  return (
    <>
      <section className="page-hero page-hero--light">
        <div className="container page-hero__inner">
          <span className="eyebrow">The collection</span>
          <h1>Four shades.<br/><em>One calm point of view.</em></h1>
          <p>Explore Aura Living’s current 300TC bamboo sheet-set palette, then configure the size and bundle that suits your room.</p>
        </div>
      </section>
      <section className="section-pad shop-section">
        <div className="container"><ShopCollection /></div>
      </section>
      <section className="shop-cta section-dark section-pad">
        <div className="container-narrow centered-copy">
          <Reveal><span className="eyebrow eyebrow--light">Build your set</span><h2>Start with the colour.<br/>Make it yours from there.</h2><p>Queen or King. Sheet set only, or bundled with two or four pillows.</p><Link href="/product/bamboo-sheet-set" className="button button--ivory">Configure your set <ArrowRightIcon size={18}/></Link></Reveal>
        </div>
      </section>
    </>
  );
}
