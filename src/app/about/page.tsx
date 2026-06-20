import type { Metadata } from 'next'
import WhatsAppCtaStrip from '@/components/WhatsAppCtaStrip'
import { company } from '@/lib/company'
import {
  Award,
  Building2,
  CheckCircle2,
  Factory,
  MapPin,
  ShieldCheck,
  Sprout,
  Users,
  XCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Varanasi Bagasse Tableware Manufacturer',
  description:
    'Learn how Yaha Mogi Ecohub LLP is ending single-use plastic one plate at a time — direct sourcing, Varanasi roots, GST compliance, and certified bagasse tableware.',
}

const storyCards = [
  {
    icon: Sprout,
    title: 'Direct Sourcing',
    description:
      'We source sugarcane bagasse directly from mills and farmers, ensuring consistent raw material quality and supporting rural agricultural economies.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Varanasi',
    description:
      'Manufacturing from our facility near Utkarsh Tower, Shivpur — we serve Purvanchal with fast delivery and local accountability.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    description:
      'Food-grade, GST-registered (GSTIN: 09AAEFY0411H1ZD), and aligned with India\'s SUP ban — your business stays compliant.',
  },
  {
    icon: Users,
    title: 'Every Segment',
    description:
      'From street food vendors and cloud kitchens to wedding caterers, schools, and hospitals — we have the right SKU and volume for you.',
  },
]

const bagassePoints = [
  '100% biodegradable in ~90 days',
  'Made from renewable sugarcane fibre',
  'Zero microplastics released',
  'Microwave & freezer safe',
  'Compostable after use',
]

const plasticPoints = [
  'Persists 400+ years in landfills',
  'Petroleum-based, non-renewable',
  'Breaks into harmful microplastics',
  'Banned under SUP regulations',
  'Toxic when burned or discarded',
]

const certifications = [
  { icon: ShieldCheck, title: 'Food Grade', description: 'Safe for direct food contact' },
  { icon: Award, title: 'Biodegradable', description: 'Breaks down naturally in compost' },
  { icon: Factory, title: 'ISO Practices', description: 'Quality-controlled manufacturing' },
  { icon: Building2, title: 'GST Registered', description: company.gstin },
  { icon: CheckCircle2, title: 'Compostable', description: 'Returns to soil within 90 days' },
  { icon: Sprout, title: 'Eco Certified', description: 'Sustainable byproduct utilisation' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">
            We&apos;re on a mission to end single-use plastic one plate at a time
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-text-on-green">
            {company.name} was founded in Varanasi with a simple belief: India&apos;s dining culture
            deserves tableware that honours both tradition and the environment. We transform
            sugarcane bagasse — a field byproduct — into plates and bowls that serve millions of
            meals without leaving a permanent footprint.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">Our Story</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {storyCards.map((card) => (
              <div key={card.title} className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light text-brand-primary">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-brand-primary">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            Bagasse vs Plastic
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-green-600 bg-white p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                Sugarcane Bagasse
              </h3>
              <ul className="space-y-3">
                {bagassePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-red-500 bg-white p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-600">
                <XCircle className="h-5 w-5" />
                Single-Use Plastic
              </h3>
              <ul className="space-y-3">
                {plasticPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            Certifications & Standards
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start gap-4 rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white">
                  <cert.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-primary">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">Our Directors</h2>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {company.directors.map((director) => (
              <div key={director.name} className="rounded-xl border bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                  {director.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="font-semibold text-brand-primary">{director.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Director</p>
                <a
                  href={`tel:${director.phone.replace(/\s/g, '')}`}
                  className="mt-3 inline-block text-sm font-medium text-brand-secondary hover:text-brand-primary"
                >
                  {director.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCtaStrip />
    </>
  )
}
