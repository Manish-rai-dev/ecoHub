import { Suspense } from 'react'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import ProductGrid from '@/components/ProductGrid'
import { buildMetadata } from '@/lib/seo'
import { faqSchema, type FaqItem } from '@/lib/structured-data'

export const metadata = buildMetadata({
  title: 'Bagasse Plates & Compartment Trays Wholesale',
  description:
    'Shop biodegradable bagasse plates, bowls, 2, 3, 4 and 5 compartment plates and meal trays. Bulk and wholesale supply for restaurants, caterers and distributors across India.',
  path: '/products',
  keywords: [
    'buy bagasse plates in bulk',
    'compartment plates wholesale',
    'bagasse thali plate supplier',
    'disposable compartment plates bulk',
    'biodegradable bowls wholesale',
    'sugarcane plates wholesale India',
    'bagasse meal tray supplier',
  ],
})

const productFaqs: FaqItem[] = [
  {
    question: 'What are bagasse plates made from?',
    answer:
      'Bagasse plates are made from sugarcane fibre left after juice extraction. The fibre is moulded into sturdy disposable plates, bowls and food trays that biodegrade after use.',
  },
  {
    question: 'Can I order bagasse plates and bowls in bulk?',
    answer:
      'Yes. Yaha Mogi supplies box quantities for bulk, wholesale, restaurant, catering, cloud kitchen, institutional and distributor orders across India.',
  },
  {
    question: 'Which compartment plates are available?',
    answer:
      'The range includes 2 compartment snack trays, 3 compartment plates and chip-and-dip trays, 4 compartment thali plates, and 5 compartment meal trays.',
  },
  {
    question: 'Are bagasse plates an alternative to paper and plastic plates?',
    answer:
      'Yes. Sugarcane bagasse tableware is a plant-fibre alternative to conventional disposable paper and single-use plastic plates. It is suitable for hot, cold, oily and takeaway foods.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={faqSchema(productFaqs)} />
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="mb-4 inline-block rounded-full border border-brand-accent/40 bg-brand-secondary px-3 py-1 text-xs font-medium text-brand-text-on-green">
            14 SKUs · GST &amp; FOR inclusive · Min. 1 box/SKU
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">
            Biodegradable Bagasse Plates, Bowls &amp; Meal Trays
          </h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            Browse plain and compartment plates made from sugarcane fibre. Select one or more
            products for a bulk or wholesale quote on WhatsApp.
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
              GST &amp; FOR inclusive. Weights approx ±10% due to natural raw materials. Minimum
              order: 1 box per SKU. Quote available on enquiry — contact us via WhatsApp or phone.
            </p>
          </div>

          <div className="mt-12 grid gap-8 rounded-2xl border bg-white p-6 md:grid-cols-2 md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary">
                Sugarcane plates for food service
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Our bagasse range covers small snack plates, full-size dinner plates, bowls and
                leak-resistant compartment meal trays. These biodegradable disposable products
                offer restaurants and caterers a practical alternative to conventional paper plates
                and single-use plastic plates.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-primary">
                Bulk and supplier orders across India
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We support box, bulk, wholesale, institutional and distributor enquiries for
                restaurants, cloud kitchens, caterers, canteens, schools, hospitals and events.
                Ask us for the right sizes, compartment format, packing quantity and delivery quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={productFaqs} title="Bagasse tableware ordering questions" />
    </>
  )
}
