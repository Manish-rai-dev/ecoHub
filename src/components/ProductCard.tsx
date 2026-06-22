'use client'

import ProductIllustration from '@/components/ProductIllustration'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { formatBoxTotal, type Product } from '@/lib/products'
import { waProductEnquiry } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const boxTotal = formatBoxTotal(product)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-light bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex h-[120px] items-center justify-center bg-brand-cream">
        {product.badge && (
          <Badge className="absolute left-2 top-2 bg-brand-orange px-2 py-0.5 text-[8px] font-semibold text-white hover:bg-brand-orange">
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

        {product.pricePerPc !== null ? (
          <p className="text-lg font-semibold text-brand-primary">
            ₹{product.pricePerPc.toFixed(2)}/pc
          </p>
        ) : (
          <p className="text-sm italic text-muted-foreground">Enquire for price</p>
        )}

        {boxTotal && (
          <p className="text-xs text-muted-foreground">Box total: {boxTotal}</p>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
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
            className={cn(buttonVariants({ size: 'default' }), 'w-full bg-wa text-white hover:bg-wa/90')}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
