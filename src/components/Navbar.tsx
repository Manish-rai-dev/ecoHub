'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/products',
    label: 'Products',
    children: [
      { href: '/products?cat=bowls', label: 'Bowls' },
      { href: '/products?cat=plates', label: 'Round Plates' },
      { href: '/products?cat=compartment', label: 'Compartment Plates' },
      { href: '/products?cat=special', label: 'Special Range' },
    ],
  },
  { href: '/lifecycle', label: 'Lifecycle' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src="/logo-light.png"
        alt="Yaha Mogi Ecohub LLP"
        width={160}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('?')[0])
  }

  return (
    <header className="border-b border-brand-secondary/50 bg-brand-primary shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive(link.href)
                        ? 'text-brand-accent'
                        : 'text-brand-text-on-green hover:text-white',
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-md border border-brand-secondary/30 bg-brand-dark py-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-text-on-green hover:bg-brand-secondary hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive(link.href)
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
              if (link.children) {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setProductsOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-brand-text-on-green hover:bg-brand-secondary hover:text-white"
                    >
                      {link.label}
                      <ChevronDown className={cn('h-4 w-4 transition-transform', productsOpen && 'rotate-180')} />
                    </button>
                    {productsOpen && (
                      <div className="ml-3 border-l border-brand-secondary/50 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-brand-text-on-green hover:bg-brand-secondary hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-sm font-medium transition-colors',
                    isActive(link.href)
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
