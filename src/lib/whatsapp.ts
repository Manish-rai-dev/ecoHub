export const WA_NUMBER = '919452936267'

export function waProductEnquiry(product: {
  name: string
  price: string
  moq: string
}) {
  const msg = `Hi! I am interested in ordering *${product.name}* at ${product.price} (${product.moq}). Please confirm availability and share delivery details for my location.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waGeneral(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function waEnterprise(tier: string) {
  const msg = `Hi! I am interested in the *${tier}* partnership with Yaha Mogi Ecohub LLP. Please share terms, pricing and next steps.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
