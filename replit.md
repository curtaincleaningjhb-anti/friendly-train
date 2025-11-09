# On The Spot Curtain Cleaning - Professional Website

## Overview

A modern, SEO-optimized Next.js 14 website for "On The Spot Curtain Cleaning," a professional curtain and soft furnishing cleaning business serving Johannesburg. The website features comprehensive service information, location-based landing pages, booking functionality, and integrated payment processing. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS 4 for optimal performance and search engine visibility.

**Business Focus**: On-site curtain dry cleaning, mattress sanitization, upholstery cleaning, Persian rug care, fabric protection, and fireproofing services for residential, hospitality, and commercial clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Structure

```
curtain-site/              # Main Next.js application
  app/                     # Next.js App Router pages
    page.tsx              # Homepage with services overview
    layout.tsx            # Root layout with SEO metadata
    globals.css           # Tailwind config and custom styles
  public/                 # Static assets
  
legacy-messaging/         # Previous project (archived, not in use)
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

**Planned Implementation**:
- Schema.org markup for LocalBusiness and Service
- Dynamic meta tags per page (title, description, keywords)
- Location-based landing pages for Johannesburg suburbs
- Service-specific pages with detailed content
- Sitemap.xml and robots.txt for search engine crawling
- Canonical URLs and proper heading hierarchy

### Future Integrations

**Phase 2 Features**:
- Contact/booking forms (Formspree or custom)
- Stripe payment integration for deposits
- Google Analytics 4 and Tag Manager
- Mailchimp email marketing automation
- WhatsApp click-to-chat button

**Development Notes**:
- PostgreSQL database available for future booking system
- Legacy messaging app preserved in `legacy-messaging/` folder
- Deployment planned for Vercel with environment secrets

## Recent Changes

**November 9, 2025**:
- Initialized Next.js 14 project with App Router, TypeScript, Tailwind CSS 4
- Created professional homepage with hero section, services overview, trust badges
- Configured custom brand colors and gradients
- Installed Heroicons for UI components
- Set up dev workflow on port 5000 for Replit compatibility