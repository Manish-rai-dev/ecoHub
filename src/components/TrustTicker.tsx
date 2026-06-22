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
  '💰 GST Inclusive Pricing',
  '🌾 Made from Sugarcane Bagasse',
]

const tickerContent = items.join('  |  ')

export default function TrustTicker() {
  return (
    <div className="h-9 overflow-hidden border-y border-brand-secondary/30 bg-brand-light">
      <div className="flex h-full items-center">
        <div className="marquee-inner-slow flex">
          <span className="px-4 text-xs font-medium text-brand-primary">{tickerContent}</span>
          <span className="px-4 text-xs font-medium text-brand-primary" aria-hidden>
            {tickerContent}
          </span>
        </div>
      </div>
    </div>
  )
}
