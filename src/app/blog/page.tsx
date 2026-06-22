import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Eco Tableware Insights',
  description:
    'Articles on bagasse sustainability, restaurant cost savings, and India\'s single-use plastic ban from Yaha Mogi Ecohub LLP.',
}

const posts = [
  {
    slug: 'bagasse-burned-india',
    title: "Why 90% of India's bagasse gets burned — and what we're doing about it",
    category: 'Sustainability',
    excerpt:
      'Every year, millions of tonnes of sugarcane bagasse are incinerated across India. Here is how Yaha Mogi Ecohub is turning that waste into tableware.',
  },
  {
    slug: 'cloud-kitchen-savings',
    title: 'How switching to bagasse plates can save your cloud kitchen ₹18,000/year',
    category: 'For Restaurants',
    excerpt:
      'A practical breakdown of cost, compliance, and customer perception when you replace plastic with compostable bagasse.',
  },
  {
    slug: 'sup-ban-varanasi-2026',
    title: "India's single-use plastic ban: a guide for Varanasi restaurants in 2026",
    category: 'Policy',
    excerpt:
      'What the SUP ban means for dhabas, cloud kitchens, and caterers in Purvanchal — and how to stay compliant without breaking the bank.',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/"
            className="mb-4 inline-flex items-center text-sm text-brand-text-on-green hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            Sustainability insights, restaurant tips, and policy updates for the Purvanchal food
            industry.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <Badge className="mb-3 bg-brand-light text-brand-primary hover:bg-brand-light">
                {post.category}
              </Badge>
              <h2 className="text-xl font-semibold text-brand-primary">{post.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">Coming soon</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
