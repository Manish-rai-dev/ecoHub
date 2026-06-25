import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnnouncementBar from '@/components/AnnouncementBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrustTicker from '@/components/TrustTicker'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yahamogiecohub.com'),
  title: {
    default: 'Yaha Mogi Ecohub LLP | Bagasse Tableware | Made in India',
    template: '%s | Yaha Mogi Ecohub',
  },
  description:
    'Premium 100% biodegradable sugarcane bagasse plates and bowls sourced from trusted manufacturers across India. 15 SKUs — 150ML bowl to 12" 4CP plate. GST & FOR inclusive. Enquire for a quote. Serving restaurants, cloud kitchens and caterers nationwide.',
  keywords: [
    'bagasse plates India',
    'eco tableware India',
    'biodegradable plates wholesale India',
    'sugarcane tableware',
    'cloud kitchen plates India',
    'eco tableware India',
    'single use plastic alternative India',
    'bagasse bowls 2026',
  ],
  openGraph: {
    title: 'Yaha Mogi Ecohub LLP | Bagasse Tableware | Made in India',
    description:
      'Premium 100% biodegradable sugarcane bagasse plates and bowls sourced from trusted manufacturers across India. 15 SKUs. GST & FOR inclusive. Enquire for a quote.',
    images: ['/logo-ecohub.png'],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <div className="sticky top-0 z-50">
          <AnnouncementBar />
          <Navbar />
          <TrustTicker />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
