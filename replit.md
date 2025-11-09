# On The Spot Curtain Cleaning - Professional Website

## Overview

A modern, SEO-optimized Next.js 14 website for "On The Spot Curtain Cleaning," a professional curtain and soft furnishing cleaning business serving Johannesburg. The website features comprehensive service information, location-based landing pages, booking functionality, and integrated payment processing. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS 4 for optimal performance and search engine visibility.

**Business Focus**: On-site curtain dry cleaning, mattress sanitization, upholstery cleaning, Persian rug care, fabric protection, and fireproofing services for residential, hospitality, and commercial clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Structure

```
curtain-site/              # Main Next.js application
  app/                     # Next.js App Router
    page.tsx               # Homepage with services overview
    layout.tsx             # Root layout with SEO, GA, Footer, WhatsApp
    contact/page.tsx       # Contact form page
    booking/deposit/page.tsx  # Stripe payment deposit page
    services/              # Service pages (curtain, mattress, upholstery, rug, fabric protection, fireproofing)
    locations/             # Location pages (Sandton, Fourways, Rosebank, Randburg)
    api/                   # API routes
      contact/route.ts     # Contact form submission
      subscribe/route.ts   # Mailchimp newsletter subscription
      payments/create-intent/route.ts  # Stripe payment intent creation
    sitemap.ts             # Dynamic XML sitemap
    robots.ts              # Robots.txt configuration
    globals.css            # Tailwind config and custom styles
  components/              # Reusable React components
    ContactForm.tsx        # Contact/quote request form
    FloatingWhatsApp.tsx   # Site-wide WhatsApp button
    WhatsAppButton.tsx     # Inline WhatsApp CTA
    GoogleAnalytics.tsx    # Google Analytics 4 integration
    NewsletterForm.tsx     # Mailchimp email capture
    Footer.tsx             # Site footer with newsletter signup
  public/                  # Static assets
  
legacy-messaging/          # Previous project (archived, not in use)
```

## System Architecture

### Frontend Architecture

**Technology Stack**: Next.js 14, TypeScript, Tailwind CSS 4, Heroicons

The website uses Next.js 14 App Router for optimal performance and SEO. Key design decisions:

- **Server Components**: Default to React Server Components for faster page loads and better SEO
- **SEO Optimization**: Metadata API for dynamic meta tags, Open Graph, and Twitter Cards
- **Responsive Design**: Mobile-first Tailwind CSS approach with custom brand colors
- **Custom Theme**: Professional blue gradient scheme (#0066CC primary, #00A3E0 secondary, #66CC99 accent)
- **Typography**: System font stack for optimal performance across all devices
- **Icons**: Heroicons for consistent, scalable iconography

### Custom Branding

**Color Palette**:
- Primary: #0066CC (trust, professionalism)
- Primary Dark: #004D99 (hover states)
- Secondary: #00A3E0 (accents, CTAs)
- Accent: #66CC99 (success, highlights)
- Gray Scale: 50-900 for backgrounds and text hierarchy

**Custom CSS Classes**:
- `.gradient-primary`: Blue gradient for buttons and accents
- `.gradient-hero`: Hero section background with opacity

### SEO Strategy

**Implemented**:
- ✅ Schema.org markup for LocalBusiness and Service on all pages
- ✅ Dynamic meta tags per page (title, description, keywords, Open Graph, Twitter Cards)
- ✅ Location-based landing pages (Sandton, Fourways, Rosebank, Randburg)
- ✅ Service-specific pages with detailed content (6 services)
- ✅ Dynamic sitemap.xml and robots.txt for search engine crawling
- ✅ Canonical URLs and proper heading hierarchy
- ✅ Breadcrumb navigation on all pages

### Integrated Features

**Contact & Lead Capture**:
- ✅ Contact form at /contact with service selection, location, and message fields
- ✅ API route /api/contact for form submissions (logs to console, ready for email integration)
- ✅ Form validation, loading states, success/error handling

**Email Marketing (Mailchimp)**:
- ✅ Newsletter signup form in footer (site-wide)
- ✅ API route /api/subscribe for Mailchimp integration
- ✅ Email validation, duplicate detection, error handling
- ⚙️ Requires MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID environment variables

**Analytics (Google Analytics 4)**:
- ✅ Google Analytics component with automatic page view tracking
- ✅ Next.js App Router integration with proper query parameter handling
- ✅ Conditional loading based on environment variable
- ⚙️ Requires NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable

**Payment Processing (Stripe)**:
- ✅ Booking deposit page at /booking/deposit
- ✅ Two-step flow: customer details → secure payment
- ✅ Stripe Payment Element integration with real-time validation
- ✅ Payment intent creation with amount whitelist (R500, R1000, R1500, R2000)
- ✅ Success/error states with payment status detection
- ⚙️ Requires STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variables

**WhatsApp Integration**:
- ✅ Floating WhatsApp button (site-wide, bottom right)
- ✅ Inline WhatsApp CTA buttons on service/location pages
- ✅ Pre-filled message templates for quotes

### Environment Variables Required

**For production deployment, configure these secrets:**

```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Mailchimp (optional - newsletter will gracefully degrade if missing)
MAILCHIMP_API_KEY=xxxxx-us6
MAILCHIMP_AUDIENCE_ID=xxxxxxxxx

# Stripe (optional - payment page will show fallback if missing)
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
```

**Development Notes**:
- PostgreSQL database available for future booking system enhancements
- Legacy messaging app preserved in `legacy-messaging/` folder
- Ready for Vercel deployment with environment secrets
- All integrations degrade gracefully if environment variables are missing

## Recent Changes

**November 9, 2025 - Complete Website Launch**:

**Initial Setup**:
- Initialized Next.js 14 project with App Router, TypeScript, Tailwind CSS 4
- Created professional homepage with hero section, services overview, trust badges
- Configured custom brand colors and gradients (Tailwind CSS 4 @theme directive)
- Installed Heroicons for UI components
- Set up dev workflow on port 5000 for Replit compatibility

**Service Pages Created** (6 pages with full SEO):
- Curtain Dry Cleaning (on-site, no takedown)
- Mattress Sanitization
- Upholstery Cleaning (sofas, chairs, fabric furniture)
- Persian & Oriental Rug Cleaning
- Masterguard Fabric Protection
- Fireproofing Services (commercial compliance)

**Location Pages Created** (4 pages with local SEO):
- Sandton & Hyde Park
- Fourways & Bryanston
- Rosebank & Morningside
- Randburg & Parkhurst

**Integrations Implemented**:
- Google Analytics 4 with Next.js page view tracking
- Mailchimp newsletter signup (site-wide footer)
- Stripe payment integration for booking deposits (R500-R2000)
- WhatsApp integration (floating button + inline CTAs)
- Contact form with lead capture (/contact page)

**SEO & Technical**:
- Dynamic sitemap.xml with all pages
- Robots.txt configuration
- Schema.org structured data (LocalBusiness + Service)
- Meta tags, Open Graph, Twitter Cards on all pages
- Breadcrumb navigation
- Footer with newsletter, service links, location links

**Deployment Ready**:
- All features production-ready and architect-reviewed
- Environment variables documented
- Graceful degradation for missing API keys
- Secure server-side API key handling
- Ready for Vercel deployment