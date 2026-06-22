import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import { Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products — Bagasse Plates & Bowls Wholesale',
  description:
    'Browse all 12 SKUs of biodegradable bagasse tableware — bowls, round plates, and compartment plates. Min. order 1 box per SKU.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Our Product Range</h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            12 SKUs of premium sugarcane bagasse tableware — from 150 ML bowls to 12&quot; compartment
            plates. Enquire on WhatsApp for availability and delivery to your location.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-brand-accent/30 bg-brand-light p-4">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
            <p className="text-sm text-brand-primary">
              Weights approx ±10%. Min. order: 1 box per SKU. Enquire on WhatsApp for quotes and delivery.
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
    </>
  )
}
