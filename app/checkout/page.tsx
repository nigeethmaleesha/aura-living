import type { Metadata } from 'next';
import { CheckoutClient } from '@/components/CheckoutClient';
export const metadata: Metadata = { title: 'Checkout Preview' };
export default function CheckoutPage(){return <section className="checkout-page section-pad section-pad--top"><CheckoutClient/></section>}
