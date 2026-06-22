import WhatsAppButton from '@/components/WhatsAppButton'

interface WhatsAppCtaStripProps {
  title?: string
  subtitle?: string
  message?: string
}

export default function WhatsAppCtaStrip({
  title = 'Ready to switch from plastic?',
  subtitle = 'Get product specs, custom quotes, and delivery timelines — directly from our Varanasi team.',
  message = 'Hi! I would like to enquire about Yaha Mogi Ecohub bagasse tableware. Please share product details.',
}: WhatsAppCtaStripProps) {
  return (
    <section className="bg-brand-secondary py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-brand-text-on-green">{subtitle}</p>
        <WhatsAppButton message={message} label="Chat on WhatsApp" />
      </div>
    </section>
  )
}
