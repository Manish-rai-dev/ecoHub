'use client'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import type { Product } from '@/lib/products'
import { categoryLabels } from '@/lib/products'
import { waProductEnquiry } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
  selectionMode?: boolean
  selected?: boolean
  onToggleSelect?: (product: Product) => void
}

export default function ProductCard({
  product,
  onViewDetails,
  selectionMode = false,
  selected = false,
  onToggleSelect,
}: ProductCardProps) {
  const summary = [
    ...product.details.map((detail) => detail.value),
    product.grammage,
    product.pcsPerBox ? `${product.pcsPerBox.toLocaleString('en-IN')} pcs/box` : undefined,
  ].filter(Boolean)

  function handleCardClick(e: React.MouseEvent) {
    if (!selectionMode || !onToggleSelect) return
    const target = e.target as HTMLElement
    if (target.closest('button, a')) return
    onToggleSelect(product)
  }

  function handleCheckboxChange() {
    onToggleSelect?.(product)
  }

  return (
    <article
      onClick={handleCardClick}
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md',
        selectionMode && selected
          ? 'border-2 border-brand-primary bg-brand-light'
          : 'border-brand-light',
        selectionMode && 'cursor-pointer',
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-brand-cream">
        <div className="absolute inset-3 sm:inset-4">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) calc(100vw - 56px), (max-width: 1024px) 45vw, 30vw"
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[13px] font-medium text-brand-primary">{product.displayName}</h3>
            <Badge className="rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-semibold text-brand-primary">
              {categoryLabels[product.category]}
            </Badge>
            {product.badge && (
              <Badge className="bg-brand-orange px-2 py-0.5 text-[9px] font-semibold text-white hover:bg-brand-orange">
                {product.badge}
              </Badge>
            )}
          </div>
          {selectionMode && (
            <label className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center">
              <input
                type="checkbox"
                checked={selected}
                onChange={handleCheckboxChange}
                onClick={(event) => event.stopPropagation()}
                className="peer sr-only"
                aria-label={`Select ${product.displayName}`}
              />
              <span
                className={cn(
                  'flex h-5 w-5 items-center justify-center rounded border-2 bg-white transition-colors',
                  selected
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-secondary',
                )}
              >
                {selected && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
            </label>
          )}
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{summary.join(' · ')}</p>
        <p className="text-sm italic text-brand-secondary">
          Quote on enquiry — WhatsApp us for a quote.
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              onViewDetails(product)
            }}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'default' }),
              'w-full border-brand-primary text-brand-primary hover:bg-brand-light',
            )}
          >
            View Details
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={waProductEnquiry(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={cn(buttonVariants({ size: 'default' }), 'w-full bg-wa text-white hover:bg-wa/90')}
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </article>
  )
}
