'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { categoryLabels, products, type Category } from '@/lib/products'
import { cn } from '@/lib/utils'

type FilterKey = 'all' | Category

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: categoryLabels.all },
  { key: 'bowls', label: categoryLabels.bowls },
  { key: 'plates', label: categoryLabels.plates },
  { key: 'compartment', label: categoryLabels.compartment },
]

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter)

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeFilter === filter.key
                ? 'bg-brand-primary text-white'
                : 'bg-brand-light text-brand-primary hover:bg-brand-secondary/20',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
