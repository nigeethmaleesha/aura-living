'use client';

import { colours, type ColourOption } from '@/data/catalog';

export function ColourSwatches({ value, onChange, compact = false }: { value: ColourOption['slug']; onChange: (slug: ColourOption['slug']) => void; compact?: boolean }) {
  return (
    <div className={`swatches ${compact ? 'swatches--compact' : ''}`} role="radiogroup" aria-label="Choose colour">
      {colours.map((colour) => (
        <button
          key={colour.slug}
          type="button"
          role="radio"
          aria-checked={value === colour.slug}
          className={`swatch ${value === colour.slug ? 'is-active' : ''}`}
          onClick={() => onChange(colour.slug)}
          title={`${colour.name} — ${colour.colourName}`}
        >
          <span className="swatch__dot" style={{ background: colour.hex }} />
          {!compact && <span className="swatch__label"><strong>{colour.name}</strong><small>{colour.colourName}</small></span>}
        </button>
      ))}
    </div>
  );
}
