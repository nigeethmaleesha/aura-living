'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from './Icons';
import { useCart } from './CartProvider';
import { SearchOverlay } from './SearchOverlay';

const nav = [
  { label: 'Shop', href: '/shop' },
  { label: 'Bundles', href: '/bundles' },
  { label: 'About', href: '/about' },
  { label: 'Care Guide', href: '/care-guide' },
  { label: 'Contact', href: '/contact' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [menuOpen]);

  return (
    <>
      <div className="announcement">Complimentary delivery across Sri Lanka on orders over LKR 25,000</div>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <button className="icon-button mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><MenuIcon/></button>
          <nav className="site-nav site-nav--left" aria-label="Primary navigation">
            {nav.slice(0, 3).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <Logo />
          <nav className="site-nav site-nav--right">
            {nav.slice(3).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <button className="icon-button" onClick={() => setSearchOpen(true)} aria-label="Search"><SearchIcon/></button>
            <button className="icon-button bag-button" onClick={() => setCartOpen(true)} aria-label={`Open bag with ${count} items`}><BagIcon/>{count > 0 && <span>{count}</span>}</button>
          </nav>
          <button className="icon-button mobile-only" onClick={() => setCartOpen(true)} aria-label={`Open bag with ${count} items`}><BagIcon/>{count > 0 && <span className="mobile-bag-count">{count}</span>}</button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__head"><Logo/><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><CloseIcon/></button></div>
        <nav>
          {nav.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}
        </nav>
        <button className="mobile-menu__search" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}><SearchIcon/> Search Aura Living</button>
        <p>The Art of Everyday Comfort.</p>
      </div>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
