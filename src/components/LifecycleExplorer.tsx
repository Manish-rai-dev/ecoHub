'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Badge } from '@/components/ui/badge'

const stages = [
  {
    id: 1,
    icon: '🌾',
    title: 'Sugarcane Farming',
    tag: 'Origin',
    description:
      'Bagasse comes from renewable sugarcane fields across India, turning agricultural waste into a purpose-built raw material.',
    facts: ['10–12 month crop cycle', '~30% bagasse yield', 'Sourced from Indian sugarcane growers'],
    bg: '#E8F5E0',
    border: '#6AB04C',
    ecoInsight:
      'Harvested bagasse is a renewable byproduct that avoids extra land use and supports local growers.',
  },
  {
    id: 2,
    icon: '🏭',
    title: 'Bagasse Extraction',
    tag: 'Processing',
    description:
      'Moisture-controlled fibre is separated and prepared for moulding without any added chemicals or binders.',
    facts: ['45–50% moisture', '10–30mm fibre', 'zero chemicals'],
    bg: '#FFF8E1',
    border: '#F9A825',
    ecoInsight:
      'Preserving the natural fibre ensures strong, compostable tableware without synthetic additives.',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Heat Press Moulding',
    tag: 'Manufacturing',
    description:
      'Steam and pressure form bagasse into sturdy plates, bowls and compartment tableware in a single clean process.',
    facts: ['180–220°C', 'hydraulic pressure', 'zero binders', '15 SKUs formed'],
    bg: '#FEE8E0',
    border: '#E64A19',
    products: ['Round Plates', 'Bowls', 'Compartment', 'Special Range'],
    ecoInsight:
      'The moulding process fuses natural fibres into strong tableware without plastic or chemical coatings.',
  },
  {
    id: 4,
    icon: '✅',
    title: 'Quality Check & Packing',
    tag: 'QC',
    description:
      'Every batch is inspected for food-grade safety, leak protection, and microwave-ready performance.',
    facts: ['Food-grade certified', 'oil + water leak tested', 'microwave safe', 'SUP-ban compliant'],
    bg: '#E8F0FE',
    border: '#3F51B5',
    ecoInsight:
      'Strict quality control means every plate can be trusted for restaurants, caterers and events.',
  },
  {
    id: 5,
    icon: '🚚',
    title: 'Delivery Across India',
    tag: 'Logistics',
    description:
      'Products are shipped across India with minimum one box per SKU and reliable delivery support.',
    facts: ['Min 1 box/SKU', 'Pan India delivery available', 'order details on enquiry'],
    bg: '#E0F7FA',
    border: '#00ACC1',
    ecoInsight:
      'National delivery keeps lead times predictable while reducing extra transport and handling waste.',
  },
  {
    id: 6,
    icon: '🍛',
    title: 'On Your Table',
    tag: 'In Use',
    description:
      'Bagasse tableware performs reliably under hot food, staying free of BPA, styrene and plastic residues.',
    facts: ['Up to 120°C safe', 'zero BPA/styrene', 'zero microplastics'],
    bg: '#FCE4EC',
    border: '#E91E63',
    ecoInsight:
      'This tableware is engineered for real restaurant use while staying fully compostable after use.',
  },
  {
    id: 7,
    icon: '♻️',
    title: 'Back to Earth',
    tag: 'Biodegradation',
    description:
      'The plate returns to soil cleanly, completing a circular lifecycle without toxic microplastic residue.',
    facts: ['Day 1–30 breakdown', 'Day 30–90 half decomposed', 'Day 90–150 fully composted', '0 microplastics'],
    bg: '#E8F5E0',
    border: '#388E3C',
    ecoInsight:
      'Composting restores natural material back to the earth and closes the circular product lifecycle.',
  },
]

const stageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const factListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const factItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export default function LifecycleExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = stages[activeIndex]
  const prefersReducedMotion = useReducedMotion()
  const progress = ((activeIndex + 1) / stages.length) * 100

  return (
    <section className="bg-[#F7FAF6] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="no-scrollbar flex items-center gap-4 overflow-x-auto px-2 py-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white text-2xl shadow-sm transition-all focus:outline-none"
                  style={{
                    borderColor: index === activeIndex ? stage.border : '#CBD5E1',
                    boxShadow: index === activeIndex ? `0 0 0 8px ${stage.border}20` : undefined,
                  }}
                >
                  <motion.span
                    animate={
                      index === activeIndex && !prefersReducedMotion
                        ? { scale: [1, 1.08, 1] }
                        : undefined
                    }
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: index === activeIndex ? `${stage.border}20` : 'transparent' }}
                  />
                  <span className="relative text-2xl">{stage.icon}</span>
                </button>

                <div className="hidden min-w-[10rem] flex-col gap-1 md:flex">
                  <span className="text-sm font-semibold text-slate-800">{stage.title}</span>
                  <Badge className="bg-slate-100 text-slate-700 border-transparent">{stage.tag}</Badge>
                </div>

                {index < stages.length - 1 ? (
                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[2px] w-full rounded-full bg-slate-200" />
                    </div>
                    <motion.div
                      className="absolute left-0 top-0 h-[2px] rounded-full bg-[#6AB04C]"
                      initial={false}
                      animate={{ width: index < activeIndex ? '100%' : index === activeIndex ? '35%' : '0%' }}
                      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                    />
                    {index === activeIndex && !prefersReducedMotion ? (
                      <motion.span
                        className="absolute left-[calc(35%-8px)] top-[-5px] block h-3 w-3 rounded-full bg-[#6AB04C]"
                        animate={{ x: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-6 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="flex-shrink-0">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 bg-white text-5xl shadow-sm"
                    style={{ borderColor: activeStage.border }}
                  >
                    {activeStage.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 border-transparent">
                      {activeStage.tag}
                    </Badge>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                      Stage {activeStage.id} of {stages.length}
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                    {activeStage.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                    {activeStage.description}
                  </p>

                  <motion.div
                    className="mt-6 grid gap-3 sm:grid-cols-2"
                    variants={factListVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {activeStage.facts.map((fact) => (
                      <motion.div
                        key={fact}
                        variants={factItemVariants}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800"
                      >
                        {fact}
                      </motion.div>
                    ))}
                  </motion.div>

                  {activeStage.products ? (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {activeStage.products.map((product) => (
                        <div
                          key={product}
                          className="rounded-3xl border border-slate-200 bg-[#FFF5F1] p-4 text-sm font-semibold text-slate-900"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Journey progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className="h-full rounded-full bg-[#6AB04C]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 110, damping: 18 }}
                  />
                </div>
              </div>

              <div className="mt-8 rounded-[28px] bg-[#E8F5E0] p-6 text-slate-800">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#386C37]">Eco insight</p>
                <p className="mt-3 text-base leading-7">{activeStage.ecoInsight}</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                  message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware lifecycle and order process."
                  label="Chat on WhatsApp"
                  className="w-full sm:w-auto"
                />
                <p className="text-sm text-slate-600">
                  Connect directly for production, delivery, and order details.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex ? 'bg-[#1B4D2E]' : 'bg-slate-300'
              }`}
              aria-label={`Go to stage ${stage.id}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
