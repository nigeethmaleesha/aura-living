'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, type ChangeEvent } from 'react';
import { colours, sizes, productList, type BedSize, type ColourOption, type BundleId } from '@/data/catalog';
import { ArrowRightIcon } from './Icons';

export function BundlesExplorer() {
  const [colour, setColour] = useState<ColourOption['slug'] | 'all'>('all');
  const [size, setSize] = useState<BedSize | 'all'>('all');
  const [bundle, setBundle] = useState<Exclude<BundleId,'sheet-set'> | 'all'>('all');
  const filtered = useMemo(() => productList.filter((item) => (colour==='all'||item.colour===colour)&&(size==='all'||item.size===size)&&(bundle==='all'||item.bundle===bundle)), [colour,size,bundle]);

  return (
    <>
      <div className="bundle-filters">
        <div><label>Colour</label><select value={colour} onChange={(e: ChangeEvent<HTMLSelectElement>)=>setColour(e.target.value as typeof colour)}><option value="all">All colours</option>{colours.map(c=><option key={c.slug} value={c.slug}>{c.name}</option>)}</select></div>
        <div><label>Size</label><select value={size} onChange={(e: ChangeEvent<HTMLSelectElement>)=>setSize(e.target.value as typeof size)}><option value="all">All sizes</option>{sizes.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
        <div><label>Bundle</label><select value={bundle} onChange={(e: ChangeEvent<HTMLSelectElement>)=>setBundle(e.target.value as typeof bundle)}><option value="all">All bundles</option><option value="plus-2">+ 2 Pillows</option><option value="plus-4">+ 4 Pillows</option></select></div>
      </div>
      <div className="bundle-grid">
        {filtered.map((item) => {
          const c = colours.find((entry)=>entry.slug===item.colour)!;
          return <article className="bundle-product" key={`${item.name}-${item.bundle}`}>
            <Link href={`/product/bamboo-sheet-set?colour=${c.slug}`} className="bundle-product__image"><Image src={c.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="bundle-product__chip">{item.bundle==='plus-2'?'+ 2 Pillows':'+ 4 Pillows'}</span></Link>
            <div className="bundle-product__meta"><span>{c.name} · {item.size}</span><h3>{item.name}</h3><p>{item.sheetProduct}</p><Link href={`/product/bamboo-sheet-set?colour=${c.slug}`} className="text-link">Configure set <ArrowRightIcon size={16}/></Link></div>
          </article>
        })}
      </div>
    </>
  );
}
