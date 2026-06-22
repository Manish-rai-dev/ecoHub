import type { Product } from '@/lib/products'

export const WA_NUMBER = '919452936267'

export function waProductEnquiry(product: Product): string {
  const price = product.pricePerPc
    ? `₹${product.pricePerPc.toFixed(2)}/pc`
    : 'price on request'
  const boxTotal = product.pricePerPc
    ? ` (box of ${product.pcsPerBox} = ₹${(product.pricePerPc * product.pcsPerBox).toLocaleString('en-IN')})`
    : ''
  const msg =
    `Hi! I am interested in ordering *${product.displayName}*\n` +
    `• Grammage: ${product.grammage}\n` +
    `• Pack: ${product.pcsPerBox} pcs/box (${product.pcsPerPack} pcs/pack)\n` +
    `• Price: ${price}${boxTotal}\n\n` +
    `Please confirm stock availability and share delivery details for my location.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waGeneral(msg: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waEnterprise(tier: string): string {
  const msg =
    `Hi! I am interested in the *${tier}* partnership with Yaha Mogi Ecohub LLP.\n` +
    `Please share pricing, minimum order terms and next steps.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
