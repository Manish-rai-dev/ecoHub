import type { Product } from '@/lib/products'
import { company } from '@/lib/company'
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/seo'

export type BreadcrumbItem = {
  name: string
  path: string
}

export type FaqItem = {
  question: string
  answer: string
}

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['Yaha Mogi', 'YahaMogi', 'Yaha Mogi EcoHub'],
    description:
      'India-based supplier of biodegradable sugarcane bagasse plates, bowls, compartment plates and meal trays for bulk, wholesale and institutional orders.',
    url: SITE_URL,
    logo: absoluteUrl('/YM_ecohub_logo.jpeg'),
    email: company.email,
    telephone: company.whatsapp.replace(/\s/g, ''),
    taxID: company.gstin,
    sameAs: [company.instagramUrl],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Sugarcane bagasse tableware',
      'Biodegradable disposable plates',
      'Compostable food-service tableware',
      'Compartment plates and meal trays',
      'Bulk and wholesale tableware supply',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Biodegradable Bagasse Tableware',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Bagasse Bowls',
          url: absoluteUrl('/products?cat=bowls'),
        },
        {
          '@type': 'OfferCatalog',
          name: 'Plain Bagasse Plates',
          url: absoluteUrl('/products?cat=plates'),
        },
        {
          '@type': 'OfferCatalog',
          name: 'Compartment Plates and Meal Trays',
          url: absoluteUrl('/products?cat=compartment'),
        },
        {
          '@type': 'OfferCatalog',
          name: 'Special Bagasse Serveware',
          url: absoluteUrl('/products?cat=special'),
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.whatsapp.replace(/\s/g, ''),
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      'Bagasse tableware supplier serving bulk buyers, restaurants, caterers, cloud kitchens, institutions and distributors across India.',
    image: absoluteUrl('/YM_ecohub_logo.jpeg'),
    url: SITE_URL,
    telephone: company.whatsapp.replace(/\s/g, ''),
    email: company.email,
    priceRange: 'Quote on enquiry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.line,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.411687,
      longitude: 82.884748,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function productSchema(product: Product, path: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${absoluteUrl(path)}#product`,
    name: product.displayName,
    description: product.description,
    image: [absoluteUrl(product.image)],
    url: absoluteUrl(path),
    sku: `YM-${String(product.id).padStart(3, '0')}`,
    material: 'Sugarcane bagasse fibre',
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Yaha Mogi Ecohub',
    },
    manufacturer: {
      '@id': `${SITE_URL}/#organization`,
    },
    additionalProperty: [
      ...product.details.map((detail) => ({
        '@type': 'PropertyValue',
        name: detail.label,
        value: detail.value,
      })),
      ...(product.grammage
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Grammage',
              value: product.grammage,
            },
          ]
        : []),
    ],
  }
}

type ArticleSchemaInput = {
  title: string
  description: string
  path: string
  image: string
  publishedAt: string
  updatedAt: string
}

export function articleSchema({
  title,
  description,
  path,
  image,
  publishedAt,
  updatedAt,
}: ArticleSchemaInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    image: [absoluteUrl(image)],
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}
