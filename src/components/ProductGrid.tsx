'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import ProductModal from '@/components/ProductModal'
import {
  CATEGORIES,
  getProductById,
  products,
  type CategoryFilter,
  type Product,
} from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ProductGrid() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const catParam = searchParams.get('cat') as CategoryFilter | null
  const idParam = searchParams.get('id')

  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(
    catParam && CATEGORIES.some((c) => c.key === catParam) ? catParam : 'all',
  )
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter)

  const openModal = useCallback(
    (product: Product) => {
      setSelectedProduct(product)
      const params = new URLSearchParams(searchParams.toString())
      params.set('id', String(product.id))
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const closeModal = useCallback(() => {
    setSelectedProduct(null)
    const params = new URLSearchParams(searchParams.toString())
    params.delete('id')
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }, [pathname, router, searchParams])

  useEffect(() => {
    if (catParam && CATEGORIES.some((c) => c.key === catParam)) {
      setActiveFilter(catParam)
    }
  }, [catParam])

  useEffect(() => {
    if (idParam) {
      const product = getProductById(Number(idParam))
      if (product) setSelectedProduct(product)
    } else {
      setSelectedProduct(null)
    }
  }, [idParam])

  function handleFilterChange(key: CategoryFilter) {
    setActiveFilter(key)
    const params = new URLSearchParams(searchParams.toString())
    if (key === 'all') {
      params.delete('cat')
    } else {
      params.set('cat', key)
    }
    params.delete('id')
    setSelectedProduct(null)
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  return (
    <>
      <div className="sticky top-[7.75rem] z-40 -mx-4 border-b border-brand-light bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/90 md:-mx-6 md:px-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => handleFilterChange(filter.key)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                activeFilter === filter.key
                  ? 'border-brand-primary bg-brand-primary text-white'
                  : 'border-border text-muted-foreground hover:border-brand-secondary hover:text-brand-primary',
              )}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onViewDetails={openModal} />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  )
}
