'use client'

import { MessageCircle } from 'lucide-react'
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors',
        variant === 'primary' && 'bg-whatsapp text-white hover:bg-whatsapp/90',
        variant === 'outline' &&
          'border-2 border-whatsapp bg-transparent text-white hover:bg-whatsapp/10',
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  )
}
