# FanFeed — Marketing Website

Production-ready marketing website for FanFeed, the operating system for modern fan intelligence.

## Tech Stack

| Technology | Why |
|---|---|
| **Next.js 16 (App Router)** | Server Components by default, static generation, built-in metadata API, image optimization, and Vercel-native deployment |
| **React 19** | Latest stable with server component support |
| **TypeScript** | Type safety across all components and data structures |
| **Tailwind CSS v4** | Utility-first CSS with `@theme` inline design tokens — no config file needed |
| **Geist (next/font)** | High-quality variable font loaded with zero layout shift via `font-display: swap` |
| **Lucide React** | Tree-shakeable icon library — only ships icons actually used |
| **Framer Motion** | Available for animation but used sparingly to protect CWV scores |
| **clsx + tailwind-merge** | Conditional class composition without conflicts |

## Architecture

```
src/
├── app/                    # App Router pages and route handlers
│   ├── page.tsx            # Homepage / Platform OS
│   ├── app/page.tsx        # FanFeed App product page
│   ├── studio/page.tsx     # FanFeed Studio product page
│   ├── about/page.tsx      # About / Team page
│   ├── contact/            # Contact page + client form component
│   ├── blog/               # Blog index + [slug] dynamic routes
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── terms/page.tsx      # Terms of Service
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   ├── robots.ts           # robots.txt generation
│   ├── layout.tsx          # Root layout (fonts, header, footer, JSON-LD)
│   └── globals.css         # Tailwind v4 theme tokens + base styles
├── components/
│   ├── layout/             # Header, Footer (global chrome)
│   ├── shared/             # CTASection, JsonLd (cross-page)
│   └── ui/                 # Section, Button, Card, FeatureCard, StepCard
├── lib/
│   ├── constants.ts        # Site config, nav items, footer links
│   ├── metadata.ts         # Per-page metadata generator
│   ├── structured-data.ts  # JSON-LD schema builders
│   └── utils.ts            # cn() utility
public/
├── llms.txt                # AI-readable company summary
└── llms-full.txt           # Extended AI-readable product reference
```

### Design Decisions

- **Server Components by default**: Every page is a React Server Component. Only `Header` (mobile nav state) and `ContactForm` (form state) are client components — minimizing hydration and JS bundle size.
- **Static generation**: All 18 routes are statically pre-rendered at build time. Zero runtime server cost.
- **Structured content**: All marketing copy lives in the page files as typed data, making it easy to extract to a CMS later.
- **Reusable section pattern**: `Section`, `SectionHeader`, `Card`, `FeatureCard`, `StepCard`, `CTASection` compose every page — ensuring consistent spacing, typography, and responsive behavior.
- **Theme tokens via CSS**: Brand colors defined in `globals.css` using Tailwind v4's `@theme inline` — single source of truth, no config file.

## SEO Strategy

### Traditional Search

- **Per-page metadata**: Every route exports `generatePageMetadata()` with title, description, canonical URL, Open Graph, and Twitter Card tags
- **Structured data**: JSON-LD on every page — Organization, WebSite, BreadcrumbList, FAQPage, SoftwareApplication, Article schemas
- **Sitemap**: Auto-generated at `/sitemap.xml` with priority and change frequency
- **robots.txt**: Generated at `/robots.txt`, allows all crawlers, references sitemap
- **Semantic HTML**: Proper heading hierarchy (h1→h2→h3), landmark roles, `<article>`, `<section>`, `<nav>`, `<dl>` for FAQs
- **FAQ section**: Homepage includes 6 FAQ items with FAQPage schema — targets long-tail queries and featured snippets
- **Internal linking**: Strong cross-linking between Platform → App → Studio → About → Contact

### AI / LLM Discoverability

- **llms.txt**: Concise company/product summary at `/llms.txt` for LLM crawlers
- **llms-full.txt**: Extended reference at `/llms-full.txt` with complete product details, use cases, audience, and differentiators
- **Entity-rich copy**: Pages use clear, factual language with named entities (product names, categories, audiences, problems)
- **No hidden content**: All marketing copy is server-rendered HTML — no tabs, accordions, or JS-gated content
- **Plain-language explanations**: Every section pairs branded headlines with descriptive body copy that answers implicit questions

## Conversion Optimization

- **CTA placement**: Every page has hero CTA + final CTA section. Homepage has 5+ CTA touchpoints
- **Progressive disclosure**: Homepage narrative flow — problem → solution → proof → extensions → credibility → CTA
- **Contact form**: Minimal friction — name, org, email, interest checkboxes, open text field
- **Trust signals**: Team credibility section, industry-specific language, strategic positioning

## Accessibility

- **Color contrast**: All text/background combinations meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)
- **Keyboard navigation**: Full keyboard support with visible focus states (`focus-visible` ring)
- **ARIA**: Labels on navigation, mobile menu toggle, icon decorations marked `aria-hidden`
- **Semantic landmarks**: `<header>`, `<main>`, `<footer>`, `<nav>` with proper roles
- **Form accessibility**: All inputs have associated `<label>` elements, required fields marked

## Performance Targets

| Metric | Target | How |
|---|---|---|
| **LCP** | < 2.5s | Static generation, no blocking JS above fold, `font-display: swap` |
| **INP** | < 200ms | Minimal client components, no heavy event handlers |
| **CLS** | < 0.1 | No layout shifts — fonts preloaded, no dynamic content injection |
| **Bundle size** | Minimal | Server Components, tree-shaken icons, no unnecessary deps |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is Vercel-ready. Push to a connected Git repository and Vercel will:

1. Detect Next.js automatically
2. Run `npm run build`
3. Deploy static pages to edge CDN
4. Apply security headers from `next.config.ts`

### Environment Variables

No environment variables are required for the marketing site. When connecting a form backend (e.g., Resend, SendGrid, or a CRM webhook), add:

```
CONTACT_FORM_ENDPOINT=https://your-backend.com/api/contact
```

## Customization Checklist

- [ ] Replace `FF` logo mark in Header/Footer with actual SVG logo
- [ ] Update `SITE_CONFIG.url` in `src/lib/constants.ts` with production domain
- [ ] Add real Open Graph images (`/public/og-default.png`, per-page images)
- [ ] Add favicon (`/public/favicon.ico`, `/public/icon.svg`)
- [ ] Connect contact form to backend (Resend, SendGrid, CRM webhook)
- [ ] Add Google Analytics / Plausible / PostHog tracking
- [ ] Replace sample blog content with real articles (or connect to CMS)
- [ ] Add real team photos to About page
- [ ] Update social links in `SITE_CONFIG.social`
- [ ] Review and finalize legal page copy with counsel
