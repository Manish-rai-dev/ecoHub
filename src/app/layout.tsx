import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StickyHeader from '@/components/StickyHeader'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { coreKeywords, SITE_URL } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Yaha Mogi Ecohub LLP | Bagasse Plates Supplier India',
    template: '%s | Yaha Mogi Ecohub',
  },
  description:
    'Bulk supplier of biodegradable sugarcane bagasse plates, bowls, compartment plates and meal trays in India. Wholesale orders for restaurants, caterers, cloud kitchens and distributors.',
  keywords: [...coreKeywords],
  openGraph: {
    title: 'Yaha Mogi Ecohub LLP | Bagasse Plates Supplier India',
    description:
      'Biodegradable bagasse plates, bowls and compartment meal trays for wholesale and bulk orders across India.',
    images: ['/YM_ecohub_logo.jpeg'],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <StickyHeader />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
