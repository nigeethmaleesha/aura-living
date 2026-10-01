'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colours, type ColourOption } from '@/data/catalog';
import { ArrowUpRightIcon } from './Icons';

export function ShopCollection() {
  const [active, setActive] = useState<ColourOption['slug']>('cloud');
  return (
    <div className="shop-collection">
      <div className="shop-collection__feature">
        {colours.map((colour) => <Image key={colour.slug} src={colour.image} alt={`${colour.name} ${colour.colourName} bamboo sheet set`} fill sizes="(max-width: 900px) 100vw, 65vw" className={active === colour.slug ? 'is-active' : ''}/>)}
        <div className="shop-collection__feature-copy">
          <span>300TC Bamboo</span><strong>{colours.find((c)=>c.slug===active)?.name}</strong>
        </div>
      </div>
      <div className="shop-collection__list">
        {colours.map((colour, index) => (
          <button key={colour.slug} onMouseEnter={() => setActive(colour.slug)} onFocus={() => setActive(colour.slug)} onClick={() => setActive(colour.slug)} className={active===colour.slug?'is-active':''}>
            <span className="shop-collection__index">0{index+1}</span>
            <span className="shop-collection__swatch" style={{background:colour.hex}}/>
            <span><strong>{colour.name}</strong><small>{colour.colourName}</small></span>
          </button>
        ))}
        <Link href={`/product/bamboo-sheet-set?colour=${active}`} className="shop-collection__link">Configure this colour <ArrowUpRightIcon/></Link>
      </div>
    </div>
  );
}
