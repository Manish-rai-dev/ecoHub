import {
  Droplets,
  Leaf,
  Microwave,
  ShieldCheck,
  Snowflake,
  Utensils,
} from 'lucide-react'

const badges = [
  { icon: Leaf, label: 'Biodegradable' },
  { icon: ShieldCheck, label: 'Compostable' },
  { icon: Microwave, label: 'Microwave Safe' },
  { icon: Snowflake, label: 'Freezer Safe' },
  { icon: Utensils, label: 'Food Grade' },
  { icon: Droplets, label: 'Leak Resistant' },
]

export default function TrustBadges() {
  return (
    <section className="bg-brand-light py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-6 md:px-6">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-lg bg-white/70 px-3 py-4 text-center shadow-sm"
          >
            <Icon className="h-6 w-6 text-brand-secondary" aria-hidden />
            <span className="text-xs font-semibold text-brand-primary sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
