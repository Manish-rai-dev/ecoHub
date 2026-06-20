import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company } from '@/lib/company'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/lifecycle', label: 'Lifecycle' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-text-on-green">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-secondary text-sm font-bold text-white">
              YM
            </div>
            <div>
              <p className="font-semibold text-white">{company.name}</p>
              <p className="text-sm">{company.tagline}</p>
            </div>
          </div>
          <p className="text-sm italic text-brand-accent">{company.motto}</p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${company.whatsapp.replace(/\s/g, '')}`} className="hover:text-brand-accent">
                {company.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-accent">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{company.address.full}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-accent"
          >
            <InstagramIcon className="h-4 w-4" />
            {company.instagram}
          </a>
          <p className="mt-6 text-xs text-brand-text-on-green/80">
            GSTIN: {company.gstin}
          </p>
        </div>
      </div>

      <div className="border-t border-brand-secondary/50 py-4 text-center text-xs text-brand-text-on-green/80">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
