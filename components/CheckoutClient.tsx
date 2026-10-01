'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { useCart } from './CartProvider';
import { ArrowRightIcon } from './Icons';

export function CheckoutClient() {
  const { items, clear } = useCart();
  const [complete, setComplete] = useState(false);
  if (complete) return <section className="checkout-success"><span className="eyebrow">Selection saved</span><h1>Thank you.</h1><p>Your selection has been completed in this frontend preview. No payment or order data is transmitted.</p><Link href="/" className="button button--dark">Back home <ArrowRightIcon size={18}/></Link></section>;
  if (!items.length) return <section className="checkout-empty"><span className="eyebrow">Your selection</span><h1>Nothing here yet.</h1><p>Choose a colour, size and set configuration first.</p><Link href="/product/bamboo-sheet-set" className="button button--dark">Build your set <ArrowRightIcon size={18}/></Link></section>;
  return (
    <div className="checkout-layout container">
      <form className="checkout-form" onSubmit={(e: FormEvent<HTMLFormElement>)=>{e.preventDefault();clear();setComplete(true)}}>
        <span className="eyebrow">Checkout preview</span><h1>Complete your details.</h1>
        <div className="field-grid"><label><span>First name</span><input required/></label><label><span>Last name</span><input required/></label></div>
        <label><span>Email</span><input type="email" required/></label>
        <label><span>Phone</span><input type="tel" required/></label>
        <label><span>Address</span><input required/></label>
        <div className="field-grid"><label><span>City</span><input required/></label><label><span>Postal code</span><input required/></label></div>
        <button className="button button--dark button--full">Complete preview <ArrowRightIcon size={18}/></button>
        <p className="microcopy">No payment is collected and no order is transmitted in this frontend preview.</p>
      </form>
      <aside className="checkout-summary"><span className="eyebrow">Your bag</span>{items.map(item=><div className="checkout-item" key={item.id}><div className="checkout-item__image"><Image src={item.image} alt="" fill sizes="80px"/></div><div><strong>{item.name}</strong><span>{item.colourLabel} · {item.size}</span><small>{item.bundleLabel} · Qty {item.quantity}</small></div></div>)}</aside>
    </div>
  );
}
