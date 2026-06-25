'use client'

import { motion } from 'framer-motion'
import { Factory, Leaf, Recycle, Sprout, Truck, UtensilsCrossed } from 'lucide-react'

const steps = [
  {
    icon: Sprout,
    title: 'Origin',
    description:
      'Sugarcane harvest — bagasse extracted as agricultural byproduct',
    highlight: false,
  },
  {
    icon: Factory,
    title: 'Production',
    description:
      'Heat-pressed into food-grade tableware at our Varanasi plant — no bleach, no plastic binders',
    highlight: false,
  },
  {
    icon: Truck,
    title: 'Delivery',
    description:
      'Shipped in bulk boxes to restaurants, caterers and institutions',
    highlight: false,
  },
  {
    icon: UtensilsCrossed,
    title: 'In-Use',
    description:
      'Microwave safe, freezer safe, oil resistant — performs like any plate',
    highlight: false,
  },
  {
    icon: Recycle,
    title: 'Day 1–30',
    description:
      'Composting begins — visible breakdown of cellulose fibres in moist soil',
    highlight: false,
  },
  {
    icon: Leaf,
    title: 'Day 30–90',
    description:
      'Over 50% mass broken down. Microbial activity accelerates decomposition.',
    highlight: false,
  },
  {
    icon: Leaf,
    title: 'Day 90–150',
    description:
      'Fully biodegraded in compost conditions. Returns to soil as organic matter. Zero microplastic residue.',
    highlight: true,
  },
]

export default function LifecycleTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-brand-light md:left-1/2 md:-ml-px" />
      <div className="space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}
