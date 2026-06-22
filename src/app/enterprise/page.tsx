import type { Metadata } from 'next'
import EnterpriseTimeline from '@/components/EnterpriseTimeline'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { waEnterprise } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { CheckCircle2, Globe, IndianRupee, Mail, MapPin, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise & Distributor Partnerships',
  description:
    'Partner with Yaha Mogi Ecohub LLP as a bulk buyer, wholesale distributor, or institutional supplier. GST-compliant, Purvanchal delivery, dedicated support.',
}

const tiers = [
  {
    name: 'Bulk Buyer',
    subtitle: 'Restaurants, cloud kitchens, caterers',
    featured: false,
    features: [
      'Min. 1 box/SKU',
      'GST inclusive',
      'Purvanchal delivery',
      'WhatsApp enquiry',
    ],
  },
  {
    name: 'Wholesale Distributor',
    subtitle: 'Regional partners',
    featured: true,
    features: [
      'Distributor pricing on enquiry',
      'Min. 5 boxes/order',
      'Priority dispatch',
      'Dedicated contact',
      'Credit terms on approval',
    ],
  },
  {
    name: 'Institutional Supply',
    subtitle: 'Schools, hospitals, corporates',
    featured: false,
    features: [
      'Custom volumes',
      'Monthly standing orders',
      'GST invoicing',
      'Scheduled delivery',
    ],
  },
]

const whyPartner = [
  {
    icon: Users,
    title: 'No middlemen',
    description: 'Buy direct from Yaha Mogi Ecohub — margins protected.',
  },
  {
    icon: IndianRupee,
    title: 'Full GST compliance',
    description: `Registered LLP with GSTIN ${company.gstin}. Formal procurement ready.`,
  },
  {
    icon: TrendingUp,
    title: 'SUP-ban tailwinds',
    description: 'Surging demand for biodegradable alternatives across Uttar Pradesh and India.',
  },
  {
    icon: MapPin,
    title: 'Purvanchal coverage',
    description: 'Strategic Varanasi location for fast delivery across eastern UP.',
  },
]

export default function EnterprisePage() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">
            Scale with Yaha Mogi Ecohub as your supply partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-text-on-green">
            Whether you run a restaurant chain, distribute across districts, or supply institutions
            — we have a partnership tier designed for your volume and business model.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm ${
                  tier.featured
                    ? 'border-2 border-brand-secondary ring-2 ring-brand-secondary/20'
                    : ''
                }`}
              >
                {tier.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary hover:bg-brand-accent">
                    Most popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-brand-primary">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                <ul className="my-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={waEnterprise(tier.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md bg-wa px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wa/90"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            How We Handle Enterprise Orders
          </h2>
          <EnterpriseTimeline />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-primary">
            Why Partner With Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartner.map((item) => (
              <div key={item.title} className="rounded-xl border bg-white p-6 shadow-sm">
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

      <section className="bg-brand-secondary py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center md:px-6">
          <Globe className="h-10 w-10 text-brand-accent" />
          <h2 className="text-2xl font-bold text-white">Let&apos;s build a sustainable supply chain together</h2>
          <p className="max-w-xl text-brand-text-on-green">
            Reach out via WhatsApp for instant response or email us for detailed proposals and GST
            documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              message="Hi! I am interested in an enterprise partnership with Yaha Mogi Ecohub LLP. Please share terms and next steps."
              label="WhatsApp Us"
            />
            <a
              href={`mailto:${company.email}`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'default' }),
                'border-white bg-transparent text-white hover:bg-white/10',
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
