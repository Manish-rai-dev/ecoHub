'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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
    <Link href="/" className="flex items-center gap-3">
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5ECD7]/15 p-2 shadow-lg shadow-black/10"
      >
        <Image
          src="/logo-ecohub-dark.png"
          alt="Yaha Mogi Ecohub LLP logo"
          width={56}
          height={56}
          className="h-12 w-auto"
          priority
        />
      </motion.div>
      <div className="min-w-[12rem]">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F5ECD7]">Ecohub</p>
        <p className="mt-1 text-xs text-[#A8D5A2]">Eco-Friendly Bagasse Tableware</p>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('?')[0])
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transform border-b border-[#F5ECD7]/15 bg-[#1B4D2E]/95 backdrop-blur-sm text-white shadow-black/20 shadow-md transition-transform duration-300 ease-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border border-transparent bg-[#1F5935] px-3 py-2 text-sm font-semibold transition-all duration-200',
                      isActive(link.href)
                        ? 'border-[#F5ECD7] text-white shadow-inner shadow-black/10'
                        : 'text-[#E8F5E9] hover:bg-white/10 hover:text-white',
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-2xl border border-white/10 bg-[#1B4D2E] py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2 text-sm text-[#E8F5E9] transition hover:bg-white/10 hover:text-white"
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
                  'rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200',
                  isActive(link.href)
                    ? 'bg-[#234e36] text-white shadow-inner shadow-black/10'
                    : 'text-[#E8F5E9] hover:bg-white/10 hover:text-white',
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
              'hidden rounded-full bg-[#F5ECD7] px-4 py-2 text-sm font-semibold text-[#1B4D2E] shadow-sm shadow-black/10 hover:bg-[#ffffffcc] lg:inline-flex',
            )}
          >
            Enquire Now
          </Link>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#1B4D2E] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setProductsOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                      <ChevronDown className={cn('h-4 w-4 transition-transform', productsOpen && 'rotate-180')} />
                    </button>
                    {productsOpen && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
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
                    'rounded-md px-3 py-3 text-sm font-medium transition-all duration-200',
                    isActive(link.href)
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
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
                'mt-2 rounded-full bg-[#F5ECD7] px-4 py-2 text-sm font-semibold text-[#1B4D2E] shadow-sm shadow-black/10 hover:bg-[#ffffffcc]',
              )}
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
