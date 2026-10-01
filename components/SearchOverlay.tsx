'use client';

import Link from 'next/link';
import { useMemo, useState, type ChangeEvent } from 'react';
import { CloseIcon, SearchIcon, ArrowUpRightIcon } from './Icons';

const searchItems = [
  { title: '300TC Bamboo Sheet Set', detail: 'Cloud · Sandstone · Olive Grove · Merlot', href: '/product/bamboo-sheet-set' },
  { title: 'Bundles', detail: 'Sheet sets with 2 or 4 pillows', href: '/bundles' },
  { title: 'Shop by colour', detail: 'Explore all four final shades', href: '/shop' },
  { title: 'Care guide', detail: 'Simple care for your bamboo sheets', href: '/care-guide' },
  { title: 'Our story', detail: 'The thinking behind Aura Living', href: '/about' },
  { title: 'Contact', detail: 'Questions, wholesale or collaborations', href: '/contact' }
];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchItems;
    return searchItems.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className={`search-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="search-overlay__top">
        <div className="search-field"><SearchIcon/><input autoFocus={open} value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} placeholder="Search Aura Living" aria-label="Search Aura Living" /></div>
        <button className="icon-button" onClick={onClose} aria-label="Close search"><CloseIcon/></button>
      </div>
      <div className="search-results container-narrow">
        <span className="eyebrow">{query ? 'Results' : 'Explore'}</span>
        {results.length ? results.map((item) => (
          <Link href={item.href} key={item.href} className="search-result" onClick={onClose}>
            <span><strong>{item.title}</strong><small>{item.detail}</small></span><ArrowUpRightIcon/>
          </Link>
        )) : <p className="search-empty">No matches yet. Try “bamboo”, “care” or a colour name.</p>}
      </div>
    </div>
  );
}
