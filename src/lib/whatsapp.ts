import type { Product } from '@/lib/products'

export const WA_NUMBER = '919452936267'

export function waProductEnquiry(product: Product): string {
  const msg =
    `Hi! I am interested in ordering *${product.displayName}*\n` +
    `• Grammage: ${product.grammage}\n` +
    `• Pack: ${product.pcsPerBox} pcs/box (${product.pcsPerPack} pcs/pack)\n\n` +
    `Please share pricing, stock availability and delivery details for my location.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waMultiProductEnquiry(selected: Product[]): string {
  const lines = selected.map(
    (p, i) => `${i + 1}. *${p.displayName}* — ${p.grammage} — ${p.pcsPerBox} pcs/box`,
  ).join('\n')
  const msg =
    `Hi! I would like to enquire about the following products from Yaha Mogi Ecohub LLP:\n\n` +
    `${lines}\n\n` +
    `Please share pricing, availability and delivery details for my location.`
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
