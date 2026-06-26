'use client'

const TRUST_ITEMS = [
  { icon: 'ti-shield-check',       label: 'Food-Grade Certified' },
  { icon: 'ti-leaf',               label: 'Zero Microplastics' },
  { icon: 'ti-ban',                label: 'Plastic-Free' },
  { icon: 'ti-microwave',          label: 'Microwave Safe' },
  { icon: 'ti-snowflake',          label: 'Freezer Safe' },
  { icon: 'ti-droplet-off',        label: 'Leak Resistant' },
  { icon: 'ti-recycle',            label: 'Compostable · 90–150 days' },
  { icon: 'ti-certificate',        label: 'SUP-Ban Compliant' },
  { icon: 'ti-building-factory-2', label: 'Direct from Manufacturer' },
  { icon: 'ti-receipt-2',          label: 'GST Inclusive Pricing' },
  { icon: 'ti-users',              label: 'Trusted by 100+ Businesses' },
]

export default function TrustTicker() {
  return (
    <div
      style={{
        background: '#f5eed8',
        height: '40px',
        overflow: 'hidden',
        width: '100%',
        borderTop: '1.5px solid #e8dcc8',
        borderBottom: '1.5px solid #e8dcc8',
      }}
      aria-label="Trust signals"
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', whiteSpace: 'nowrap' }}>
        {[0, 1].map((pass) => (
          <div
            key={pass}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              animation: 'trustTicker 38s linear infinite',
            }}
          >
            {TRUST_ITEMS.map((item, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0',
                  padding: '0 10px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#ffffff',
                    border: '1px solid #e8661a',
                    borderRadius: '20px',
                    padding: '3px 10px 3px 5px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#1a4a1f',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <i
                    className={`ti ${item.icon}`}
                    style={{ fontSize: '13px', color: '#e8661a' }}
                    aria-hidden="true"
                  />
                  {item.label}
                </span>

                <span
                  style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#c4a96b',
                    opacity: 0.6,
                    marginLeft: '10px',
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
