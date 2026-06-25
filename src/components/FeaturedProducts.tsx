'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import ProductModal from '@/components/ProductModal'
import { featuredProductIds, getProductById, products, type Product } from '@/lib/products'

function FeaturedProductsInner() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const idParam = searchParams.get('id')

  const featured = products.filter((p) => featuredProductIds.includes(p.id))
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
    if (idParam && pathname === '/') {
      const product = getProductById(Number(idParam))
      if (product) setSelectedProduct(product)
    }
  }, [idParam, pathname])

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
          >
            <ProductCard key={product.id} product={product} onViewDetails={openModal} />
          </motion.div>
        ))}
      </div>
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  )
}

export default function FeaturedProducts() {
  return (
    <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-brand-light" />}>
      <FeaturedProductsInner />
    </Suspense>
  )
}
