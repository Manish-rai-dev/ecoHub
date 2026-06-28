import type { Product } from '@/lib/products'

export const WA_NUMBER = '919452936267'

export function waProductEnquiry(product: Product): string {
  const details = product.details.map((detail) => `• ${detail.label}: ${detail.value}`)
  if (product.grammage) details.push(`• Grammage: ${product.grammage}`)
  if (product.pcsPerBox) details.push(`• Box quantity: ${product.pcsPerBox} pcs`)
  if (product.pcsPerPack) details.push(`• Pack size: ${product.pcsPerPack} pcs`)

  const msg =
    `Hi! I am interested in ordering *${product.displayName}*\n` +
    `${details.join('\n')}\n\n` +
    `Please share a quote, stock availability and delivery details for my location.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waMultiProductEnquiry(selected: Product[]): string {
  const lines = selected.map(
    (product, index) =>
      `${index + 1}. *${product.displayName}* — ${product.details
        .map((detail) => detail.value)
        .join(', ')}`,
  ).join('\n')
  const msg =
    `Hi! I would like to enquire about the following products from Yaha Mogi Ecohub LLP:\n\n` +
    `${lines}\n\n` +
    `Please share a quote, availability and delivery details for my location.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waGeneral(msg: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waEnterprise(tier: string): string {
  const msg =
    `Hi! I am interested in the *${tier}* partnership with Yaha Mogi Ecohub LLP.\n` +
    `Please share minimum order terms, delivery and next steps.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
