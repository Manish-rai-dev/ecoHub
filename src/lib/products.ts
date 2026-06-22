// ─────────────────────────────────────────────
// lib/products.ts — Yaha Mogi Ecohub LLP
// Source: verified inventory sheets June 2026
// ─────────────────────────────────────────────

export type Category = 'bowls' | 'plates' | 'compartment' | 'special'

export interface Product {
  id: number
  name: string
  displayName: string
  grammage: string
  pcsPerBox: number
  pcsPerPack: number
  category: Category
  description: string
  features: string[]
  useCases: string[]
  shape: 'bowl-sm' | 'bowl-md' | 'bowl-lg' | 'plate-round' | 'plate-3cp-rect' | 'plate-3cp-round' | 'plate-4cp-round' | 'plate-snack'
  badge?: string
}
// NOTE: pricePerPc is intentionally omitted. All pricing is by enquiry only.

export const products: Product[] = [
  {
    id: 1,
    name: '150 ML BOWL',
    displayName: '150 ML Bowl',
    grammage: '4 GM ±10%',
    pcsPerBox: 2700,
    pcsPerPack: 50,
    category: 'bowls',
    description: 'Compact sauce and chutney bowl. Perfect for thali setups and condiment service.',
    features: ['Leak resistant', 'Microwave safe', 'Freezer safe', 'Food grade certified', 'Oil resistant'],
    useCases: ['Thali chutney', 'Sauce portions', 'Snack condiments', 'Catering sides'],
    shape: 'bowl-sm',
    badge: 'Best value',
  },
  {
    id: 2,
    name: '180 ML BOWL',
    displayName: '180 ML Bowl',
    grammage: '4.5 GM ±10%',
    pcsPerBox: 2400,
    pcsPerPack: 50,
    category: 'bowls',
    description: 'Slightly larger than the 150ML — ideal for dal, raita and dessert portions.',
    features: ['Leak resistant', 'Microwave safe', 'Freezer safe', 'Food grade certified'],
    useCases: ['Dal portions', 'Raita', 'Desserts', 'Thali service'],
    shape: 'bowl-sm',
  },
  {
    id: 3,
    name: '360 ML BOWL',
    displayName: '360 ML Bowl',
    grammage: '8 GM ±10%',
    pcsPerBox: 2000,
    pcsPerPack: 25,
    category: 'bowls',
    description: 'Our most popular bowl — perfect for biryani, noodles and hearty curries.',
    features: ['Deep walls', 'Leak resistant', 'Microwave safe', 'Food grade certified', 'Oil resistant'],
    useCases: ['Biryani', 'Noodles', 'Curries', 'Catering', 'Cloud kitchen delivery'],
    shape: 'bowl-md',
    badge: 'Top seller',
  },
  {
    id: 4,
    name: '240 ML BOWL',
    displayName: '240 ML Bowl',
    grammage: '6 GM ±10%',
    pcsPerBox: 2000,
    pcsPerPack: 50,
    category: 'bowls',
    description: 'Mid-size bowl for soups, single-serve desserts and medium curry portions.',
    features: ['Leak resistant', 'Microwave safe', 'Freezer safe', 'Food grade certified'],
    useCases: ['Soups', 'Curries', 'Ice cream', 'Medium portions'],
    shape: 'bowl-md',
    badge: 'New',
  },
  {
    id: 5,
    name: '6" ROUND PLATE',
    displayName: '6" Round Plate',
    grammage: '5.2 GM ±10%',
    pcsPerBox: 2400,
    pcsPerPack: 50,
    category: 'plates',
    description: 'Small round plate for starters, snacks and kids meals. Ideal for snack stations.',
    features: ['Sturdy rim', 'Food grade certified', 'Water & oil proof', 'Microwave safe'],
    useCases: ['Starters', 'Kids meals', 'Snack stations', 'Chaat service'],
    shape: 'plate-round',
  },
  {
    id: 6,
    name: '7" ROUND PLATE',
    displayName: '7" Round Plate',
    grammage: '7.5 GM ±10%',
    pcsPerBox: 1800,
    pcsPerPack: 50,
    category: 'plates',
    description: 'Versatile mid-size round plate for starters, snacks and side dishes.',
    features: ['Deep rim', 'Microwave safe', 'Freezer safe', 'Water & oil proof'],
    useCases: ['Starters', 'Side dishes', 'Snack portions', 'Street food'],
    shape: 'plate-round',
  },
  {
    id: 7,
    name: '9" ROUND PLATE',
    displayName: '9" Round Plate',
    grammage: '14 GM ±10%',
    pcsPerBox: 1000,
    pcsPerPack: 25,
    category: 'plates',
    description: 'Full-size dinner plate for restaurants and catering. Holds full meals without flexing.',
    features: ['Heavy duty', 'Deep rim', 'Microwave safe', 'Water & oil proof', 'Food grade certified'],
    useCases: ['Full meals', 'Restaurant service', 'Catering', 'Lunch boxes'],
    shape: 'plate-round',
    badge: 'Restaurant pick',
  },
  {
    id: 8,
    name: '10" ROUND PLATE',
    displayName: '10" Round Plate',
    grammage: '16 GM ±10%',
    pcsPerBox: 1000,
    pcsPerPack: 25,
    category: 'plates',
    description: 'Large dinner plate suitable for generous portions and full thali-style service.',
    features: ['Extra sturdy', 'Microwave safe', 'Freezer safe', 'Food grade certified'],
    useCases: ['Full thali', 'Dinner service', 'Large portions', 'Corporate canteens'],
    shape: 'plate-round',
  },
  {
    id: 9,
    name: '11" ROUND PLATE',
    displayName: '11" Round Plate',
    grammage: '20 GM ±10%',
    pcsPerBox: 600,
    pcsPerPack: 25,
    category: 'plates',
    description: 'Premium large plate for upscale catering and full-course dinner service.',
    features: ['Premium thickness', 'Microwave safe', 'Water & oil proof', 'Food grade certified'],
    useCases: ['Premium catering', 'Full-course service', 'Hotel banquets'],
    shape: 'plate-round',
  },
  {
    id: 10,
    name: '12" ROUND PLATE',
    displayName: '12" Round Plate',
    grammage: '27 GM ±10%',
    pcsPerBox: 500,
    pcsPerPack: 25,
    category: 'plates',
    description: 'Largest round plate — for generous thali spreads and large event catering.',
    features: ['Maximum size', 'Extra sturdy', 'Microwave safe', 'Food grade certified'],
    useCases: ['Large thali', 'Weddings', 'Corporate events', 'Buffet service'],
    shape: 'plate-round',
    badge: 'New',
  },
  {
    id: 11,
    name: '10" 3CP RECTANGLE PLATE',
    displayName: '10" 3CP Rectangle Plate',
    grammage: '17 GM ±10%',
    pcsPerBox: 1000,
    pcsPerPack: 25,
    category: 'compartment',
    description: 'Rectangular 3-compartment plate — ideal for cloud kitchen packaging and meal-prep delivery.',
    features: ['3 sections', 'Rectangle format', 'Microwave safe', 'Leak resistant', 'Food grade certified'],
    useCases: ['Cloud kitchens', 'Takeaway delivery', 'Meal prep', 'Corporate tiffin'],
    shape: 'plate-3cp-rect',
    badge: 'Cloud kitchen fav',
  },
  {
    id: 12,
    name: '10" 3CP ROUND PLATE',
    displayName: '10" 3CP Round Plate',
    grammage: '17.5 GM ±10%',
    pcsPerBox: 700,
    pcsPerPack: 25,
    category: 'compartment',
    description: 'Classic 3-compartment round plate — perfect thali layout in eco-friendly bagasse.',
    features: ['3 sections', 'Round format', 'Microwave safe', 'Food grade certified', 'Oil resistant'],
    useCases: ['Restaurant thali', 'Catering', 'Institutions', 'School canteens'],
    shape: 'plate-3cp-round',
    badge: 'Top seller',
  },
  {
    id: 13,
    name: '11" 4CP ROUND PLATE',
    displayName: '11" 4CP Round Plate',
    grammage: '22 GM ±10%',
    pcsPerBox: 600,
    pcsPerPack: 25,
    category: 'compartment',
    description: '4-compartment round plate — for full thali with main, dal, sabzi and salad.',
    features: ['4 sections', 'Microwave safe', 'Water & oil proof', 'Food grade certified'],
    useCases: ['Full thali', 'Weddings', 'Institutional canteens', 'Hospitals'],
    shape: 'plate-4cp-round',
  },
  {
    id: 14,
    name: '12" 4CP ROUND PLATE',
    displayName: '12" 4CP Round Plate',
    grammage: '27 GM ±10%',
    pcsPerBox: 500,
    pcsPerPack: 25,
    category: 'compartment',
    description: 'Largest compartment plate — perfect for wedding buffets and full thali service.',
    features: ['4 sections', 'Premium size', 'Microwave safe', 'Food grade certified', 'Heavy duty'],
    useCases: ['Wedding buffets', 'Premium catering', 'Large thali', 'Festivals'],
    shape: 'plate-4cp-round',
    badge: 'Catering fav',
  },
  {
    id: 15,
    name: 'SNACK PLATE',
    displayName: 'Snack Plate',
    grammage: '3.5 GM ±10%',
    pcsPerBox: 3000,
    pcsPerPack: 20,
    category: 'special',
    description: 'Lightweight shallow snack plate for samosas, pakoras, chaat and dry finger foods.',
    features: ['Shallow design', 'Oil resistant', 'Food grade certified', 'Sturdy enough for dry foods'],
    useCases: ['Snack service', 'Street food stalls', 'Evening snacks', 'Chai tapri', 'Catering starters'],
    shape: 'plate-snack',
    badge: 'New',
  },
]

export const CATEGORIES = [
  { key: 'all', label: 'All Products', count: products.length },
  { key: 'bowls', label: 'Bowls', count: products.filter((p) => p.category === 'bowls').length },
  { key: 'plates', label: 'Round Plates', count: products.filter((p) => p.category === 'plates').length },
  { key: 'compartment', label: 'Compartment Plates', count: products.filter((p) => p.category === 'compartment').length },
  { key: 'special', label: 'Special Range', count: products.filter((p) => p.category === 'special').length },
] as const

export type CategoryFilter = (typeof CATEGORIES)[number]['key']

export const featuredProductIds = [3, 12, 14]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export const categoryLabels: Record<Category | 'all', string> = {
  all: 'All Products',
  bowls: 'Bowls',
  plates: 'Round Plates',
  compartment: 'Compartment Plates',
  special: 'Special Range',
}
