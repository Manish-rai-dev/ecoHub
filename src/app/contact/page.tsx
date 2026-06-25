import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import { company } from '@/lib/company'
import { waGeneral } from '@/lib/whatsapp'
import { Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us — Order Bagasse Tableware in Varanasi',
  description:
    'Contact Yaha Mogi Ecohub LLP for bagasse tableware orders. WhatsApp +91 9452936267, email yahamogiecohub@gmail.com. Located in Shivpur, Varanasi.',
}

const contactCards = [
  {
    title: 'Company',
    value: company.whatsapp,
    href: waGeneral('Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware.'),
    external: true,
  },
  {
    title: 'Raghav Pandey (Director)',
    value: company.directors[0].phone,
    href: `https://wa.me/${company.directors[0].wa}`,
    external: true,
  },
  {
    title: 'Ishwardatt Singh (Director)',
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
  {
    title: 'Instagram',
    value: company.instagram,
    href: company.instagramUrl,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-brand-text-on-green">
            Reach out for orders, bulk enquiries, or distributor partnerships. We respond fastest on
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-brand-primary">Get in Touch</h2>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="rounded-xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-xs font-medium text-muted-foreground">{card.title}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-primary">{card.value}</p>
                  </a>
                ))}
              </div>

              <div className="space-y-3 rounded-xl border bg-brand-light p-5 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span className="font-semibold text-brand-primary">{company.officeLabel ?? '🏢 Head Office'}</span>
                </div>
                <p>{company.address.full}</p>
                <p>
                  <span className="font-medium text-brand-primary">GSTIN:</span> {company.gstin}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppButton
                  message="Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware."
                  label="WhatsApp Us"
                />
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-brand-primary px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-light"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>

              <div className="mt-8 rounded-3xl border border-brand-secondary/20 bg-white shadow-sm">
                <div className="flex flex-col gap-2 rounded-t-3xl border-b border-brand-secondary/20 bg-brand-light px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                    <span>📍 Find Us Here</span>
                    <a
                      href="https://www.google.com/maps?q=25.411687,82.884748"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-secondary underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">Latitude: 25.411687°, Longitude: 82.884748°</p>
                </div>
                <div className="h-[220px] overflow-hidden rounded-b-3xl md:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps?q=25.411687,82.884748&z=16&output=embed"
                    title="Yaha Mogi Ecohub Head Office location"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-brand-primary">Send an Enquiry</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
