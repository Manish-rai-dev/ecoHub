'use client'

import { motion } from 'framer-motion'

const rows = [
  {
    attribute: 'Eco-Friendly',
    bagasse: { result: 'check', value: 'Yes' },
    paper: { result: 'partial', value: 'Partially' },
    foam: { result: 'x', value: 'No' },
    plastic: { result: 'x', value: 'No' },
  },
  {
    attribute: 'Water & Oil Proof',
    bagasse: { result: 'check', value: 'Yes' },
    paper: { result: 'x', value: 'Often not' },
    foam: { result: 'partial', value: 'Short-term' },
    plastic: { result: 'partial', value: 'Short-term' },
  },
  {
    attribute: 'Microwave Safe',
    bagasse: { result: 'check', value: 'Yes' },
    paper: { result: 'partial', value: 'Limited' },
    foam: { result: 'x', value: 'No' },
    plastic: { result: 'partial', value: 'Short-term' },
  },
  {
    attribute: 'Degradable',
    bagasse: { result: 'check', value: '90–150 Days' },
    paper: { result: 'partial', value: 'Varies' },
    foam: { result: 'x', value: '1000+ Years' },
    plastic: { result: 'x', value: '400–1000 Years' },
  },
  {
    attribute: 'Looks & Feel',
    bagasse: { result: 'check', value: 'Modern, sturdy' },
    paper: { result: 'partial', value: 'Flimsy' },
    foam: { result: 'x', value: 'Cheap feel' },
    plastic: { result: 'partial', value: 'Varies' },
  },
  {
    attribute: 'Food Safe (No Toxins)',
    bagasse: { result: 'check', value: 'Yes — certified' },
    paper: { result: 'partial', value: 'Check coating' },
    foam: { result: 'x', value: 'Leaches styrene' },
    plastic: { result: 'x', value: 'BPA risk when hot' },
  },
  {
    attribute: 'SUP-Ban Compliant',
    bagasse: { result: 'check', value: 'Yes ✓' },
    paper: { result: 'check', value: 'Yes ✓' },
    foam: { result: 'x', value: 'BANNED' },
    plastic: { result: 'x', value: 'BANNED' },
  },
] as const

type Result = 'check' | 'partial' | 'x'

function ResultIcon({ result }: { result: Result }) {
  if (result === 'check') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-xs text-white">
        ✓
      </span>
    )
  }
  if (result === 'partial') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-xs text-white">
        ○
      </span>
    )
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
      ✗
    </span>
  )
}

function BowlIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" className="inline-block" aria-hidden>
      <path
        d="M4 10 Q4 18 12 18 Q20 18 20 10 Q20 6 12 6 Q4 6 4 10Z"
        fill="#f5eed8"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

interface ComparisonTableProps {
  className?: string
}

export default function ComparisonTable({ className }: ComparisonTableProps) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-center text-3xl font-bold text-brand-primary">
        How Bagasse Compares
      </h2>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="p-3 text-left font-semibold">Attribute</th>
              <th className="bg-brand-light p-3 text-center font-semibold text-brand-primary">
                <span className="block whitespace-pre-line">
                  Compostable{'\n'}Bagasse Plates
                </span>
                <BowlIcon />
              </th>
              <th className="p-3 text-center font-semibold">Paper Plates</th>
              <th className="p-3 text-center font-semibold">Foam Plates</th>
              <th className="p-3 text-center font-semibold">Plastic Plates</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={row.attribute}
                className={index % 2 === 1 ? 'bg-muted/30' : ''}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <td className="bg-brand-primary p-3 font-semibold text-white">{row.attribute}</td>
                <td className="bg-brand-light p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <ResultIcon result={row.bagasse.result} />
                    <span className="text-xs text-brand-primary">{row.bagasse.value}</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <ResultIcon result={row.paper.result} />
                    <span className="text-xs">{row.paper.value}</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <ResultIcon result={row.foam.result} />
                    <span className="text-xs">{row.foam.value}</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <ResultIcon result={row.plastic.result} />
                    <span className="text-xs">{row.plastic.value}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
