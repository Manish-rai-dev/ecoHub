'use client'

import { categoryLabels, products, type Category } from '@/lib/products'
import { cn } from '@/lib/utils'

const categoryOrder: Category[] = ['bowls', 'plates', 'compartment', 'special']
const OTHER_OPTION = 'Multiple / Other'

interface ProductMultiSelectProps {
  selected: string[]
  onChange: (selected: string[]) => void
}

export default function ProductMultiSelect({ selected, onChange }: ProductMultiSelectProps) {
  function toggleProduct(displayName: string) {
    onChange(
      selected.includes(displayName)
        ? selected.filter((name) => name !== displayName)
        : [...selected, displayName],
    )
  }

  function toggleCategory(category: Category) {
    const names = products.filter((p) => p.category === category).map((p) => p.displayName)
    const allSelected = names.every((name) => selected.includes(name))
    if (allSelected) {
      onChange(selected.filter((name) => !names.includes(name)))
    } else {
      onChange([...new Set([...selected, ...names])])
    }
  }

  function selectAll() {
    onChange([...products.map((p) => p.displayName), OTHER_OPTION])
  }

  function clearAll() {
    onChange([])
  }

  return (
    <div className="space-y-4 rounded-lg border bg-brand-light/50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-brand-primary">
          Select products ({selected.length} selected)
        </p>
        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={selectAll}
            className="font-medium text-brand-secondary hover:text-brand-primary"
          >
            Select all
          </button>
          <span className="text-muted-foreground">·</span>
          <button
            type="button"
            onClick={clearAll}
            className="font-medium text-muted-foreground hover:text-brand-primary"
          >
            Clear
          </button>
        </div>
      </div>

      {categoryOrder.map((category) => {
        const items = products.filter((p) => p.category === category)
        const categoryNames = items.map((p) => p.displayName)
        const allInCategory = categoryNames.every((name) => selected.includes(name))

        return (
          <div key={category}>
            <button
              type="button"
              onClick={() => toggleCategory(category)}
              className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-secondary hover:text-brand-primary"
            >
              {allInCategory ? '☑' : '☐'} {categoryLabels[category]}
            </button>
            <ul className="grid gap-2 sm:grid-cols-2">
              {items.map((product) => {
                const checked = selected.includes(product.displayName)
                return (
                  <li key={product.id}>
                    <label
                      className={cn(
                        'flex cursor-pointer items-start gap-2 rounded-md border bg-white p-2.5 text-sm transition-colors',
                        checked
                          ? 'border-brand-secondary bg-brand-light/80'
                          : 'border-transparent hover:border-brand-light',
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleProduct(product.displayName)}
                        className="mt-0.5 accent-brand-primary"
                      />
                      <span className="font-medium text-brand-primary">{product.displayName}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}

      <label
        className={cn(
          'flex cursor-pointer items-start gap-2 rounded-md border bg-white p-2.5 text-sm transition-colors',
          selected.includes(OTHER_OPTION)
            ? 'border-brand-secondary bg-brand-light/80'
            : 'border-transparent hover:border-brand-light',
        )}
      >
        <input
          type="checkbox"
          checked={selected.includes(OTHER_OPTION)}
          onChange={() => toggleProduct(OTHER_OPTION)}
          className="mt-0.5 accent-brand-primary"
        />
        <span className="font-medium text-brand-primary">{OTHER_OPTION}</span>
      </label>
    </div>
  )
}
