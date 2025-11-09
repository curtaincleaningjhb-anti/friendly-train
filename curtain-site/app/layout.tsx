import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "On The Spot Curtain Cleaning Johannesburg | Professional On-Site Service",
    template: "%s | On The Spot Curtain Cleaning"
  },
  description: "Professional on-site curtain dry cleaning in Johannesburg. We clean curtains where they hang - no takedown, no shrinkage. Also mattress sanitization, upholstery & rug cleaning. Serving Sandton, Fourways, Rosebank & all JHB suburbs.",
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
  authors: [{ name: "On The Spot Curtain Cleaning" }],
  creator: "On The Spot Curtain Cleaning",
  publisher: "On The Spot Curtain Cleaning",
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
    title: "On The Spot Curtain Cleaning Johannesburg | Professional On-Site Service",
    description: "Professional on-site curtain dry cleaning in Johannesburg. We clean curtains where they hang - no takedown, no shrinkage. Serving Sandton, Fourways, Rosebank & all JHB suburbs.",
    url: "https://www.curtainclean.co.za",
    siteName: "On The Spot Curtain Cleaning",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On The Spot Curtain Cleaning Johannesburg",
    description: "Professional on-site curtain dry cleaning in Johannesburg. We clean curtains where they hang.",
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

  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSZ36GDD');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSZ36GDD"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
