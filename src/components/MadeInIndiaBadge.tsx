import { cn } from '@/lib/utils'

interface MadeInIndiaBadgeProps {
  className?: string
  size?: 'sm' | 'md'
}

export default function MadeInIndiaBadge({ className, size = 'sm' }: MadeInIndiaBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-brand-light font-semibold text-brand-primary',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs',
        className,
      )}
    >
      🇮🇳 Made in India
    </span>
  )
}
