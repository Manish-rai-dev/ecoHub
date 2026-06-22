'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useEffect } from 'react'
import ProductIllustration from '@/components/ProductIllustration'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { categoryLabels, formatBoxTotal, type Product } from '@/lib/products'
import { waProductEnquiry } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  const boxTotal = product ? formatBoxTotal(product) : null

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ x: 480 }}
            animate={{ x: 0 }}
            exit={{ x: 480 }}
            transition={{ type: 'spring', damping: 28 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[480px] flex-col bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b bg-white px-5 py-4">
              <h2 id="product-modal-title" className="pr-10 text-xl font-semibold text-brand-primary">
                {product.displayName}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-brand-light hover:text-brand-primary"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-28">
              <div className="bg-brand-cream px-6 py-6 text-center">
                <div className="flex justify-center">
                  <ProductIllustration shape={product.shape} size="lg" />
                </div>
                {product.badge && (
                  <Badge className="mt-4 bg-brand-orange text-white hover:bg-brand-orange">
                    {product.badge}
                  </Badge>
                )}
              </div>

              <div className="space-y-1 px-5 py-4">
                {product.pricePerPc !== null ? (
                  <p className="text-2xl font-semibold text-brand-primary">
                    ₹{product.pricePerPc.toFixed(2)}/pc
                  </p>
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    Price on request — enquire via WhatsApp
                  </p>
                )}
                {boxTotal && (
                  <p className="text-sm text-muted-foreground">
                    Box of {product.pcsPerBox.toLocaleString('en-IN')} pcs = {boxTotal}
                  </p>
                )}
              </div>

              <div className="px-5 pb-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              </div>

              <div className="mx-5 mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-brand-light">
                {[
                  ['Grammage', product.grammage],
                  ['Pcs / Box', product.pcsPerBox.toLocaleString('en-IN')],
                  ['Pack size', `${product.pcsPerPack} pcs/pack`],
                  ['Min. order', '1 box'],
                  ['Category', categoryLabels[product.category]],
                  ['Box total', boxTotal ?? 'Enquire'],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={cn('grid grid-cols-1 gap-1 p-3', i % 2 === 0 ? 'bg-brand-light' : 'bg-white')}
                  >
                    <span className="text-xs font-medium text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-brand-primary">{value}</span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-4">
                <h3 className="mb-3 text-sm font-semibold text-brand-primary">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-5 pb-4">
                <h3 className="mb-2 text-sm font-semibold text-brand-primary">Perfect for</h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full bg-brand-light px-2 py-1 text-xs text-brand-primary"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <p className="px-5 pb-4 text-xs italic text-muted-foreground">
                All prices inclusive of GST &amp; FOR. Weight ±10% due to natural raw materials.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 space-y-2 border-t bg-white p-4">
              <a
                href={waProductEnquiry(product)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'default' }), 'w-full bg-wa text-white hover:bg-wa/90')}
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919452936267"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'default' }),
                  'w-full border-brand-primary text-brand-primary hover:bg-brand-light',
                )}
              >
                Call: +91 9452936267
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
