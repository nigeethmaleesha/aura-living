# Aura Living — Frontend Approval Build

A custom, responsive frontend for **Aura Living — The Art of Everyday Comfort**, designed from the client-supplied brand guidelines, product list, packaging imagery and visual references.

## Stack

- Next.js (App Router)
- React + TypeScript
- Native CSS design system and responsive layouts
- `next/image` for optimized local imagery
- CSS / IntersectionObserver motion (no animation library required)
- LocalStorage-powered bag/selection flow

## Included pages

- `/` — immersive homepage with live colour switching
- `/shop` — interactive colour collection
- `/product/bamboo-sheet-set` — product configurator with colour, Queen/King size, Sheet Set / +2 Pillows / +4 Pillows, quantity and bag interaction
- `/bundles` — all 16 client-defined bundle combinations with filters
- `/about` — brand story and positioning
- `/care-guide` — care instructions from the supplied concept
- `/contact` — validated frontend contact experience
- `/checkout` — frontend-only review/checkout preview

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production / Vercel

Push the folder to GitHub and import the repository into Vercel, or run:

```bash
npm run build
```

Vercel detects Next.js automatically; no special configuration is required.

## Important launch notes

1. **Final prices were not supplied in the product-list PDF.** The build intentionally does not invent pricing. Add approved prices once the client confirms them.
2. **No backend was requested.** Bag state is persisted locally in the browser. Contact, newsletter and checkout are polished frontend flows only and do not transmit data or collect payment.
3. **Product/performance/sustainability wording** came from client-supplied concepts. Verify final fibre, performance and environmental claims against supplier documentation before public launch, as required by the brand guidelines.
4. The client guidelines request use of the **final approved vector wordmark** in production. Only the supplied favicon/mark and image-based brand assets were provided here, so the header wordmark is a typographic prototype. Replace it with the approved SVG/logo asset when supplied.
5. The announcement-bar delivery wording is based on the client-provided storefront concept and should be reconfirmed before launch.

## Main design tokens

```css
--brown: #3B2A1F;
--gold: #C8A96B;
--beige: #DCCBB3;
--ivory: #F7F4EF;
```

Final sheet-set palette:

- Cloud — White (9)
- Sandstone — Beige (49)
- Olive Grove — Olive / Army Green (37)
- Merlot — Burgundy (99)
