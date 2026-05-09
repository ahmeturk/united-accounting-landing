# IDHAM — Landing Page

High-converting, RTL-first landing page for **IDHAM (إدهام)** — an AI-powered accounting platform for Saudi SMEs by United Accounting.

Built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn-style primitives.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with a custom Saudi-fintech design system
- **Animations**: Framer Motion (subtle, accessible, reduced-motion aware)
- **Icons**: lucide-react
- **Fonts**: IBM Plex Sans Arabic (Arabic) + Inter (Latin) — self-hosted via `next/font`
- **Direction**: RTL-first (`dir="rtl"` on `<html>`)
- **Performance**: All images served as inline SVG via `/api/placeholder/[...slug]` — zero external requests

## Local Development

Requires Node.js 18.17+ (Next.js 14 requirement).

```bash
# install dependencies
npm install

# start the dev server
npm run dev
# → open http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # next lint
```

## Project Structure

```
idham-landing/
├── app/
│   ├── api/placeholder/[...slug]/route.ts   # SVG placeholder service
│   ├── globals.css                          # Tailwind + base/components/utilities
│   ├── layout.tsx                           # RTL <html>, font loading, metadata
│   └── page.tsx                             # Imports the 12 sections
├── components/
│   └── sections/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Comparison.tsx
│       ├── SocialProof.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts                             # cn() + Eastern Arabic digit helper
├── tailwind.config.ts                       # navy / teal / sand palette + tokens
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

## Design System

| Token       | Value     | Usage                          |
|-------------|-----------|--------------------------------|
| `navy`      | `#0B1E3F` | Primary brand, headings        |
| `teal-500`  | `#14B8A6` | Accent, CTAs, AI cues          |
| `sand-100`  | `#F5F1EA` | Warm Saudi background wash     |
| `ink`       | `#1A1A1A` | Body text                      |
| `ink-muted` | `#5A5A5A` | Secondary text                 |

- Type scale tuned for Arabic — generous `line-height: 1.7` on body, `1.25` on headlines
- All margin/padding utilities use logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) so the layout flips cleanly if you ever need an LTR variant
- Reduced-motion preferences are respected — animations dampen automatically

## Deploy to Vercel

### One-click

1. Push this repo to GitHub
2. Visit https://vercel.com/new and import the repository
3. Vercel auto-detects Next.js — click **Deploy**

Defaults are correct: framework preset = Next.js, build command = `next build`, output = `.next`.

### CLI

```bash
npm i -g vercel
vercel             # preview deploy
vercel --prod      # promote to production
```

### Environment variables

None required to ship the marketing page. When you wire up the demo-booking form, add the relevant integration keys (e.g. `RESEND_API_KEY`, `HUBSPOT_TOKEN`) via Vercel Project Settings → Environment Variables.

## Performance Targets

- Lighthouse 95+ across Performance / Accessibility / Best Practices / SEO
- Zero external image requests (SVG placeholders served from same-origin)
- `next/font` self-hosts IBM Plex Sans Arabic + Inter to eliminate FOIT
- `optimizePackageImports` enabled for `lucide-react` and `framer-motion` to keep the JS bundle slim

## RTL Notes

- `<html dir="rtl" lang="ar">` set in `app/layout.tsx`
- Use `start-*` / `end-*` instead of `left-*` / `right-*` so positions flip with direction
- For LTR tokens inside RTL flow (phone numbers, IBANs, model IDs), wrap the span in `dir="ltr"`
- Phone numbers and prices use Eastern Arabic numerals (`٠-٩`); the `toArabicDigits()` helper in `lib/utils.ts` converts at runtime if needed

## Copy / Tone

- Modern Standard Arabic with Saudi business idiom
- Numbers always in Eastern Arabic numerals
- Currency: `ر.س` (not SAR / SR)
- English mixed only for technical terms: ZATCA, AI, SOCPA, ERP, OCR
- No hyperbole — no "ثوري", "الأفضل في العالم", "لا مثيل له"

## License

© 2026 United Accounting. All rights reserved.
