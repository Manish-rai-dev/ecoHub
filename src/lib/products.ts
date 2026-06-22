export type Category = 'bowls' | 'plates' | 'compartment'

export interface Product {
  id: number
  name: string
  weight: string
  pcsPerBox: number
  category: Category
  icon: string
}

export const products: Product[] = [
  { id: 1, name: '150 ML Bowl', weight: '4 GM ±10%', pcsPerBox: 3000, category: 'bowls', icon: 'bowl' },
  { id: 2, name: '180 ML Bowl', weight: '4.5 GM ±10%', pcsPerBox: 2400, category: 'bowls', icon: 'bowl' },
  { id: 3, name: '360 ML Bowl', weight: '8 GM ±10%', pcsPerBox: 2000, category: 'bowls', icon: 'bowl' },
  { id: 4, name: '6" Deep Round Plate', weight: '5.2 GM ±10%', pcsPerBox: 2400, category: 'plates', icon: 'tools-kitchen-2' },
  { id: 5, name: '7" Deep Round Plate', weight: '7.5 GM ±10%', pcsPerBox: 1800, category: 'plates', icon: 'tools-kitchen-2' },
  { id: 6, name: '9" Round Plate', weight: '14 GM ±10%', pcsPerBox: 900, category: 'plates', icon: 'tools-kitchen-2' },
  { id: 7, name: '10" 3CP Square Plate', weight: '16 GM ±10%', pcsPerBox: 700, category: 'compartment', icon: 'layout-grid' },
  { id: 8, name: '10" Round Plate', weight: '17.5 GM ±10%', pcsPerBox: 700, category: 'plates', icon: 'tools-kitchen-2' },
  { id: 9, name: '10" 3CP Round Plate', weight: '16 GM ±10%', pcsPerBox: 700, category: 'compartment', icon: 'layout-grid' },
  { id: 10, name: '11" Round Plate', weight: '20 GM ±10%', pcsPerBox: 600, category: 'plates', icon: 'tools-kitchen-2' },
  { id: 11, name: '11" 4CP Round Plate', weight: '22 GM ±10%', pcsPerBox: 600, category: 'compartment', icon: 'layout-grid' },
  { id: 12, name: '12" 4CP Round Plate', weight: '27 GM ±10%', pcsPerBox: 500, category: 'compartment', icon: 'layout-grid' },
]

export function getProductMoq(product: Product): string {
  return `Min. 1 box (${product.pcsPerBox.toLocaleString('en-IN')} pcs)`
}

export const featuredProductIds = [1, 6, 12]

export const categoryLabels: Record<Category | 'all', string> = {
  all: 'All',
  bowls: 'Bowls',
  plates: 'Round Plates',
  compartment: 'Compartment Plates',
}
