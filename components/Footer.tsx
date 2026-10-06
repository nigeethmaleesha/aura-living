import Image from 'next/image';
import Link from 'next/link';
import { InstagramIcon } from './Icons';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__newsletter container">
        <div>
          <span className="eyebrow">Stay in the loop</span>
          <h2>Comfort, considered.</h2>
        </div>
        <NewsletterForm />
      </div>
      <div className="footer__grid container">
        <div className="footer__brand">
          <Image src="/images/aura-mark.png" alt="" width={64} height={64} className="footer__mark" />
          <div className="footer-wordmark"><strong>AURA</strong><span>LIVING</span></div>
          <p>Premium bedding and homeware for calm, beautiful everyday living.</p>
          <a href="#" aria-label="Instagram"><InstagramIcon/></a>
        </div>
        <div><h3>Shop</h3><Link href="/shop">Sheet sets</Link><Link href="/bundles">Bundles</Link><Link href="/product/bamboo-sheet-set">Bamboo collection</Link></div>
        <div><h3>Discover</h3><Link href="/about">Our story</Link><Link href="/care-guide">Care guide</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Help</h3><Link href="/care-guide">Product care</Link><Link href="/contact">Delivery questions</Link></div>
      </div>
      <div className="footer__bottom container"><span>© 2026 Aura Living.</span><span>The Art of Everyday Comfort.</span></div>
    </footer>
  );
}
