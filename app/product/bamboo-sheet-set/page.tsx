import type { Metadata } from 'next';
import Image from 'next/image';
import { ProductConfigurator } from '@/components/ProductConfigurator';
import { careSteps, colours, type ColourOption } from '@/data/catalog';
import { Reveal } from '@/components/Reveal';
import { DropIcon, FeatherIcon, LeafIcon, WashIcon } from '@/components/Icons';

export const metadata: Metadata = { title: '300TC Bamboo Sheet Set' };

export default async function ProductPage({ searchParams }: { searchParams: Promise<{ colour?: string }> }) {
  const params = await searchParams;
  const requested = params.colour as ColourOption['slug'] | undefined;
  const initialColour = colours.some((c) => c.slug === requested) ? requested : 'cloud';
  return (
    <>
      <section className="product-page section-pad section-pad--top"><div className="container-wide"><ProductConfigurator initialColour={initialColour}/></div></section>
      <section className="product-detail-band section-dark">
        <div className="container benefit-row benefit-row--product">
          <div><LeafIcon/><strong>Naturally cooling</strong><span>A light, comfort-led sleep feel.</span></div>
          <div><DropIcon/><strong>Moisture wicking</strong><span>Freshness-focused everyday comfort.</span></div>
          <div><FeatherIcon/><strong>Silky soft</strong><span>Smooth texture with a refined drape.</span></div>
          <div><WashIcon/><strong>Easy care</strong><span>Follow the care guide below.</span></div>
        </div>
      </section>
      <section className="product-editorial section-pad">
        <div className="container product-editorial__grid">
          <Reveal className="product-editorial__copy"><span className="eyebrow">Inside the set</span><h2>Simple, complete,<br/>beautifully considered.</h2><p>Each sheet set contains one fitted sheet, one flat sheet and two pillowcases. The current collection is offered in Queen and King, across Cloud, Sandstone, Olive Grove and Merlot.</p><dl><div><dt>Material direction</dt><dd>100% Bamboo Fibre</dd></div><div><dt>Specification</dt><dd>300TC</dd></div><div><dt>Sizes</dt><dd>Queen · King</dd></div><div><dt>Colours</dt><dd>4 final shades</dd></div></dl></Reveal>
          <Reveal className="product-editorial__image" delay={100}><Image src="/images/packaging-lifestyle.webp" alt="Aura Living bamboo sheet set packaging with folded bedding" fill sizes="(max-width: 900px) 100vw, 48vw" /></Reveal>
        </div>
      </section>
      <section id="size-guide" className="care-mini section-sand section-pad"><div className="container care-mini__grid"><div><span className="eyebrow">Care, kept simple</span><h2>Look after the feel.</h2></div><ol>{careSteps.map((step,index)=><li key={step}><span>0{index+1}</span>{step}</li>)}</ol></div></section>
    </>
  );
}
