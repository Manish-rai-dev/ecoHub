import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StickyHeader from '@/components/StickyHeader'
import Footer from '@/components/Footer'
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
    images: ['/YM_ecohub_logo.jpeg'],
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
