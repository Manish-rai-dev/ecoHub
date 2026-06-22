import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

type Shape = Product['shape']
type Size = 'sm' | 'md' | 'lg'

const sizeMap: Record<Size, number> = { sm: 48, md: 80, lg: 140 }

interface ProductIllustrationProps {
  shape: Shape
  size?: Size
  className?: string
}

function BowlSm() {
  return (
    <svg viewBox="0 0 100 60" aria-hidden>
      <ellipse cx="50" cy="45" rx="44" ry="14" fill="#c4a96b" opacity="0.4" />
      <path
        d="M8,28 Q8,52 50,52 Q92,52 92,28 Q92,12 50,12 Q8,12 8,28Z"
        fill="#f5eed8"
        stroke="#c4a96b"
        strokeWidth="1.5"
      />
      <ellipse cx="50" cy="28" rx="42" ry="10" fill="none" stroke="#c4a96b" strokeWidth="1" />
    </svg>
  )
}

function BowlMd() {
  return (
    <svg viewBox="0 0 100 60" aria-hidden>
      <ellipse cx="50" cy="45" rx="44" ry="14" fill="#c4a96b" opacity="0.4" />
      <path
        d="M6,26 Q6,56 50,56 Q94,56 94,26 Q94,8 50,8 Q6,8 6,26Z"
        fill="#f5eed8"
        stroke="#c4a96b"
        strokeWidth="1.5"
      />
      <ellipse cx="50" cy="26" rx="42" ry="10" fill="none" stroke="#c4a96b" strokeWidth="1" />
    </svg>
  )
}

function BowlLg() {
  return (
    <svg viewBox="0 0 100 60" aria-hidden>
      <ellipse cx="50" cy="46" rx="44" ry="14" fill="#c4a96b" opacity="0.4" />
      <path
        d="M4,24 Q4,58 50,58 Q96,58 96,24 Q96,4 50,4 Q4,4 4,24Z"
        fill="#f5eed8"
        stroke="#c4a96b"
        strokeWidth="1.5"
      />
      <ellipse cx="50" cy="24" rx="42" ry="10" fill="none" stroke="#c4a96b" strokeWidth="1" />
    </svg>
  )
}

function PlateRound() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden>
      <ellipse cx="50" cy="54" rx="44" ry="8" fill="#c4a96b" opacity="0.3" />
      <circle cx="50" cy="48" r="44" fill="#f5eed8" stroke="#c4a96b" strokeWidth="1.5" />
      <circle cx="50" cy="48" r="36" fill="none" stroke="#c4a96b" strokeWidth="0.8" />
    </svg>
  )
}

function Plate3cpRect() {
  return (
    <svg viewBox="0 0 100 80" aria-hidden>
      <rect x="4" y="6" width="92" height="66" rx="8" fill="#f5eed8" stroke="#c4a96b" strokeWidth="1.5" />
      <line x1="36" y1="6" x2="36" y2="72" stroke="#c4a96b" strokeWidth="0.8" />
      <line x1="64" y1="6" x2="64" y2="72" stroke="#c4a96b" strokeWidth="0.8" />
      <rect x="4" y="72" width="92" height="6" rx="0" fill="#c4a96b" opacity="0.2" />
    </svg>
  )
}

function Plate3cpRound() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r="44" fill="#f5eed8" stroke="#c4a96b" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#c4a96b" strokeWidth="0.8" />
      <line x1="50" y1="14" x2="50" y2="86" stroke="#c4a96b" strokeWidth="0.8" />
      <line x1="18" y1="68" x2="82" y2="68" stroke="#c4a96b" strokeWidth="0.8" />
    </svg>
  )
}

function Plate4cpRound() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r="44" fill="#f5eed8" stroke="#c4a96b" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#c4a96b" strokeWidth="0.8" />
      <line x1="50" y1="14" x2="50" y2="86" stroke="#c4a96b" strokeWidth="0.8" />
      <line x1="14" y1="50" x2="86" y2="50" stroke="#c4a96b" strokeWidth="0.8" />
    </svg>
  )
}

function PlateSnack() {
  return (
    <svg viewBox="0 0 100 70" aria-hidden>
      <ellipse cx="50" cy="42" rx="44" ry="7" fill="#c4a96b" opacity="0.25" />
      <ellipse cx="50" cy="36" rx="44" ry="18" fill="#f5eed8" stroke="#c4a96b" strokeWidth="1.5" />
      <ellipse cx="50" cy="36" rx="36" ry="12" fill="none" stroke="#c4a96b" strokeWidth="0.8" />
    </svg>
  )
}

const shapeComponents: Record<Shape, () => React.ReactElement> = {
  'bowl-sm': BowlSm,
  'bowl-md': BowlMd,
  'bowl-lg': BowlLg,
  'plate-round': PlateRound,
  'plate-3cp-rect': Plate3cpRect,
  'plate-3cp-round': Plate3cpRound,
  'plate-4cp-round': Plate4cpRound,
  'plate-snack': PlateSnack,
}

export default function ProductIllustration({
  shape,
  size = 'sm',
  className,
}: ProductIllustrationProps) {
  const px = sizeMap[size]
  const ShapeSvg = shapeComponents[shape]

  return (
    <div className={cn('inline-flex items-center justify-center [&_svg]:h-full [&_svg]:w-full', className)} style={{ width: px, height: px }}>
      <ShapeSvg />
    </div>
  )
}
