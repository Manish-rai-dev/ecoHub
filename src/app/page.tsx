import type { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Eco-Friendly Bagasse Tableware from India',
  description:
    'Premium biodegradable sugarcane bagasse plates, bowls, and serving trays from Yaha Mogi Ecohub LLP — 14 SKUs, Made in India, pan-India delivery.',
}

export default function HomePage() {
  return <HomePageClient />
}
