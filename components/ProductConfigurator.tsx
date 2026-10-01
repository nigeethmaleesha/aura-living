'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { colours, sizes, bundleOptions, type BedSize, type BundleId, type ColourOption } from '@/data/catalog';
import { useCart } from './CartProvider';
import { ColourSwatches } from './ColourSwatches';
import { ArrowRightIcon, MinusIcon, PlusIcon } from './Icons';

export function ProductConfigurator({ initialColour = 'cloud' }: { initialColour?: ColourOption['slug'] }) {
  const [colourSlug, setColourSlug] = useState<ColourOption['slug']>(initialColour);
  const [size, setSize] = useState<BedSize>('Queen');
  const [bundle, setBundle] = useState<BundleId>('sheet-set');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const colour = useMemo(() => colours.find((item) => item.slug === colourSlug) ?? colours[0], [colourSlug]);
  const bundleOption = bundleOptions.find((item) => item.id === bundle) ?? bundleOptions[0];

  const add = () => {
    addItem({
      name: '300TC Bamboo Sheet Set',
      colour: colour.slug,
      colourLabel: `${colour.name} / ${colour.colourName}`,
      size,
      bundle,
      bundleLabel: bundleOption.label,
      image: colour.image
    }, quantity);
  };

  return (
    <div className="product-configurator">
      <div className="product-gallery">
        <div className="product-gallery__main">
          {colours.map((item) => <Image key={item.slug} src={item.image} alt={`${item.name} ${item.colourName} Aura Living bamboo sheet set`} fill priority={item.slug === 'cloud'} sizes="(max-width: 900px) 100vw, 62vw" className={item.slug === colourSlug ? 'is-active' : ''} />)}
          <div className="product-gallery__index">{String(colours.findIndex((c) => c.slug === colourSlug) + 1).padStart(2,'0')} / 04</div>
        </div>
        <div className="product-gallery__thumbs">
          {colours.map((item) => (
            <button key={item.slug} className={item.slug === colourSlug ? 'is-active' : ''} onClick={() => setColourSlug(item.slug)} aria-label={`View ${item.name}`}>
              <Image src={item.image} alt="" fill sizes="120px" />
            </button>
          ))}
        </div>
      </div>

      <div className="product-config__panel">
        <span className="eyebrow">Aura Living · Bamboo</span>
        <h1>300TC Bamboo<br/>Sheet Set</h1>
        <p className="product-lede">Thoughtful comfort in a refined, tactile sheet set made for slow mornings and better-feeling bedrooms.</p>

        <div className="config-block">
          <div className="config-label"><span>Colour</span><strong>{colour.name} <small>{colour.colourName}</small></strong></div>
          <ColourSwatches value={colourSlug} onChange={setColourSlug} compact />
        </div>

        <div className="config-block">
          <div className="config-label"><span>Size</span><a href="#size-guide">Size guide</a></div>
          <div className="segmented">
            {sizes.map((item) => <button key={item} className={size === item ? 'is-active' : ''} onClick={() => setSize(item)}>{item}</button>)}
          </div>
        </div>

        <div className="config-block">
          <div className="config-label"><span>Build your set</span></div>
          <div className="bundle-selector">
            {bundleOptions.map((option) => (
              <button key={option.id} className={bundle === option.id ? 'is-active' : ''} onClick={() => setBundle(option.id)}>
                <span>{option.label}</span><small>{option.note}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="product-add-row">
          <div className="qty-control qty-control--large">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><MinusIcon/></button><span>{quantity}</span><button onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity"><PlusIcon/></button>
          </div>
          <button className="button button--dark button--grow" onClick={add}>Add to bag <ArrowRightIcon size={18}/></button>
        </div>
        <p className="config-note">Includes 1 fitted sheet, 1 flat sheet and 2 pillowcases. Bundle options add 2 or 4 pillows.</p>
      </div>
    </div>
  );
}
