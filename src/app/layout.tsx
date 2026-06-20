import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yahamogiecohub.com'),
  title: {
    default: 'Yaha Mogi Ecohub LLP | Eco-Friendly Bagasse Tableware Varanasi',
    template: '%s | Yaha Mogi Ecohub',
  },
  description:
    'Premium 100% biodegradable sugarcane bagasse plates and bowls in Varanasi. Direct from manufacturer — best prices, GST inclusive. Serving restaurants, cloud kitchens, caterers across Purvanchal.',
  keywords: [
    'bagasse plates Varanasi',
    'eco friendly tableware UP',
    'biodegradable plates wholesale India',
    'sugarcane tableware',
    'bagasse bowls',
    'cloud kitchen plates Varanasi',
    'sustainable disposable plates India',
    'Purvanchal eco tableware',
    'single use plastic alternative UP',
  ],
  openGraph: {
    title: 'Yaha Mogi Ecohub LLP | Eco-Friendly Bagasse Tableware Varanasi',
    description:
      'Premium 100% biodegradable sugarcane bagasse plates and bowls in Varanasi. Direct from manufacturer — best prices, GST inclusive.',
    images: ['/og-image.jpg'],
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
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
