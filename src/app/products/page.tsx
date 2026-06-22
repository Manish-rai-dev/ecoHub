import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Products — Bagasse Plates & Bowls Wholesale',
  description:
    'Browse all 15 SKUs of biodegradable bagasse tableware — bowls, round plates, and compartment plates. Min. order 1 box per SKU.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="mb-4 inline-block rounded-full border border-brand-accent/40 bg-brand-secondary px-3 py-1 text-xs font-medium text-brand-text-on-green">
            15 SKUs · All prices GST &amp; FOR inclusive · Min. 1 box/SKU
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">All Products</h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            Click any product to view full specs and enquire directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-brand-light" />}>
            <ProductGrid />
          </Suspense>

          <div className="mt-8 rounded-lg border border-brand-secondary/30 bg-brand-light p-4">
            <p className="text-sm text-brand-primary">
              All prices inclusive of GST &amp; FOR. Weights approx ±10% due to natural raw materials.
              Minimum order: 1 box per SKU. Wholesale &amp; distributor pricing available separately —
              enquire via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
