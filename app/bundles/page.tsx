import type { Metadata } from 'next';
import { BundlesExplorer } from '@/components/BundlesExplorer';

export const metadata: Metadata = { title: 'Bundles' };

export default function BundlesPage() {
  return (
    <>
      <section className="page-hero page-hero--sand"><div className="container page-hero__inner"><span className="eyebrow">Bundles</span><h1>Layer the comfort.<br/><em>Keep the look calm.</em></h1><p>Choose between two bundle configurations for every colour and size: the sheet set with two pillows, or with four pillows.</p></div></section>
      <section className="section-pad"><div className="container"><div className="section-heading section-heading--split"><div><span className="eyebrow">16 bundle combinations</span><h2>Choose what fits<br/>your room.</h2></div><p>Filter the bundle collection by colour, bed size and pillow count.</p></div><BundlesExplorer/></div></section>
    </>
  );
}
