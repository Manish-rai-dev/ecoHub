import { MessageCircle, Package, Truck } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Send Your Requirement',
    description:
      'Share product SKUs, quantities, and delivery location via WhatsApp or our contact form.',
  },
  {
    icon: Package,
    title: 'Confirm Order',
    description:
      'Receive availability confirmation. Minimum order is 1 box per SKU.',
  },
  {
    icon: Truck,
    title: 'Reliable National Delivery',
    description:
      'We dispatch through trusted partners with reliable delivery across India.',
  },
]

export default function HowToOrder() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brand-primary">How to Order</h2>
          <p className="mt-2 text-muted-foreground">
            Simple, transparent ordering — Made in India, delivered across India
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mb-2 inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-semibold text-brand-primary">
                Step {index + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-brand-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
