import type { Metadata } from 'next'

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yahamogiecohub.in'
).replace(/\/$/, '')

export const SITE_NAME = 'Yaha Mogi Ecohub LLP'
export const DEFAULT_OG_IMAGE = '/YM_ecohub_logo.jpeg'

export const coreKeywords = [
  'Yaha Mogi',
  'YahaMogi',
  'Yaha Mogi EcoHub',
  'bagasse plates',
  'bagasse bowls',
  'bagasse glasses',
  'bagasse food trays',
  'sugarcane bagasse plates',
  'biodegradable plates',
  'compostable plates',
  'eco-friendly disposable tableware',
  'plastic plate alternative',
  'paper plate alternative',
  'EcoSoul alternative',
  'bagasse plates wholesale',
  'bagasse plates manufacturer',
  'bagasse plates supplier',
] as const

export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

type SeoMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: readonly string[]
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Yaha Mogi Ecohub biodegradable bagasse tableware',
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: SeoMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  const robots: Metadata['robots'] = {
    index: !noIndex,
    follow: true,
    googleBot: {
      index: !noIndex,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }

  return {
    title,
    description,
    keywords: [...new Set([...coreKeywords, ...keywords])],
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      type,
      locale: 'en_IN',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1254,
          height: 1254,
          alt: imageAlt,
        },
      ],
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  }
}
