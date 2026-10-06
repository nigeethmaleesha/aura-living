import Image from 'next/image';
import Link from 'next/link';
import { HomeHero } from '@/components/HomeHero';
import { InteractiveColourStory } from '@/components/InteractiveColourStory';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon, DropIcon, FeatherIcon, LeafIcon, ShieldIcon } from '@/components/Icons';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <InteractiveColourStory />

      <section className="bundle-teaser section-pad section-sand">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Bundle your comfort</span>
              <h2>
                Build the bed,<br />
                your way.
              </h2>
            </div>
            <p>Choose your colour and size, then keep it simple with the sheet set or add two or four pillows.</p>
          </div>

          <div className="bundle-teaser__cards">
            <Reveal>
              <Link href="/bundles" className="bundle-card">
                <Image src="/images/cloud-bed.webp" alt="Cloud white bamboo bedding" fill sizes="33vw" />
                <span>
                  <small>01</small>
                  <strong>Sheet Set</strong>
                  <em>1 fitted · 1 flat · 2 pillowcases</em>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <Link href="/bundles" className="bundle-card bundle-card--offset">
                <Image src="/images/sandstone-bed.webp" alt="Sandstone beige bamboo bedding" fill sizes="33vw" />
                <span>
                  <small>02</small>
                  <strong>+ 2 Pillows</strong>
                  <em>A fuller everyday setup</em>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={160}>
              <Link href="/bundles" className="bundle-card">
                <Image src="/images/olive-grove-bed.webp" alt="Olive Grove bamboo bedding" fill sizes="33vw" />
                <span>
                  <small>03</small>
                  <strong>+ 4 Pillows</strong>
                  <em>Layered comfort, complete</em>
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="centered-action">
            <Link href="/bundles" className="button button--outline">
              Explore all bundles <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="packaging-story section-pad">
        <div className="container packaging-story__grid">
          <Reveal className="packaging-story__image">
            <Image
              src="/images/packaging-detail.webp"
              alt="Aura Living bamboo sheet set in reusable drawstring pouch"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="image-caption">Reusable drawstring pouch · wraparound belly band</span>
          </Reveal>

          <Reveal className="packaging-story__copy" delay={120}>
            <span className="eyebrow">The details matter</span>
            <h2>Designed to feel special before you even make the bed.</h2>
            <p>
              The packaging direction keeps the experience tactile and restrained: a reusable fabric pouch, warm neutral tones and just enough product information to stay clear.
            </p>
            <div className="spec-list">
              <span>
                100% Bamboo Fibre <small>material direction</small>
              </span>
              <span>
                300TC <small>sheet-set specification</small>
              </span>
              <span>
                Queen &amp; King <small>available sizes</small>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="material-story section-pad section-dark">
        <div className="container material-story__grid">
          <Reveal className="material-story__copy">
            <span className="eyebrow eyebrow--light">Why bamboo</span>
            <h2>
              Comfort you can<br />
              <em>feel.</em>
            </h2>
            <p>
              Aura Living’s 300TC bamboo sheet set is presented through softness, breathability and texture rather than technical overload.
            </p>
            <Link href="/product/bamboo-sheet-set" className="text-link text-link--light">
              Discover the sheet set <ArrowRightIcon size={17} />
            </Link>
          </Reveal>

          <Reveal className="material-story__visual" delay={100}>
            <Image
              src="/images/editorial-1-2.webp"
              alt="Close-up of Aura Living bamboo fabric"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </Reveal>
        </div>

        <div className="container benefit-row">
          <div>
            <LeafIcon />
            <strong>Naturally cooling</strong>
            <span>Made for a calmer sleep feel.</span>
          </div>
          <div>
            <DropIcon />
            <strong>Moisture wicking</strong>
            <span>Fresh, comfortable everyday use.</span>
          </div>
          <div>
            <FeatherIcon />
            <strong>Silky soft</strong>
            <span>Smooth, tactile and refined.</span>
          </div>
          <div>
            <ShieldIcon />
            <strong>300TC bamboo</strong>
            <span>The Aura Living sheet-set specification.</span>
          </div>
        </div>
      </section>

      <section className="closing-story">
        <Image src="/images/merlot-bed.webp" alt="Merlot burgundy Aura Living bedroom scene" fill sizes="100vw" />
        <div className="closing-story__overlay" />
        <div className="closing-story__content">
          <span className="eyebrow eyebrow--light">Slow mornings. Softer nights.</span>
          <h2>
            The feeling you’ll<br />
            look forward to.
          </h2>
          <Link href="/shop" className="button button--ivory">
            Shop the collection <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
