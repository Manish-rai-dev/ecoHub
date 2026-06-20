'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { company } from '@/lib/company'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/lifecycle', label: 'Lifecycle' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/contact', label: 'Contact' },
]

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-secondary text-sm font-bold text-white">
        YM
      </div>
      {!compact && (
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-sm font-semibold leading-tight text-white md:text-base">
            {company.name}
          </p>
          <p className="truncate text-xs text-brand-text-on-green">{company.tagline}</p>
        </div>
      )}
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-secondary/50 bg-brand-primary shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-brand-accent'
                    : 'text-brand-text-on-green hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'default' }),
              'hidden bg-brand-accent font-semibold text-brand-primary hover:bg-brand-accent/90 sm:inline-flex',
            )}
          >
            Order Now
          </Link>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-brand-text-on-green hover:bg-brand-secondary lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-secondary/50 bg-brand-primary lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-sm font-medium transition-colors',
                    active
                      ? 'bg-brand-secondary text-brand-accent'
                      : 'text-brand-text-on-green hover:bg-brand-secondary hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: 'default' }),
                'mt-2 bg-brand-accent font-semibold text-brand-primary hover:bg-brand-accent/90',
              )}
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
