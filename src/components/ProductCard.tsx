'use client'

import ProductIllustration from '@/components/ProductIllustration'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import type { Product } from '@/lib/products'
import { waProductEnquiry } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

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
      <div className="relative flex h-[120px] items-center justify-center bg-brand-cream">
        {selectionMode && (
          <label className="absolute left-2 top-2 z-10 flex h-6 w-6 cursor-pointer items-center justify-center">
            <input
              type="checkbox"
              checked={selected}
              onChange={handleCheckboxChange}
              onClick={(e) => e.stopPropagation()}
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
        {product.badge && (
          <Badge className="absolute right-2 top-2 bg-brand-orange px-2 py-0.5 text-[8px] font-semibold text-white hover:bg-brand-orange">
            {product.badge}
          </Badge>
        )}
        <ProductIllustration shape={product.shape} size="sm" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-[13px] font-medium text-brand-primary">{product.displayName}</h3>
        <p className="text-xs text-muted-foreground">
          {product.grammage} · {product.pcsPerBox.toLocaleString('en-IN')} pcs/box · Pack of{' '}
          {product.pcsPerPack}
        </p>
        <p className="text-sm italic text-brand-secondary">Enquire for price →</p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <button
            type="button"
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
          </button>
          <a
            href={waProductEnquiry(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={cn(buttonVariants({ size: 'default' }), 'w-full bg-wa text-white hover:bg-wa/90')}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
