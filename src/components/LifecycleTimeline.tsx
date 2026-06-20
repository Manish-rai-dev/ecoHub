import { Factory, Leaf, Recycle, Sprout, Truck, UtensilsCrossed } from 'lucide-react'

const steps = [
  {
    icon: Sprout,
    title: 'Origin',
    description:
      'Sugarcane is harvested across India. Bagasse — the fibrous residue after juice extraction — becomes our raw material instead of being burned or discarded.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'At our Varanasi facility, bagasse pulp is moulded into plates and bowls — no plastic coating, no harmful chemicals. Every piece is food-grade and leak resistant.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description:
      'Products are packed in bulk boxes and dispatched directly to restaurants, caterers, and institutions across Purvanchal and beyond.',
  },
  {
    icon: UtensilsCrossed,
    title: 'In-Use',
    description:
      'Safe for hot and cold food. Microwave and freezer friendly. Sturdy enough for full meals — from thali service to buffet catering.',
  },
  {
    icon: Recycle,
    title: 'Day 1–30 Composting',
    description:
      'After use, bagasse tableware begins breaking down in compost or soil. No microplastics. No toxic residue.',
    highlight: false,
  },
  {
    icon: Leaf,
    title: 'Day 90 Fully Biodegraded',
    description:
      'Within approximately 90 days, the product returns completely to nature — closing the loop from field to table to earth.',
    highlight: true,
  },
]

export default function LifecycleTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-brand-light md:left-1/2 md:-ml-px" />
      <div className="space-y-10">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className={`hidden flex-1 md:block ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`} />
            <div
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-md ${
                step.highlight ? 'bg-brand-accent text-brand-primary' : 'bg-brand-primary text-white'
              }`}
            >
              <step.icon className="h-5 w-5" />
            </div>
            <div className={`flex-1 pb-2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
              <h3 className="mb-2 text-lg font-semibold text-brand-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
