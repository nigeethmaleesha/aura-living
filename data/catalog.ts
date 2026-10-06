export type ColourOption = {
  slug: 'cloud' | 'sandstone' | 'olive-grove' | 'merlot';
  name: string;
  colourName: string;
  code: string;
  hex: string;
  image: string;
};

export const colours: ColourOption[] = [
  {
    slug: 'cloud',
    name: 'Cloud',
    colourName: 'White',
    code: '9',
    hex: '#F3F1EC',
    image: '/images/cloud-bed.webp'
  },
  {
    slug: 'sandstone',
    name: 'Sandstone',
    colourName: 'Beige',
    code: '49',
    hex: '#D6C2A8',
    image: '/images/sandstone-bed.webp'
  },
  {
    slug: 'olive-grove',
    name: 'Olive Grove',
    colourName: 'Olive / Army Green',
    code: '37',
    hex: '#4B4B3D',
    image: '/images/olive-grove-bed.webp'
  },
  {
    slug: 'merlot',
    name: 'Merlot',
    colourName: 'Burgundy',
    code: '99',
    hex: '#6E1724',
    image: '/images/merlot-bed.webp'
  }
];

export const sizes = ['Queen', 'King'] as const;
export type BedSize = (typeof sizes)[number];

export const bundleOptions = [
  { id: 'sheet-set', label: 'Sheet Set', note: '1 fitted sheet · 1 flat sheet · 2 pillowcases' },
  { id: 'plus-2', label: '+ 2 Pillows', note: 'Sheet set with 2 pillows' },
  { id: 'plus-4', label: '+ 4 Pillows', note: 'Sheet set with 4 pillows' }
] as const;
export type BundleId = (typeof bundleOptions)[number]['id'];

export const productList = colours.flatMap((colour) =>
  sizes.flatMap((size) => [
    {
      name: `${colour.name} ${size} + 2 Pillows`,
      colour: colour.slug,
      size,
      bundle: 'plus-2' as BundleId,
      sheetProduct: `300TC Bamboo ${colour.colourName === 'Olive / Army Green' ? 'Green' : colour.colourName} ${size}`
    },
    {
      name: `${colour.name} ${size} + 4 Pillows`,
      colour: colour.slug,
      size,
      bundle: 'plus-4' as BundleId,
      sheetProduct: `300TC Bamboo ${colour.colourName === 'Olive / Army Green' ? 'Green' : colour.colourName} ${size}`
    }
  ])
);

export const careSteps = [
  'Cold gentle wash separately',
  'Do not bleach',
  'Tumble dry low or line dry in shade',
  'Warm iron if needed',
  'Do not dry clean'
];

export const benefits = [
  { title: 'Naturally cooling', text: 'A lighter, calmer feel for everyday sleep.' },
  { title: 'Moisture wicking', text: 'Designed around fresh, comfortable rest.' },
  { title: 'Silky soft', text: 'A smooth, tactile finish that feels considered.' },
  { title: '300TC bamboo', text: 'The Aura Living sheet-set specification.' }
];
