'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { waGeneral } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  message: string
  label?: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function WhatsAppButton({
  message,
  label = 'WhatsApp Enquiry',
  variant = 'primary',
  className,
}: WhatsAppButtonProps) {
  const href = waGeneral(message)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors',
        variant === 'primary' && 'bg-wa text-white hover:bg-wa/90',
        variant === 'outline' &&
          'border-2 border-wa bg-transparent text-white hover:bg-wa/10',
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </motion.a>
  )
}

