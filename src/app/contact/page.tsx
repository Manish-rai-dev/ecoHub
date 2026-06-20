import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { waGeneral } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { Mail, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us — Order Bagasse Tableware in Varanasi',
  description:
    'Contact Yaha Mogi Ecohub LLP for bagasse tableware orders. WhatsApp +91 9452936267, email yahamogiecohub@gmail.com. Located in Shivpur, Varanasi.',
}

const contactCards = [
  {
    title: 'Company WhatsApp',
    value: company.whatsapp,
    href: waGeneral(
      'Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware. Please share product details and pricing.',
    ),
    external: true,
  },
  {
    title: 'Raghav Pandey',
    subtitle: 'Director',
    value: company.directors[0].phone,
    href: `https://wa.me/${company.directors[0].wa}`,
    external: true,
  },
  {
    title: 'Ishwardatt Singh',
    subtitle: 'Director',
    value: company.directors[1].phone,
    href: `https://wa.me/${company.directors[1].wa}`,
    external: true,
  },
  {
    title: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
    external: false,
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            Ready to order or have questions? Reach us on WhatsApp for the fastest response, or
            fill out the form below and we&apos;ll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-brand-primary">{card.title}</h3>
                {card.subtitle && (
                  <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                )}
                <p className="mt-2 text-sm font-medium text-brand-secondary">{card.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-xl border bg-brand-light p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
              <div>
                <h3 className="font-semibold text-brand-primary">Our Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">{company.address.full}</p>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-brand-secondary hover:text-brand-primary"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton
              message="Hi! I would like to place an order for Yaha Mogi Ecohub bagasse tableware. Please assist."
              label="Chat on WhatsApp"
              className="px-8 py-3 text-base"
            />
            <a
              href={`mailto:${company.email}`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'default' }),
                'border-brand-primary text-brand-primary',
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <section className="border-t bg-brand-light py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-brand-secondary" />
            <h2 className="text-2xl font-bold text-brand-primary">Send Us an Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we&apos;ll open WhatsApp with a pre-filled message. Your enquiry
              is also emailed to our team.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
