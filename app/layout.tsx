import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/components/CartProvider';
import { CartDrawer } from '@/components/CartDrawer';

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans = Montserrat({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Aura Living — The Art of Everyday Comfort', template: '%s | Aura Living' },
  description: 'Premium bamboo bedding and homeware by Aura Living.',
  icons: { icon: '/images/app-icon.png', apple: '/images/app-icon.png' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
