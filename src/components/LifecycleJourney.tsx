'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    icon: '🌾',
    title: 'Sugarcane Field',
    description: 'Harvested bagasse begins its journey straight from Indian fields.',
  },
  {
    icon: '🏭',
    title: 'Bagasse Extraction',
    description: 'Bagasse is separated and prepared for eco-friendly molding.',
  },
  {
    icon: '⚙️',
    title: 'Heat Pressing & Moulding',
    description: 'High-pressure heat forming creates strong, compostable dinnerware.',
  },
  {
    icon: '📦',
    title: 'Quality Check & Packaging',
    description: 'Every batch is inspected and packed to preserve freshness.',
  },
  {
    icon: '🚚',
    title: 'Delivery to Your Door',
    description: 'Fast courier service delivers goods across Purvanchal and beyond.',
  },
  {
    icon: '🍛',
    title: "Plate in Consumer's Hand",
    description: 'Your customer enjoys food on a stylish, sustainable plate.',
  },
  {
    icon: '♻️',
    title: 'Biodegradation',
    description: 'In 90–150 days the plate returns to soil with zero microplastic residue.',
  },
]

export default function LifecycleJourney() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1B4D2E]">
            From Sugarcane to Your Table — The Complete Circular Journey
          </p>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-6 md:overflow-visible md:flex-wrap">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[18rem] flex-1 rounded-3xl border border-[#E7E0D0] bg-white p-6 shadow-sm md:max-w-[calc(33%-1rem)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#E8F2E5] text-3xl">
                {stage.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1B4D2E]">{stage.title}</h3>
              <p className="text-sm text-[#4F5F4B]">{stage.description}</p>
              {index < stages.length - 1 && (
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[#1B4D2E]">
                  <span>Next</span>
                  <span className="text-[#6B4F2A]">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
