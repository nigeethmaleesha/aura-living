import type { Metadata } from 'next';
import Image from 'next/image';
import { careSteps } from '@/data/catalog';
import { Reveal } from '@/components/Reveal';
import { BleachOffIcon, DryCleanOffIcon, DryLowIcon, IronIcon, WashIcon } from '@/components/Icons';

export const metadata: Metadata = { title: 'Care Guide' };

const careIcons = [WashIcon, BleachOffIcon, DryLowIcon, IronIcon, DryCleanOffIcon];

export default function CareGuidePage() {
  return (
    <>
      <section className="care-hero section-sand">
        <div className="container care-hero__grid">
          <div className="care-hero__copy">
            <span className="eyebrow">Care guide</span>
            <h1>Keep the softness.<br/><em>Keep it simple.</em></h1>
            <p>A simple routine for caring for your Aura Living bamboo sheets.</p>
          </div>
          <div className="care-hero__image">
            <Image src="/images/editorial-2-3.webp" alt="Aura Living bamboo sheet care guide" fill sizes="(max-width: 900px) 100vw, 48vw"/>
          </div>
        </div>
      </section>

      <section className="care-steps-section">
        <div className="container care-steps">
          <div className="care-steps__heading">
            <div>
              <span className="eyebrow">Five essentials</span>
              <h2>A gentler routine<br/>for everyday care.</h2>
            </div>
            <p>Follow the care label included with your product for the latest instructions.</p>
          </div>

          <div className="care-steps__grid">
            {careSteps.map((step, index) => {
              const Icon = careIcons[index];
              return (
                <Reveal key={step} delay={index * 60}>
                  <article>
                    <div className="care-step__top">
                      <Icon size={36} aria-hidden="true" />
                    </div>
                    <h3>{step}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="care-note section-dark">
        <div className="container-narrow centered-copy">
          <span className="eyebrow eyebrow--light">A final note</span>
          <h2>Care should protect the feel, not complicate your day.</h2>
          <p>Cold gentle washing, lower heat and avoiding harsh treatments keep the routine simple.</p>
        </div>
      </section>
    </>
  );
}
