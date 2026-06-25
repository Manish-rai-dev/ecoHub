import type { Metadata } from 'next'
import LifecycleExplorer from '@/components/LifecycleExplorer'
import WhatsAppCtaStrip from '@/components/WhatsAppCtaStrip'
import { Building2, ChefHat, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Lifecycle — Field to Compost in 90–150 Days',
  description:
    'Follow the journey of Yaha Mogi bagasse tableware from sugarcane fields through production, use, and full biodegradation in 90–150 days — zero microplastics.',
}

const impactMetrics = [
  {
    value: '93%',
    label: 'Lower CO₂ vs paper',
    description: 'Lower carbon footprint per kg compared to paper plates',
  },
  {
    value: '69%',
    label: 'Lower CO₂ vs plastic',
    description: 'Significantly lower emissions than petroleum-based disposables',
  },
  {
    value: '90–150 days',
    label: 'Full biodegradation',
    description: 'Returns completely to nature in compost or soil',
  },
  {
    value: '0',
    label: 'Microplastics',
    description: 'No plastic coating means no toxic breakdown particles',
  },
]

const useCases = [
  {
    icon: ChefHat,
    title: 'Restaurants & Cloud Kitchens',
    description:
      'Daily service plates and bowls that handle hot curries, biryanis, and thali meals — microwave safe and leak resistant.',
  },
  {
    icon: PartyPopper,
    title: 'Catering & Events',
    description:
      'Compartment plates for weddings, festivals, and corporate events. Bulk boxes available for large orders.',
  },
  {
    icon: Building2,
    title: 'Institutions',
    description:
      'Schools, hospitals, and canteens switching to SUP-ban compliant tableware with monthly standing order support.',
  },
]

export default function LifecyclePage() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-5xl">
              From sugarcane field to compost in 90–150 days
            </h1>
            <p className="max-w-2xl text-lg text-brand-text-on-green">
              Every Yaha Mogi plate and bowl follows a circular journey — born from Indian fields,
              serving your table, and returning to the earth without a trace of plastic pollution.
            </p>
          </div>
        </div>
      </section>

      <LifecycleExplorer />

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            Environmental Impact
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-bold text-brand-secondary">{metric.value}</p>
                <p className="mt-2 font-semibold text-brand-primary">{metric.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary text-white">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-brand-primary">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCtaStrip
        title="Make the switch to compostable tableware"
        subtitle="Tell us about your order and we will help you pick the right SKUs."
      />
    </>
  )
}
