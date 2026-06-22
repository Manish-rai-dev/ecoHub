import type { Metadata } from 'next'
import Link from 'next/link'
import ComparisonTable from '@/components/ComparisonTable'
import FeaturedProducts from '@/components/FeaturedProducts'
import ProductIllustration from '@/components/ProductIllustration'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eco-Friendly Bagasse Tableware in Varanasi',
  description:
    'Premium biodegradable sugarcane bagasse plates and bowls from Yaha Mogi Ecohub LLP — 15 SKUs, Made in India, Purvanchal delivery.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Yaha Mogi Ecohub LLP',
  telephone: '+91-9452936267',
  email: 'yahamogiecohub@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near G.K. Hotel Utkarsh Tower Sehmalpur Jamalpur Shivpur',
    addressLocality: 'Varanasi',
    addressRegion: 'UP',
    postalCode: '221105',
    addressCountry: 'IN',
  },
  taxID: '09AAEFY0411H1ZD',
  sameAs: ['https://instagram.com/yahamogiecohub'],
  openingHours: 'Mo-Sa 09:00-19:00',
}

const heroStats = [
  { value: '93%', label: 'Lower CO₂ than paper' },
  { value: '90–150 days', label: 'Biodegrades fully' },
  { value: '15 SKUs', label: 'Available now' },
]

const impactBar = [
  { value: '90%', label: 'of Indian bagasse is burned today — we upcycle it' },
  { value: '93%', label: 'lower CO₂ vs paper per kg' },
  { value: '69%', label: 'lower CO₂ vs plastic per kg' },
  { value: '0', label: 'microplastics released during breakdown' },
]

const categoryTiles = [
  { key: 'bowls', label: 'Bowls', shape: 'bowl-md' as const, count: 4 },
  { key: 'plates', label: 'Round Plates', shape: 'plate-round' as const, count: 6 },
  { key: 'compartment', label: 'Compartment Plates', shape: 'plate-3cp-round' as const, count: 4 },
  { key: 'special', label: 'Special Range', shape: 'plate-snack' as const, count: 1 },
]

const safeForYou = [
  {
    emoji: '🛡️',
    title: 'Safe for your food',
    description: 'Food-grade certified, zero chemical leaching',
  },
  {
    emoji: '❤️',
    title: 'Safe for your family',
    description: 'No BPA, no styrene, no toxic coatings',
  },
  {
    emoji: '🌿',
    title: 'Safe for the planet',
    description: 'Biodegrades in 90–150 days, zero microplastics',
  },
]

const circularStats = [
  { value: '93%', label: 'lower CO₂ vs paper' },
  { value: '69%', label: 'lower CO₂ vs plastic' },
  { value: '90%', label: "of India's bagasse is burned today — we upcycle it" },
  { value: '90–150 days', label: 'full biodegradation' },
]

const testimonials = [
  {
    quote:
      'We switched our cloud kitchen to Yaha Mogi 10" 3CP plates. No leaks, no sogginess. Our customers love the eco angle.',
    author: 'Amit Verma, Zaika Cloud Kitchen, Varanasi',
  },
  {
    quote:
      'The 12" 4CP plates are a hit at our wedding catering. Raghav bhai responds within the hour on WhatsApp.',
    author: 'Priya Shukla, Caterer, Gorakhpur',
  },
]

const blogPosts = [
  {
    title: "Why 90% of India's bagasse gets burned — and what we're doing about it",
    category: 'Sustainability',
  },
  {
    title: 'How switching to bagasse plates can save your cloud kitchen money',
    category: 'For Restaurants',
  },
  {
    title: "India's single-use plastic ban: a guide for Varanasi restaurants in 2026",
    category: 'Policy',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-primary text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <Badge className="mb-6 border-brand-accent/30 bg-brand-secondary text-brand-text-on-green hover:bg-brand-secondary">
              Made from Sugarcane Bagasse · Varanasi, U.P.
            </Badge>
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Safe for you, safe for{' '}
              <em className="text-brand-accent not-italic">the planet</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-text-on-green">
              Premium bagasse tableware — direct from manufacturer. 15 SKUs. No middlemen, no hidden
              charges. Serving restaurants, cloud kitchens and caterers across Purvanchal.
            </p>
            <p className="mt-4 text-sm text-brand-text-on-green">
              🛡️ Safe for your food · Safe for kids · Safe for the earth
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'bg-brand-accent font-semibold text-brand-primary hover:bg-brand-accent/90',
                )}
              >
                Shop All Products
              </Link>
              <WhatsAppButton
                message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware."
                label="WhatsApp Enquiry"
              />
              <Link
                href="/enterprise"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'default' }),
                  'border-brand-text-on-green bg-transparent text-white hover:bg-brand-secondary',
                )}
              >
                Become a Distributor
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-brand-secondary/50 bg-brand-dark/40 px-6 py-5"
              >
                <p className="text-3xl font-bold text-brand-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-brand-text-on-green">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact bar */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {impactBar.map((item) => (
            <div key={item.label} className="border-b border-white/10 px-4 py-6 text-center md:border-b-0">
              <p className="text-2xl font-bold text-brand-accent md:text-3xl">{item.value}</p>
              <p className="mt-2 text-xs text-brand-text-on-green md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-primary">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-4">
            {categoryTiles.map((tile) => (
              <Link
                key={tile.key}
                href={`/products?cat=${tile.key}`}
                className="group flex flex-col items-center rounded-xl border border-brand-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <ProductIllustration shape={tile.shape} size="sm" />
                <h3 className="mt-4 font-semibold text-brand-primary">{tile.label}</h3>
                <Badge className="mt-2 bg-brand-light text-brand-primary hover:bg-brand-light">
                  {tile.count} SKUs
                </Badge>
                <span className="mt-3 text-sm font-medium text-brand-secondary group-hover:text-brand-primary">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Best-selling SKUs for restaurants and caterers</p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-brand-secondary hover:text-brand-primary"
            >
              View all 15 products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ComparisonTable />
        </div>
      </section>

      {/* Safe for you */}
      <section className="bg-brand-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">Safe For You</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {safeForYou.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-brand-secondary/50 bg-brand-dark/30 p-6 text-center"
              >
                <p className="text-3xl">{card.emoji}</p>
                <h3 className="mt-4 font-semibold text-brand-accent">{card.title}</h3>
                <p className="mt-2 text-sm text-brand-text-on-green">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular economy */}
      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            Circular Economy Impact
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {circularStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-white p-6 text-center shadow-sm">
                <p className="text-2xl font-bold text-brand-secondary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <p className="mb-2 text-brand-accent">★★★★★</p>
                <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-medium text-brand-primary">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">From Our Blog</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href="/blog"
                className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Badge className="mb-3 bg-brand-light text-brand-primary hover:bg-brand-light">
                  {post.category}
                </Badge>
                <h3 className="font-semibold text-brand-primary">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="bg-brand-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">
            Democratising eco-friendly for every dhaba, restaurant and caterer in Purvanchal
          </h2>
          <p className="mt-4 text-brand-text-on-green">
            Join hundreds of food businesses switching from plastic to compostable bagasse tableware
            — direct from {company.name}.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware."
              label="WhatsApp Enquiry"
            />
          </div>
        </div>
      </section>
    </>
  )
}
