'use client'

import { LayoutGrid, Soup, UtensilsCrossed } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  formatBoxTotal,
  formatPrice,
  getProductMoq,
  type Product,
} from '@/lib/products'
import { waProductEnquiry } from '@/lib/whatsapp'

const iconMap = {
  bowl: Soup,
  'tools-kitchen-2': UtensilsCrossed,
  'layout-grid': LayoutGrid,
} as const

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = iconMap[product.icon as keyof typeof iconMap] ?? UtensilsCrossed

  function handleEnquiry() {
    const url = waProductEnquiry({
      name: product.name,
      price: `${formatPrice(product.pricePerPc)}/pc`,
      moq: getProductMoq(product),
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="flex h-full flex-col border-brand-light bg-white shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light text-brand-primary">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <CardTitle className="text-lg text-brand-primary">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Weight:</span> {product.weight}
        </p>
        <p>
          <span className="font-medium text-foreground">Pcs/Box:</span>{' '}
          {product.pcsPerBox.toLocaleString('en-IN')}
        </p>
        <p className="text-base font-semibold text-brand-secondary">
          {formatPrice(product.pricePerPc)}/pc
        </p>
        <p>
          <span className="font-medium text-foreground">Box total:</span>{' '}
          <span className="font-semibold text-brand-primary">{formatBoxTotal(product)}</span>
        </p>
      </CardContent>
      <CardFooter>
        <button
          type="button"
          onClick={handleEnquiry}
          className="inline-flex w-full items-center justify-center rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp/90"
        >
          Enquire on WhatsApp
        </button>
      </CardFooter>
    </Card>
  )
}
