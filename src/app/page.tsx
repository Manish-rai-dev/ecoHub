import HomePageClient from '@/components/HomePageClient'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/structured-data'

export const metadata = buildMetadata({
  title: 'Bagasse Plates Supplier India | Yaha Mogi Ecohub',
  description:
    'Buy biodegradable sugarcane bagasse plates, bowls and compartment meal trays in bulk. Yaha Mogi supplies restaurants, caterers, cloud kitchens and distributors across India.',
  path: '/',
  keywords: [
    'buy bagasse plates online India',
    'biodegradable plates bulk order India',
    'bagasse tableware supplier near me',
    'eco-friendly disposable plates supplier',
  ],
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
      <HomePageClient />
    </>
  )
}
