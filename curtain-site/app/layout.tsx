import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import GeoLocation from "@/components/GeoLocation";

export const metadata: Metadata = {
  title: {
    default: "Curtain Cleaning Johannesburg | Professional On-Site Service",
    template: "%s | Curtain Cleaning Johannesburg"
  },
  description: "Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage. Mattress sanitization, upholstery & rug cleaning. Serving Sandton, Fourways, Rosebank & all JHB suburbs. Call +27 75 011 9200.",
  keywords: [
    "curtain cleaning Johannesburg",
    "on-site curtain cleaning",
    "mattress cleaning Sandton",
    "upholstery cleaning Fourways",
    "Persian rug cleaning",
    "curtain dry cleaning",
    "mattress sanitization",
    "fabric protection",
    "fireproofing",
    "Johannesburg cleaning services"
  ],
  authors: [{ name: "Curtain Cleaning Johannesburg" }],
  creator: "Curtain Cleaning Johannesburg",
  publisher: "Curtain Cleaning Johannesburg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.curtainclean.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Curtain Cleaning Johannesburg | Professional On-Site Service",
    description: "Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage. Serving Sandton, Fourways, Rosebank & all JHB suburbs.",
    url: "https://www.curtainclean.co.za",
    siteName: "Curtain Cleaning Johannesburg",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curtain Cleaning Johannesburg | Professional On-Site Service",
    description: "Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GT-579RBCXJ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.curtainclean.co.za/#business",
    "name": "Curtain Cleaning Johannesburg",
    "alternateName": "On The Spot Curtain Cleaning",
    "description": "Professional on-site curtain dry cleaning, mattress sanitization, and upholstery cleaning service in Johannesburg.",
    "url": "https://www.curtainclean.co.za",
    "telephone": "+27750119200",
    "email": "info@curtaincleaning.co.za",
    "priceRange": "$$",
    "image": "https://www.curtainclean.co.za/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "EFT", "Instant EFT"],
    "currenciesAccepted": "ZAR",
    "knowsAbout": [
      "curtain cleaning",
      "curtain dry cleaning",
      "on-site curtain cleaning",
      "mattress cleaning",
      "mattress sanitization",
      "upholstery cleaning",
      "sofa cleaning",
      "couch cleaning",
      "Persian rug cleaning",
      "oriental rug cleaning",
      "fabric protection",
      "Masterguard",
      "fireproofing",
      "fire retardant treatment",
      "drape cleaning",
      "drapery cleaning",
      "blind cleaning",
      "soft furnishing care"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Johannesburg"
      },
      {
        "@type": "Neighborhood",
        "name": "Sandton"
      },
      {
        "@type": "Neighborhood",
        "name": "Fourways"
      },
      {
        "@type": "Neighborhood",
        "name": "Rosebank"
      },
      {
        "@type": "Neighborhood",
        "name": "Randburg"
      },
      {
        "@type": "Neighborhood",
        "name": "Hyde Park"
      },
      {
        "@type": "Neighborhood",
        "name": "Bryanston"
      },
      {
        "@type": "Neighborhood",
        "name": "Morningside"
      },
      {
        "@type": "Neighborhood",
        "name": "Parkhurst"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Curtain Dry Cleaning",
            "url": "https://www.curtainclean.co.za/services/curtain-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Sanitization",
            "url": "https://www.curtainclean.co.za/services/mattress-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Upholstery Cleaning",
            "url": "https://www.curtainclean.co.za/services/upholstery-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Persian Rug Cleaning",
            "url": "https://www.curtainclean.co.za/services/rug-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fabric Protection",
            "url": "https://www.curtainclean.co.za/services/fabric-protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fireproofing Services",
            "url": "https://www.curtainclean.co.za/services/fireproofing"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61571183430714"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSZ36GDD');`}
        </Script>
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSZ36GDD"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {gaId && (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={gaId} />
          </Suspense>
        )}
        <GeoLocation />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
