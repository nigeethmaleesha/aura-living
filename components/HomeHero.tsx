'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colours, type ColourOption } from '@/data/catalog';
import { ArrowRightIcon } from './Icons';

export function HomeHero() {
  const [colourSlug, setColourSlug] = useState<ColourOption['slug']>('cloud');
  const active = colours.find((item) => item.slug === colourSlug) ?? colours[0];
  return (
    <section className="home-hero">
      <div className="home-hero__visual">
        {colours.map((colour) => <Image key={colour.slug} src={colour.image} alt={`${colour.name} bamboo bedding`} fill priority={colour.slug === 'cloud'} sizes="100vw" className={colour.slug === colourSlug ? 'is-active' : ''} />)}
        <div className="home-hero__scrim" />
      </div>
      <div className="home-hero__content container">
        <div className="hero-copy">
          <span className="eyebrow eyebrow--light">Aura Living · 300TC Bamboo</span>
          <h1>The art of<br/><em>everyday comfort.</em></h1>
          <p>Warm, tactile bedding designed to make the bedroom feel beautifully considered.</p>
          <div className="hero-actions"><Link href="/product/bamboo-sheet-set" className="button button--ivory">Explore the sheet set <ArrowRightIcon size={18}/></Link><Link href="/about" className="text-link text-link--light">Our story <ArrowRightIcon size={17}/></Link></div>
        </div>
        <div className="hero-palette">
          <div className="hero-palette__head"><span>Explore the palette</span><strong>{active.name}</strong></div>
          <div className="hero-palette__swatches">
            {colours.map((colour) => <button key={colour.slug} className={colour.slug === colourSlug ? 'is-active' : ''} onClick={() => setColourSlug(colour.slug)} aria-label={`View ${colour.name}`}><span style={{ background: colour.hex }} /></button>)}
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll to settle in <span /></div>
    </section>
  );
}
