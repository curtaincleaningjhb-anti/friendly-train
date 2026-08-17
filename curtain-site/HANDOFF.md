# JHB Curtain Cleaning — Website Hand-off

## What is included

This package contains the complete JHB Curtain Cleaning website source, all production images, the Drapery Mark logo and favicon, gallery imagery, design mock-ups and the configuration needed to run the project locally.

The package intentionally excludes generated dependencies and build output (`node_modules`, `dist`, `.next`, runtime caches and Git metadata). Install dependencies from the included lockfile before running the site.

## Brand system

- **Selected logo:** The Drapery Mark — four flowing fabric folds in ivory and gold.
- **Logo asset:** `public/brand-drapery-mark.svg`
- **Favicon:** `public/favicon.svg`
- **Logo exploration:** `design/jhb-curtain-cleaning-logo-directions.svg` and `.png`
- **Primary palette:** charcoal `#171717`, ink `#202020`, gold `#D4AF37`, warm ivory `#F9F7F2`.
- **Type pairing:** Playfair Display for editorial headings and Inter for body/UI text.

## Site scope

- Full homepage with service, process, guarantee, sector, area, pricing, FAQ and contact sections.
- Service, sector and area hub pages plus individual landing pages.
- About, blog, gallery, guides, newsletter, privacy policy and terms pages.
- Responsive navigation, service/sector/area dropdowns, mobile menu and internal cross-linking.
- On-site enquiry section with Google Map embed and mailto form.
- WhatsApp, phone and email contact routes.
- Schema markup, canonical metadata, `robots.ts` and `sitemap.ts`.
- Full-colour gallery with 21 curated images, including the 15 additional premium fabric-care scenes.

## Key directories

| Location | Purpose |
| --- | --- |
| `app/` | Pages, metadata, navigation, shared layout and content data. |
| `public/` | Production image library, logo, favicon, card/hero images and gallery assets. |
| `app/site-content.ts` | Service, sector, area and shared website copy/data. |
| `app/site-chrome.tsx` | Header, footer and contact section. |
| `app/globals.css` | Brand tokens, responsive styling and visual system. |
| `worker/`, `build/`, `scripts/` | Cloudflare/Vinext hosting integration and build validation. |
| `design/` | Brand-logo mock-up artwork used during selection. |

## Local setup

Requirements: Node.js 22.13 or later and npm.

```bash
npm ci
npm run dev
```

For a production verification build:

```bash
npm run lint
npm run build
npm test
```

## Content and contact details

- Phone/WhatsApp: `+27 75 011 9200`
- Email: `info@jhbcurtaincleaning.co.za`
- Dispatch base: 10 Second Avenue, Florida, Roodepoort, 1710.

The enquiry form intentionally uses a `mailto:` action. Replace it with a server-side form provider or CRM endpoint when an approved service is available.

## Updating the site

1. Update service, sector or area content in `app/site-content.ts`.
2. Add/replace visual assets inside `public/`, then update the relevant page source.
3. Keep the logo and favicon asset paths unchanged unless their references in `app/site-chrome.tsx` and `app/layout.tsx` are updated at the same time.
4. Run lint, build and tests before publishing.

## Handover checklist

- Confirm domain/DNS ownership and production hosting access.
- Connect a production enquiry/CRM endpoint if email-client forms are not suitable.
- Verify Google Business Profile, Google Search Console and analytics ownership.
- Update legal pages when the business privacy process changes.
- Keep a secure backup of this source package and production credentials separately. No credentials are included in this ZIP.
