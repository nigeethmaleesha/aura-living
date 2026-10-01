'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colours, type ColourOption } from '@/data/catalog';
import { ArrowUpRightIcon } from './Icons';

export function InteractiveColourStory() {
  const [activeSlug, setActiveSlug] = useState<ColourOption['slug']>('sandstone');
  const active = colours.find((colour) => colour.slug === activeSlug) ?? colours[1];
  return (
    <section className="colour-story section-pad">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">The final four</span><h2>A room can change<br/>with a single colour.</h2></div>
          <p>Four grounded shades, each designed to create a different mood while staying unmistakably Aura.</p>
        </div>
        <div className="colour-story__stage">
          <div className="colour-story__image">
            {colours.map((colour) => <Image key={colour.slug} src={colour.image} alt={`${colour.name} ${colour.colourName} sheet set`} fill sizes="(max-width: 900px) 100vw, 68vw" className={colour.slug === activeSlug ? 'is-active' : ''} />)}
            <div className="colour-story__badge"><span>0{colours.findIndex((c) => c.slug === activeSlug)+1}</span><strong>{active.name}</strong><small>{active.colourName}</small></div>
          </div>
          <div className="colour-story__rail">
            {colours.map((colour, index) => (
              <button key={colour.slug} onMouseEnter={() => setActiveSlug(colour.slug)} onFocus={() => setActiveSlug(colour.slug)} onClick={() => setActiveSlug(colour.slug)} className={activeSlug === colour.slug ? 'is-active' : ''}>
                <span className="colour-story__number">0{index + 1}</span><span className="colour-story__dot" style={{ background: colour.hex }}/><span><strong>{colour.name}</strong><small>{colour.colourName}</small></span>
              </button>
            ))}
            <Link href={`/product/bamboo-sheet-set?colour=${active.slug}`} className="colour-story__cta">Shop {active.name} <ArrowUpRightIcon/></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
