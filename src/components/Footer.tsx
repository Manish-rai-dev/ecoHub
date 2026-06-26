import Image from 'next/image'
import Link from 'next/link'
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

const productLinks = [
  { href: '/products?cat=bowls', label: 'Bowls' },
  { href: '/products?cat=plates', label: 'Round Plates' },
  { href: '/products?cat=compartment', label: 'Compartment Plates' },
  { href: '/products?cat=special', label: 'Special Range' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/lifecycle', label: 'Lifecycle' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-text-on-green">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/YM_ecohub_logo.jpeg"
              alt="Yaha Mogi Ecohub LLP"
              width={144}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
          <p className="text-sm italic">{company.tagline}</p>
          <p className="text-xs">GSTIN: {company.gstin}</p>
          <p className="text-sm">{company.officeLabel ?? '🏢 Head Office'}</p>
          <p className="text-sm">{company.address.full}</p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Products</h3>
          <ul className="space-y-2 text-sm">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link) => (
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
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${company.whatsapp.replace(/\s/g, '')}`} className="hover:text-brand-accent">
                {company.whatsapp}
              </a>
            </li>
            {company.directors.map((director) => (
              <li key={director.name}>
                {director.name}:{' '}
                <a href={`tel:${director.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent">
                  {director.phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-brand-accent">
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-accent"
              >
                <InstagramIcon className="h-4 w-4" />
                {company.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-secondary/50 py-4 text-center text-xs text-brand-text-on-green/80">
        © 2026 {company.name} · GSTIN {company.gstin} | Choose Nature, Choose Future 🌿
      </div>
    </footer>
  )
}
