# Yaha Mogi Ecohub LLP — Website

Production-ready Next.js website for **Yaha Mogi Ecohub LLP**, a Varanasi-based manufacturer of eco-friendly sugarcane bagasse tableware.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Lucide React** icons
- **Nodemailer** (contact form email)
- **next-sitemap** (SEO sitemap & robots.txt)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### 1. Install dependencies

```bash
cd yaha-mogi-ecohub
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `EMAIL_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `EMAIL_PORT` | SMTP port (e.g. `587`) |
| `EMAIL_USER` | SMTP username |
| `EMAIL_PASS` | SMTP password / app password |
| `EMAIL_TO` | Recipient email (`yahamogiecohub@gmail.com`) |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://yahamogiecohub.com`) |

> For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) with 2FA enabled.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

The `postbuild` script automatically generates `sitemap.xml` and updates `robots.txt` via next-sitemap.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, featured products, trust badges |
| `/about` | Company story, bagasse vs plastic, certifications, directors |
| `/products` | Full 12-SKU catalogue with category filters |
| `/lifecycle` | Product lifecycle timeline & environmental impact |
| `/enterprise` | Bulk buyer, distributor, and institutional tiers |
| `/contact` | Contact cards, map link, WhatsApp + email form |

## WhatsApp Enquiry System

All product enquiries use pre-filled WhatsApp messages via `src/lib/whatsapp.ts`. Links open in a new tab with `rel="noopener noreferrer"`.

Business WhatsApp: **+91 9452936267**

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add environment variables from `.env.local.example` in the Vercel dashboard.
4. Deploy — Vercel auto-detects Next.js.

Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://yahamogiecohub.vercel.app` or custom domain).

## Project Structure

```
src/
├── app/                  # App Router pages & API routes
│   ├── layout.tsx        # Root layout, SEO metadata
│   ├── page.tsx          # Home (+ JSON-LD schema)
│   ├── about/
│   ├── products/
│   ├── lifecycle/
│   ├── enterprise/
│   ├── contact/
│   └── api/contact/      # Nodemailer contact form API
├── components/           # Shared UI components
│   └── ui/               # shadcn/ui primitives
└── lib/                  # Data & utilities
    ├── products.ts       # 12-SKU product catalogue
    ├── whatsapp.ts       # WhatsApp link builders
    └── company.ts        # Company details
public/
└── og-image.jpg          # Open Graph image (1200×630)
```

## Company Details

- **Company:** Yaha Mogi Ecohub LLP
- **GSTIN:** 09AAEFY0411H1ZD
- **Email:** yahamogiecohub@gmail.com
- **WhatsApp:** +91 9452936267
- **Instagram:** [@yahamogiecohub](https://instagram.com/yahamogiecohub)
- **Address:** Near G.K. Hotel, Utkarsh Tower, Sehmalpur, Jamalpur, Shivpur, Varanasi – 221105, U.P., India

## License

Private — © Yaha Mogi Ecohub LLP
