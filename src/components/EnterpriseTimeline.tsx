import { Factory, Leaf, Package, PhoneCall, RefreshCw } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Requirement Call',
    description: 'Understand your volume, SKUs, and delivery needs',
  },
  {
    icon: Package,
    title: 'Custom Quote',
    description: 'GST-inclusive pricing tailored to your tier',
  },
  {
    icon: Factory,
    title: 'PO/WA Confirmation',
    description: 'Confirm purchase order or WhatsApp order details',
  },
  {
    icon: Leaf,
    title: 'Priority Dispatch',
    description: 'Priority fulfilment from our Varanasi facility',
  },
  {
    icon: RefreshCw,
    title: 'Reorder Support',
    description: 'Dedicated contact for repeat and standing orders',
  },
]

export default function EnterpriseTimeline() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex min-w-[720px] items-start justify-between gap-2">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-1 flex-col items-center text-center">
            {index < steps.length - 1 && (
              <div className="absolute left-[calc(50%+24px)] top-6 hidden h-0.5 w-[calc(100%-48px)] bg-brand-light sm:block" />
            )}
            <div className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">
              <step.icon className="h-5 w-5" />
            </div>
            <h4 className="mb-1 text-sm font-semibold text-brand-primary">{step.title}</h4>
            <p className="max-w-[120px] text-xs text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
