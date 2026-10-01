'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from './CartProvider';
import { CloseIcon, MinusIcon, PlusIcon, ArrowRightIcon } from './Icons';

export function CartDrawer() {
  const { items, count, open, setOpen, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button aria-label="Close bag overlay" className={`drawer-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open} aria-label="Your bag">
        <div className="cart-drawer__head">
          <div><span className="eyebrow">Your bag</span><h3>{count ? `${count} item${count > 1 ? 's' : ''}` : 'Beautifully empty'}</h3></div>
          <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close bag"><CloseIcon /></button>
        </div>
        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="empty-state">
              <p>Build your set in a colour that feels like home.</p>
              <Link href="/product/bamboo-sheet-set" className="text-link" onClick={() => setOpen(false)}>Explore the sheet set <ArrowRightIcon size={17}/></Link>
            </div>
          ) : items.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item__image"><Image src={item.image} alt={`${item.colourLabel} bamboo sheet set`} fill sizes="110px" /></div>
              <div className="cart-item__info">
                <div><h4>{item.name}</h4><p>{item.colourLabel} · {item.size}</p><small>{item.bundleLabel}</small></div>
                <div className="cart-item__actions">
                  <div className="qty-control">
                    <button aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}><MinusIcon size={15}/></button>
                    <span>{item.quantity}</span>
                    <button aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}><PlusIcon size={15}/></button>
                  </div>
                  <button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <Link href="/checkout" className="button button--dark button--full" onClick={() => setOpen(false)}>Review selection <ArrowRightIcon size={18}/></Link>
          </div>
        )}
      </aside>
    </>
  );
}
