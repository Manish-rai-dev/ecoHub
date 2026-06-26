'use client'

import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

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
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D4EDDA] text-[#1B7A3E] text-xs font-semibold">
        ✓
      </span>
    )
  }

  if (result === 'partial') {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-semibold">
        •
      </span>
    )
  }

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FDECEA] text-[#C0392B] text-xs font-semibold">
      ✗
    </span>
  )
}

function ResultLabel({ result, label }: { result: Result; label: string }) {
  if (result === 'check') {
    return <span className="text-[12px] text-[#1B4D2E]">{label}</span>
  }

  if (result === 'partial') {
    return <span className="text-[12px] text-[#7A5C00]">{label}</span>
  }

  return <span className="text-[12px] text-[#7A1B1B]">{label}</span>
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
        <thead>
          <tr className="bg-white border-b-2 border-[#D8EBD8]">
            <th className="whitespace-nowrap px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.5px] text-[#1B4D2E] bg-white">
              Attribute
            </th>
            <th className="whitespace-nowrap px-5 py-4 text-center font-bold text-white bg-[#1B4D2E]">
              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5ED] text-[#1B7A3E]">
                  <Leaf className="h-4 w-4" />
                </span>
                <span>Compostable Bagasse Plates</span>
              </div>
            </th>
            <th className="whitespace-nowrap px-5 py-4 text-center font-medium text-[#4A5568] bg-[#F5F5F2]">
              Paper Plates
            </th>
            <th className="whitespace-nowrap px-5 py-4 text-center font-medium text-[#4A5568] bg-[#F5F5F2]">
              Foam Plates
            </th>
            <th className="whitespace-nowrap px-5 py-4 text-center font-medium text-[#4A5568] bg-[#F5F5F2]">
              Plastic Plates
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <motion.tr
              key={row.attribute}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'} hover:bg-[#EAF5ED]`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <td className="whitespace-nowrap border-r border-[#E8EEE8] px-5 py-4 text-left font-semibold text-[#1B4D2E] text-sm">
                {row.attribute}
              </td>
              <td
                className={`px-5 py-4 text-center font-semibold text-[#1B4D2E] bg-[#EAF5ED] border-l-2 border-r-2 border-[#3DAF5C] ${
                  index === rows.length - 1 ? 'rounded-bl-[12px] rounded-br-[12px] border-b-2 border-[#3DAF5C]' : ''
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <ResultIcon result={row.bagasse.result} />
                  <ResultLabel result={row.bagasse.result} label={row.bagasse.value} />
                </div>
              </td>
              <td className="px-5 py-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <ResultIcon result={row.paper.result} />
                  <ResultLabel result={row.paper.result} label={row.paper.value} />
                </div>
              </td>
              <td className="px-5 py-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <ResultIcon result={row.foam.result} />
                  <ResultLabel result={row.foam.result} label={row.foam.value} />
                </div>
              </td>
              <td className="px-5 py-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <ResultIcon result={row.plastic.result} />
                  <ResultLabel result={row.plastic.result} label={row.plastic.value} />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
