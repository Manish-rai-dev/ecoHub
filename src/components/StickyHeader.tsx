'use client'

import { useEffect, useRef, useState } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import TrustTicker from './TrustTicker'

export default function StickyHeader() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        if (currentScrollY < 80) {
          setVisible(true)
        } else if (currentScrollY > lastScrollY.current + 8) {
          setVisible(false)
        } else if (currentScrollY < lastScrollY.current - 4) {
          setVisible(true)
        }

        lastScrollY.current = currentScrollY
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    >
      <AnnouncementBar />
      <Navbar />
      <TrustTicker />
    </div>
  )
}
