import type { Metadata } from "next";
import { BusinessSchema } from "./business-schema";
import { siteConfig } from "./seo/site-config";
import "./globals.css";

const homeTitle = "Curtain & Fabric Cleaning Johannesburg | JHB Curtain Cleaning";
const homeDescription =
  "On-site curtain, blind, upholstery, mattress and rug care across Johannesburg. Explore services, areas, pricing guidance and free assessments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: { default: homeTitle, template: "%s | JHB Curtain Cleaning" },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultSocialImage,
        width: 1200,
        height: 630,
        alt: "Elegant curtains cared for by JHB Curtain Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [siteConfig.defaultSocialImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <BusinessSchema />
        {children}
      </body>
    </html>
  );
}
