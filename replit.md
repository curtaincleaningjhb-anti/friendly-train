# On The Spot Curtain Cleaning - Professional Website

## Overview

A modern, SEO-optimized Next.js 14 website for "On The Spot Curtain Cleaning," a professional curtain and soft furnishing cleaning business serving Johannesburg. The website features comprehensive service information, location-based landing pages, booking functionality, and integrated payment processing. Its purpose is to enhance online presence, streamline bookings, and provide detailed service information to residential, hospitality, and commercial clients, ultimately driving business growth and market penetration in the Johannesburg area.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Next.js 14, TypeScript, Tailwind CSS 4, Heroicons.
- **Next.js App Router**: Utilizes React Server Components for performance and SEO.
- **SEO Optimization**: Metadata API for dynamic meta tags, Open Graph, Twitter Cards, Schema.org markup (LocalBusiness, Service), dynamic sitemap.xml, and robots.txt.
- **Responsive Design**: Mobile-first Tailwind CSS with custom brand colors.
- **Custom Branding**:
    - **Color Palette**: Primary #0066CC, Secondary #00A3E0, Accent #66CC99.
    - **Custom CSS**: `.gradient-primary` and `.gradient-hero` for visual styling.
- **Accessibility**: WCAG compliance with comprehensive ARIA labels and full keyboard accessibility.

### Feature Specifications
- **Content Management**: Admin panel for managing homepage content and site settings.
- **Services**: Dedicated pages for curtain dry cleaning, mattress sanitization, upholstery cleaning, Persian rug cleaning, fabric protection, and fireproofing.
- **Locations**: Specific landing pages for key Johannesburg areas (Sandton, Fourways, Rosebank, Randburg) with advanced local SEO optimization including geo-targeting meta tags and LSI keywords.
- **Contact & Lead Capture**: Contact form with SendGrid integration for automated email notifications to the business owner.
- **Email Marketing**: Newsletter signup with Mailchimp integration.
- **Payment Processing**: Stripe integration for booking deposits with a two-step payment flow.
- **WhatsApp Integration**: Floating site-wide button and inline CTAs with pre-filled messages.
- **Analytics & Tracking**: Google Tag Manager and Google Analytics 4 integration for comprehensive tracking.
- **Geo-location Detection**: Component for proximity-based personalization, displaying personalized banners for users within a 25km radius of Johannesburg.

### System Design Choices
- **Database**: PostgreSQL with Drizzle ORM for schema management (admin_users, site_settings, content_blocks, services, locations).
- **Authentication**: NextAuth for admin panel access.
- **Deployment**: Configured for Vercel deployment with secure handling of environment variables.
- **Graceful Degradation**: Integrations are designed to function even if environment variables for external services are missing.

## External Dependencies

- **SendGrid**: For sending automated email notifications from contact form submissions.
- **Mailchimp**: For managing newsletter subscriptions.
- **Stripe**: For processing online payments and booking deposits.
- **Google Analytics 4**: For website traffic analytics and user behavior tracking.
- **Google Tag Manager**: For managing various tracking tags.
- **Heroicons**: For scalable iconography across the UI.
- **ipapi.co**: For IP geolocation to detect user location for proximity messaging.
## Admin Panel

**Overview**:
The website includes a custom-built admin panel for content management without coding. Business owners can edit homepage content, contact information, and social media links directly through an intuitive web interface.

**Access**:
- URL: `/admin/login`
- Default credentials: `admin@curtaincleaning.co.za` / `Admin@2025!`
- **Important**: Change password after first login

**Features**:
- ✅ **Homepage Editor**: Edit hero section (title, subtitle, location text, CTA buttons) and trust badges (4 customizable items)
- ✅ **Settings Editor**: Update contact info (phone, WhatsApp, email) and social media links (Facebook, Instagram, YouTube, TikTok, Pinterest, X)
- ✅ **Real-time Updates**: Changes saved to database and immediately visible on live website
- ✅ **Validation**: Form validation prevents empty fields and invalid data
- ✅ **Authentication**: Secure login with bcrypt password hashing and NextAuth session management
- 🚧 **Services Editor**: Pending (manually edit service pages for now)
- 🚧 **Locations Editor**: Pending (manually edit location pages for now)

**Technical Implementation**:
- **Database**: PostgreSQL with Drizzle ORM
- **Tables**: `admin_users`, `site_settings`, `content_blocks`, `services`, `locations`
- **Authentication**: NextAuth with credential provider and bcrypt password hashing
- **Protected Routes**: Middleware protects `/admin/*` routes (except `/admin/login`)
- **Content Fetching**: Server components fetch content from database with fallback defaults
- **API Routes**: 
  - `/api/admin/homepage` - Homepage content management (GET/POST)
  - `/api/admin/settings` - Site settings management (GET/POST)
  - Both routes require authentication and validate data before saving

**Database Scripts**:
```bash
npm run create-admin    # Create first admin user
npm run seed-content    # Seed database with initial content
npm run db:push         # Sync schema changes to database
npm run db:studio       # Open Drizzle Studio (database GUI)
```

**Environment Variables**:
- `NEXTAUTH_SECRET` - Required for session encryption (generate with `openssl rand -base64 32`)
- `DATABASE_URL` - PostgreSQL connection string (automatically provided by Replit)

**Security**:
- Passwords hashed with bcrypt (10 rounds)
- Session-based authentication with JWT tokens
- CSRF protection via NextAuth
- Protected API routes require valid session
- Input validation prevents XSS and injection attacks

**Recent Changes** (November 9, 2025):
- Built admin panel foundation with NextAuth authentication
- Created Homepage and Settings editors with full validation
- Migrated homepage content to database (hero + trust badges)
- Added data merging to prevent overwrites
- Improved error handling with specific validation messages
- Architect-reviewed and approved for production use
