const announcementText =
  'Free delivery across Varanasi & Purvanchal  ·  All prices GST & FOR inclusive  ·  100% Biodegradable in 90–150 days  ·  15 SKUs available  ·  WhatsApp: +91 9452936267  ·  Minimum 1 box per SKU  ·  Bulk & distributor orders welcome'

export default function AnnouncementBar() {
  return (
    <div className="h-8 overflow-hidden bg-brand-accent">
      <div className="flex h-full items-center">
        <div className="marquee-inner flex">
          <span className="px-4 text-xs font-medium text-brand-primary">{announcementText}</span>
          <span className="px-4 text-xs font-medium text-brand-primary" aria-hidden>
            {announcementText}
          </span>
        </div>
      </div>
    </div>
  )
}
