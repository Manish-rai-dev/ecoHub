// ─────────────────────────────────────────────
// lib/products.ts — Yaha Mogi Ecohub LLP
// Catalog images supplied June 2026.
// Packing and weight values are included only for SKUs that match the
// previously verified inventory sheet.
// ─────────────────────────────────────────────

export type Category = 'bowls' | 'plates' | 'compartment' | 'special'

export interface ProductDetail {
  label: string
  value: string
}

export interface Product {
  id: number
  name: string
  displayName: string
  image: string
  imageAlt: string
  details: ProductDetail[]
  grammage?: string
  pcsPerBox?: number
  pcsPerPack?: number
  category: Category
  description: string
  features: string[]
  useCases: string[]
  shape:
    | 'bowl-sm'
    | 'bowl-md'
    | 'bowl-lg'
    | 'plate-round'
    | 'plate-3cp-rect'
    | 'plate-3cp-round'
    | 'plate-4cp-round'
    | 'plate-snack'
  badge?: string
}
// NOTE: pricePerPc is intentionally omitted. All pricing is by enquiry only.

const standardFeatures = [
  '100% natural bagasse',
  'Biodegradable & compostable',
  'Leak & oil resistant',
  'Microwave safe',
  'Freezer safe',
]

export const products: Product[] = [
  {
    id: 1,
    name: '120 ML KIWI BOWL',
    displayName: '120 ml Kiwi Bowl',
    image: '/Assests/120MLKIWIBOWL.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 120 ml kiwi bowl made from bagasse',
    details: [
      { label: 'Capacity', value: '120 ml' },
      { label: 'Style', value: 'Kiwi bowl' },
    ],
    category: 'bowls',
    description:
      'A compact kiwi-style bowl for sauces, chutneys, dips, desserts and tasting portions.',
    features: standardFeatures,
    useCases: ['Chutneys', 'Dips & sauces', 'Desserts', 'Tasting portions'],
    shape: 'bowl-sm',
    badge: 'Compact serve',
  },
  {
    id: 2,
    name: '180 ML BOWL',
    displayName: '180 ml Bowl',
    image: '/Assests/180MLBOWL.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 180 ml round bagasse bowl',
    details: [
      { label: 'Capacity', value: '180 ml' },
      { label: 'Format', value: 'Round bowl' },
    ],
    grammage: '4.5 GM ±10%',
    pcsPerBox: 2400,
    pcsPerPack: 50,
    category: 'bowls',
    description:
      'A versatile single-serve bowl suited to dal, raita, desserts and side portions.',
    features: standardFeatures,
    useCases: ['Dal portions', 'Raita', 'Desserts', 'Thali service'],
    shape: 'bowl-sm',
  },
  {
    id: 13,
    name: '240 ML BOWL',
    displayName: '240 ml Bowl',
    image: '/Assests/240MLBOWL.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 240 ml round bagasse bowl',
    details: [
      { label: 'Capacity', value: '240 ml' },
      { label: 'Format', value: 'Round bowl' },
    ],
    grammage: '6 GM ±10%',
    pcsPerBox: 2000,
    pcsPerPack: 50,
    category: 'bowls',
    description:
      'A medium-capacity bowl for soups, curries, desserts and generous side portions.',
    features: standardFeatures,
    useCases: ['Soups', 'Curries', 'Desserts', 'Medium portions'],
    shape: 'bowl-md',
  },
  {
    id: 14,
    name: '360 ML BOWL',
    displayName: '360 ml Bowl',
    image: '/Assests/360MLBOWL.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 360 ml round bagasse bowl',
    details: [
      { label: 'Capacity', value: '360 ml' },
      { label: 'Format', value: 'Round bowl' },
    ],
    grammage: '8 GM ±10%',
    pcsPerBox: 2000,
    pcsPerPack: 25,
    category: 'bowls',
    description:
      'A deep, generous bowl for biryani, noodles, curries and complete single-serve meals.',
    features: standardFeatures,
    useCases: ['Biryani', 'Noodles', 'Curries', 'Cloud kitchen delivery'],
    shape: 'bowl-md',
    badge: 'Large bowl',
  },
  {
    id: 3,
    name: '6" PLAIN PLATE',
    displayName: '6" Plain Plate',
    image: '/Assests/6InchPlainPlate.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 6 inch plain round bagasse plate',
    details: [
      { label: 'Size', value: '6 inch' },
      { label: 'Format', value: 'Plain round plate' },
    ],
    grammage: '5.2 GM ±10%',
    pcsPerBox: 2400,
    pcsPerPack: 50,
    category: 'plates',
    description:
      'A compact plain plate for appetisers, snacks, desserts and small servings.',
    features: standardFeatures,
    useCases: ['Starters', 'Desserts', 'Snack service', 'Kids portions'],
    shape: 'plate-round',
  },
  {
    id: 4,
    name: '7" PLAIN PLATE',
    displayName: '7" Plain Plate',
    image: '/Assests/7InchPlainPlate.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 7 inch plain round bagasse plate',
    details: [
      { label: 'Size', value: '7 inch' },
      { label: 'Format', value: 'Plain round plate' },
    ],
    grammage: '7.5 GM ±10%',
    pcsPerBox: 1800,
    pcsPerPack: 50,
    category: 'plates',
    description:
      'A versatile plain plate for starters, chaat, snacks and side dishes.',
    features: standardFeatures,
    useCases: ['Starters', 'Chaat', 'Side dishes', 'Street food'],
    shape: 'plate-round',
  },
  {
    id: 5,
    name: '9" PLAIN PLATE',
    displayName: '9" Plain Plate',
    image: '/Assests/9InchPlainPlate.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 9 inch plain round bagasse plate',
    details: [
      { label: 'Size', value: '9 inch' },
      { label: 'Format', value: 'Plain round plate' },
    ],
    grammage: '14 GM ±10%',
    pcsPerBox: 1000,
    pcsPerPack: 25,
    category: 'plates',
    description:
      'A full-size plain plate for everyday meals, restaurant service and catering.',
    features: standardFeatures,
    useCases: ['Full meals', 'Restaurant service', 'Catering', 'Lunch service'],
    shape: 'plate-round',
    badge: 'Restaurant pick',
  },
  {
    id: 6,
    name: '12" PLAIN PLATE',
    displayName: '12" Plain Plate',
    image: '/Assests/12InchPlainPlate.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 12 inch plain round bagasse plate',
    details: [
      { label: 'Size', value: '12 inch' },
      { label: 'Format', value: 'Plain round plate' },
    ],
    grammage: '27 GM ±10%',
    pcsPerBox: 500,
    pcsPerPack: 25,
    category: 'plates',
    description:
      'A generously sized plain plate for thalis, buffets and large meal portions.',
    features: standardFeatures,
    useCases: ['Large thali', 'Wedding catering', 'Buffets', 'Corporate events'],
    shape: 'plate-round',
    badge: 'Large format',
  },
  {
    id: 7,
    name: '10" 3CP RECTANGULAR PLATE',
    displayName: '10" 3 CP Rectangular Plate',
    image: '/Assests/10Inch3CP.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 10 inch three-compartment rectangular bagasse plate',
    details: [
      { label: 'Size', value: '10 inch' },
      { label: 'Compartments', value: '3' },
      { label: 'Format', value: 'Rectangular plate' },
    ],
    grammage: '17 GM ±10%',
    pcsPerBox: 1000,
    pcsPerPack: 25,
    category: 'compartment',
    description:
      'A rectangular three-compartment plate that keeps mains and sides neatly separated.',
    features: standardFeatures,
    useCases: ['Cloud kitchens', 'Meal service', 'Takeaway', 'Corporate catering'],
    shape: 'plate-3cp-rect',
    badge: 'Cloud kitchen pick',
  },
  {
    id: 8,
    name: '11" 4CP BAGASSE PLATE',
    displayName: '11" 4 CP Bagasse Plate',
    image: '/Assests/11Inch4CP.jpeg',
    imageAlt: 'Yaha Mogi Ecohub 11 inch four-compartment round bagasse plate',
    details: [
      { label: 'Size', value: '11 inch' },
      { label: 'Compartments', value: '4' },
      { label: 'Format', value: 'Round plate' },
    ],
    grammage: '22 GM ±10%',
    pcsPerBox: 600,
    pcsPerPack: 25,
    category: 'compartment',
    description:
      'A round four-compartment plate for serving a main course with multiple sides.',
    features: standardFeatures,
    useCases: ['Full thali', 'Weddings', 'Canteens', 'Institutional meals'],
    shape: 'plate-4cp-round',
    badge: 'Thali pick',
  },
  {
    id: 9,
    name: '2CP SNACKS TRAY',
    displayName: '2 CP Snacks Tray',
    image: '/Assests/2CPSnackstray.jpeg',
    imageAlt: 'Yaha Mogi Ecohub two-compartment rectangular bagasse snacks tray',
    details: [
      { label: 'Compartments', value: '2' },
      { label: 'Format', value: 'Rectangular tray' },
    ],
    category: 'compartment',
    description:
      'A compact two-compartment tray that separates snacks from dips, chutneys or accompaniments.',
    features: standardFeatures,
    useCases: ['Snacks & dip', 'Chaat', 'Café service', 'Event catering'],
    shape: 'plate-3cp-rect',
  },
  {
    id: 10,
    name: 'FIVE COMPARTMENT REGULAR TRAY',
    displayName: '5 Compartment Regular Tray',
    image: '/Assests/5CPRegularTray.jpeg',
    imageAlt: 'Yaha Mogi Ecohub five-compartment rectangular bagasse meal tray',
    details: [
      { label: 'Compartments', value: '5' },
      { label: 'Format', value: 'Rectangular meal tray' },
    ],
    category: 'compartment',
    description:
      'A five-compartment regular tray designed to organise a complete meal and its accompaniments.',
    features: standardFeatures,
    useCases: ['Complete meals', 'Canteens', 'Catering', 'Institutional service'],
    shape: 'plate-3cp-rect',
    badge: 'Complete meal',
  },
  {
    id: 11,
    name: 'THREE COMPARTMENT CHIP AND DIP TRAY',
    displayName: '3 Compartment Chip & Dip Tray',
    image: '/Assests/ThreeCompartmentChipandDipTray.jpeg',
    imageAlt: 'Yaha Mogi Ecohub three-compartment rectangular chip and dip bagasse tray',
    details: [
      { label: 'Compartments', value: '3' },
      { label: 'Format', value: 'Chip & dip tray' },
    ],
    category: 'special',
    description:
      'A three-compartment serving tray with a large snack section and two smaller dip sections.',
    features: standardFeatures,
    useCases: ['Chips & dips', 'Nachos', 'Party snacks', 'Catering starters'],
    shape: 'plate-3cp-rect',
  },
  {
    id: 12,
    name: 'TRIANGULAR SNACK PLATE',
    displayName: 'Triangular Snack Plate',
    image: '/Assests/triangularSnackPlate.jpeg',
    imageAlt: 'Yaha Mogi Ecohub triangular bagasse snack plate',
    details: [
      { label: 'Shape', value: 'Triangular' },
      { label: 'Format', value: 'Snack plate' },
    ],
    category: 'special',
    description:
      'A distinctive triangular plate for individual snack, dessert and appetiser servings.',
    features: standardFeatures,
    useCases: ['Samosas', 'Desserts', 'Appetisers', 'Café service'],
    shape: 'plate-snack',
    badge: 'Distinctive shape',
  },
]

export const CATEGORIES = [
  { key: 'all', label: 'All Products', count: products.length },
  {
    key: 'bowls',
    label: 'Bowls',
    count: products.filter((product) => product.category === 'bowls').length,
  },
  {
    key: 'plates',
    label: 'Plain Plates',
    count: products.filter((product) => product.category === 'plates').length,
  },
  {
    key: 'compartment',
    label: 'Compartment Plates & Trays',
    count: products.filter((product) => product.category === 'compartment').length,
  },
  {
    key: 'special',
    label: 'Special Serveware',
    count: products.filter((product) => product.category === 'special').length,
  },
] as const

export type CategoryFilter = (typeof CATEGORIES)[number]['key']

export const featuredProductIds = [1, 7, 10]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export const categoryLabels: Record<Category | 'all', string> = {
  all: 'All Products',
  bowls: 'Bowls',
  plates: 'Plain Plates',
  compartment: 'Compartment Plates & Trays',
  special: 'Special Serveware',
}
