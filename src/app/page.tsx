import type { Metadata } from 'next'
import Link from 'next/link'
import HowToOrder from '@/components/HowToOrder'
import ProductCard from '@/components/ProductCard'
import TrustBadges from '@/components/TrustBadges'
import WhatsAppButton from '@/components/WhatsAppButton'
import WhatsAppCtaStrip from '@/components/WhatsAppCtaStrip'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { featuredProductIds, products } from '@/lib/products'
import { cn } from '@/lib/utils'
import { ArrowRight, Factory, Leaf, Package, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eco-Friendly Bagasse Tableware Manufacturer in Varanasi',
  description:
    'India\'s eco future starts at your table. Premium biodegradable sugarcane bagasse plates and bowls from Yaha Mogi Ecohub LLP — direct from manufacturer, Purvanchal delivery.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  description: 'Eco-friendly bagasse tableware manufacturer and supplier in Varanasi',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: 'IN',
  },
  telephone: '+91-9452936267',
  email: company.email,
  openingHours: 'Mo-Sa 09:00-19:00',
  taxID: company.gstin,
  sameAs: [company.instagramUrl],
}

const stats = [
  { value: '12+', label: 'Product SKUs' },
  { value: '90 days', label: 'Biodegradable' },
  { value: '1 box', label: 'Min. order per SKU' },
  { value: 'Purvanchal', label: 'Delivery coverage' },
]

const whyChooseUs = [
  {
    icon: Leaf,
    title: '100% Bagasse, Zero Plastic',
    description:
      'Made from sugarcane fibre — a renewable agricultural byproduct. No plastic coating, no foam, no guilt.',
  },
  {
    icon: Factory,
    title: 'Direct from Manufacturer',
    description:
      'Buy straight from our Varanasi facility with no middlemen — reliable supply and dedicated support.',
  },
  {
    icon: Package,
    title: '12 SKUs for Every Need',
    description:
      'From 150 ML bowls to 12" compartment plates — sizes for cloud kitchens, caterers, and institutions.',
  },
  {
    icon: ShieldCheck,
    title: 'SUP-Ban Ready',
    description:
      'Stay compliant with India\'s single-use plastic regulations while serving food safely and sustainably.',
  },
]

const featuredProducts = products.filter((p) => featuredProductIds.includes(p.id))

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <Badge className="mb-6 border-brand-accent/30 bg-brand-secondary text-brand-text-on-green hover:bg-brand-secondary">
            100% Biodegradable · Made from Sugarcane Bagasse
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            India&apos;s eco future starts at your table
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-text-on-green">
            {company.name} manufactures premium bagasse plates and bowls in Varanasi — helping
            restaurants, caterers, and institutions replace single-use plastic with compostable
            tableware that returns to the earth in 90 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: 'default' }),
                'bg-brand-accent font-semibold text-brand-primary hover:bg-brand-accent/90',
              )}
            >
              Shop all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <WhatsAppButton
              message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware products."
              label="WhatsApp Enquiry"
            />
            <Link
              href="/enterprise"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'default' }),
                'border-brand-text-on-green bg-transparent text-white hover:bg-brand-secondary',
              )}
            >
              Become Distributor
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-brand-secondary/50 pt-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-brand-accent md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-brand-text-on-green">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Best-selling SKUs for restaurants and caterers</p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-brand-secondary hover:text-brand-primary"
            >
              View all 12 products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-brand-primary">Why Choose Us</h2>
            <p className="mt-2 text-muted-foreground">
              Trusted by food businesses across Purvanchal for quality and reliability
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-brand-secondary/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-brand-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowToOrder />
      <WhatsAppCtaStrip />
    </>
  )
}
