'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
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
import { waMultiProductEnquiry } from '@/lib/whatsapp'
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
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter)

  const selectedProducts = useMemo(
    () => products.filter((p) => selectedIds.has(p.id)),
    [selectedIds],
  )

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

  function toggleSelect(product: Product) {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(product.id)) {
        next.delete(product.id)
      } else {
        next.add(product.id)
      }
      return next
    })
  }

  function clearSelection() {
    setSelectedIds(new Set())
  }

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

      {selectedProducts.length > 0 && (
        <div className="sticky top-[calc(7.75rem+3.25rem)] z-40 -mx-4 mt-3 flex flex-wrap items-center justify-between gap-3 border border-brand-accent/40 bg-brand-primary px-4 py-3 md:-mx-6 md:px-6">
          <p className="text-sm font-medium text-white">
            {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} selected
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={waMultiProductEnquiry(selectedProducts)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-accent/90"
            >
              Enquire on WhatsApp for all selected →
            </a>
            <button
              type="button"
              onClick={clearSelection}
              className="text-xs text-brand-text-on-green underline-offset-2 hover:underline"
            >
              Clear selection ×
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={openModal}
            selectionMode
            selected={selectedIds.has(product.id)}
            onToggleSelect={toggleSelect}
          />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  )
}
