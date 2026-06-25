'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import ComparisonTable from '@/components/ComparisonTable'
import FeaturedProducts from '@/components/FeaturedProducts'
import ProductIllustration from '@/components/ProductIllustration'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { cn } from '@/lib/utils'
import { ArrowRight, Star } from 'lucide-react'

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
  { target: 93, suffix: '%', label: 'Lower CO₂ than paper' },
  { target: 90, suffix: '–150 days', label: 'Biodegrades fully' },
  { target: 15, suffix: ' SKUs', label: 'Available now' },
]

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 18 })
  const isReducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-120px' })
  const [count, setCount] = useState(isReducedMotion ? target : 0)

  useEffect(() => {
    if (!isInView || isReducedMotion) return
    motionValue.set(target)
  }, [isInView, isReducedMotion, motionValue, target])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setCount(Math.round(latest))
    })
  }, [springValue])

  return (
    <div ref={ref} className="rounded-xl border border-[#225335] bg-[#0F3320] px-6 py-5 text-center">
      <p className="text-4xl font-extrabold text-[#F5A623] md:text-5xl">
        {count}
        <span className="text-xl font-medium">{suffix}</span>
      </p>
      <p className="mt-3 text-[14px] font-medium text-white">{label}</p>
    </div>
  )
}

const impactBar = [
  { value: '90%', label: 'of Indian bagasse is burned today — we upcycle it' },
  { value: '93%', label: 'lower CO₂ vs paper per kg' },
  { value: '69%', label: 'lower CO₂ vs plastic per kg' },
  { value: '0', label: 'microplastics released during breakdown' },
]

const categoryTiles = [
  { key: 'bowls', label: 'Bowls', shape: 'bowl-md' as const, count: 4, icon: BowIcon },
  { key: 'plates', label: 'Round Plates', shape: 'plate-round' as const, count: 6, icon: RoundPlateIcon },
  { key: 'compartment', label: 'Compartment Plates', shape: 'plate-3cp-round' as const, count: 4, icon: CompartmentPlateIcon },
  { key: 'special', label: 'Special Range', shape: 'plate-snack' as const, count: 1, icon: LeafIcon },
]

function BowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 16c0 6 3 10 10 10s10-4 10-10" />
      <path d="M6 16h20" />
      <path d="M10 16c0-3 2-6 6-6s6 3 6 6" />
      <path d="M7 20c0 1.5 1.5 3 3 3" />
      <path d="M22 20c0 1.5-1.5 3-3 3" />
    </svg>
  )
}

function RoundPlateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5" />
    </svg>
  )
}

function CompartmentPlateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="16" cy="16" r="10" />
      <path d="M16 6v20" />
      <path d="M6 16h20" />
      <path d="M16 16l6 6" />
    </svg>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 16c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-1.6 0-3.1-.4-4.4-1.1" />
      <path d="M16 7c0 4.5-2.5 8-6 10" />
      <path d="M16 15c3 0 5-2 5-5" />
    </svg>
  )
}

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
  {
    quote:
      'Excellent service, fast delivery and durable compostable plates. Perfect for our restaurant rush.',
    author: 'Rajesh Mishra, Cafe Chaiwala, Varanasi',
  },
  {
    quote:
      'The customer support is clear, the packaging is strong, and the products are exactly what we needed for our event.',
    author: 'Nidhi Sharma, Event Planner, Lucknow',
  },
]

const reviewWall = [
  {
    quote: 'Incredible product strength and consistent quality. Our guests noticed the difference.',
    author: 'Sumanth, Cloud Kitchen Owner',
    rating: 5,
  },
  {
    quote: 'No leaks, no smell, and the eco story sells itself to customers.',
    author: 'Mamta, Catering Business',
    rating: 5,
  },
  {
    quote: 'Switching to Yaha Mogi was the best decision for our restaurant’s sustainability goals.',
    author: 'Anil, Restaurant Chain Buyer',
    rating: 4,
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

export default function HomePageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4D2E] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge className="mb-2 inline-flex border border-[#F5ECD7]/40 bg-[#F5ECD7]/10 px-3 py-2 text-sm font-semibold text-[#F5ECD7]">
                Made from Sugarcane Bagasse · Made in India
              </Badge>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#A8D5A2]">
                Yaha Mogi Ecohub LLP
              </p>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl text-white">
                Safe for you, safe for <span className="text-[#F5ECD7]">the planet</span>
              </h1>
              <p className="max-w-2xl text-xl italic text-[#D4A853]">From the Fields of India, To Your Table</p>
              <p className="max-w-2xl text-base leading-[1.75] text-[#E8F5E9]">
                Premium bagasse tableware sourced from trusted manufacturers across India with a focus on food-safe compostable plates and bowls. No hidden
                charges, no printed prices — enquire for a custom quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-[#F5ECD7] px-6 py-3 text-sm font-semibold text-[#1B4D2E] shadow-lg shadow-black/10 transition duration-200 hover:bg-[#ffffffcc]"
                >
                  Shop All Products
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <WhatsAppButton
                  message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware."
                  label="WhatsApp Enquiry"
                  variant="outline"
                  className="rounded-full border border-[#F5ECD7] bg-[#1B4D2E]/15 px-6 py-3 text-sm font-semibold text-[#F5ECD7] shadow-lg shadow-black/10 hover:bg-[#1B4D2E]/20"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/enterprise"
                  className="inline-flex rounded-full bg-[#F5ECD7] px-6 py-3 text-sm font-semibold text-[#1B4D2E] shadow-lg shadow-black/10 transition duration-200 hover:bg-[#ffffffcc]"
                >
                  Become a Distributor
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-3xl border border-white/10 bg-[#12381C]/80 p-6"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm italic text-[#CDE9CC]">
                <span>🍃</span>
                <span>
                  Ecohub — India&apos;s eco-tableware brand making 100% biodegradable bagasse plates and bowls,
                  direct from trusted manufacturing partners across India to your table.
                </span>
                <span>🍃</span>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {heroStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <AnimatedStat {...stat} label={stat.label} />
              </motion.div>
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
      <section className="py-20 overflow-visible">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Shop by Category</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Choose the right plates and bowls for your kitchen, event or delivery business.
              </p>
            </div>
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto overflow-visible pb-3 pt-1">
            {categoryTiles.map((tile, idx) => (
              <motion.div
                key={tile.key}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 40 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative min-w-[18rem] overflow-visible rounded-3xl border border-[#E7E0D0] bg-[#FDFAF4] p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#1B4D2E] hover:shadow-2xl hover:z-10"
              >
                <div className="mb-4 flex h-20 items-center justify-center rounded-3xl bg-[#E8F2E5]">
                  {tile.icon ? <tile.icon className="h-10 w-10 text-[#1B4D2E]" /> : <ProductIllustration shape={tile.shape} size="md" />}
                </div>
                <p className="mt-2 text-lg font-semibold text-[#1B4D2E]">{tile.label}</p>
                <Badge className="mt-3 rounded-full bg-[#F5ECD7] px-3 py-1 text-xs font-semibold text-[#1B4D2E]">
                  {tile.count} SKUs
                </Badge>
                <Link
                  href={`/products?cat=${tile.key}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[#1B4D2E]"
                >
                  Browse →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-3 px-4 text-[#4F7A56]">
            <div className="h-px flex-1 bg-[#D7E6D1]/70" />
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <span>🍃</span>
              <span>Seed to table — eco-conscious every step</span>
              <span>🍃</span>
            </span>
            <div className="h-px flex-1 bg-[#D7E6D1]/70" />
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

      {/* Review wall */}
      <section className="bg-[#F2F7EE] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#1B4D2E]/70">
              Trusted by restaurants, caterers and sustainability buyers
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-primary md:text-5xl">
              Buyer Reviews that speak for our quality
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#274D31]">
              Authentic feedback from businesses using our bagasse plates and bowls every day — clear, strong, and compostable.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewWall.map((item, index) => (
              <motion.div
                key={`${item.author}-${index}`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 22 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[32px] border border-[#C8D8C4] bg-white p-8 shadow-[0_18px_50px_rgba(15,40,20,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-2 text-[#D69F4A]">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" />
                  ))}
                  {item.rating < 5 && (
                    <span className="text-xs text-[#6B6B6B]">{item.rating}.0</span>
                  )}
                </div>
                <p className="text-base leading-8 text-[#1F3320]">“{item.quote}”</p>
                <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#15401D]">{item.author}</footer>
              </motion.div>
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
