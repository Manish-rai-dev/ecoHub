'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const items = [
  '🛡️ Food-Grade Certified',
  '🌿 Zero Microplastics',
  '🚫 Plastic-Free',
  '🔥 Microwave Safe',
  '❄️ Freezer Safe',
  '💧 Leak Resistant',
  '♻️ Compostable',
  '📜 SUP-Ban Compliant (India)',
  '🏭 Direct from Manufacturer',
  '✅ Quote on enquiry',
  '🌾 Made from Sugarcane Bagasse',
]

const tickerContent = items.join('  |  ')

export default function TrustTicker() {
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

  return (
    <motion.div
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden border-y border-[#c0dd97] bg-brand-light"
    >
      <div className="h-9">
        <div className="marquee-inner-slow flex h-full items-center">
          <span className="px-4 text-xs font-medium text-brand-primary">{tickerContent}</span>
          <span className="px-4 text-xs font-medium text-brand-primary" aria-hidden>
            {tickerContent}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
