'use client'

const ITEMS = [
  { icon: 'ti-truck-delivery',  text: 'Free delivery across Varanasi & Purvanchal' },
  { icon: 'ti-receipt-tax',     text: 'GST & FOR inclusive pricing' },
  { icon: 'ti-leaf',            text: '100% Biodegradable · 90–150 days' },
  { icon: 'ti-brand-whatsapp',  text: 'Order on WhatsApp: +91 9452936267' },
  { icon: 'ti-package',         text: '15 SKUs · Min. 1 box per SKU' },
  { icon: 'ti-star',            text: 'Starting ₹0.85/pc · No hidden charges' },
  { icon: 'ti-users',           text: 'Bulk & distributor orders welcome' },
]

export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: '#e8661a',
        height: '32px',
        overflow: 'hidden',
        width: '100%',
      }}
      aria-label="Announcement bar"
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', whiteSpace: 'nowrap' }}>
        {[0, 1].map((pass) => (
          <div
            key={pass}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              animation: 'announceTicker 32s linear infinite',
            }}
          >
            {ITEMS.map((item, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0 20px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.03em',
                }}
              >
                <i
                  className={`ti ${item.icon}`}
                  style={{ fontSize: '12px', color: '#ffffff' }}
                  aria-hidden="true"
                />
                {item.text}
                <span
                  style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.45)',
                    marginLeft: '8px',
                    flexShrink: 0,
                  }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
