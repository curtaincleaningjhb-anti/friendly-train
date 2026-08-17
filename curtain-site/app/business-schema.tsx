import { JsonLd } from "./seo/json-ld";
import { absoluteUrl, siteConfig } from "./seo/site-config";
import { services } from "./site-content";

export function BusinessSchema() {
  const organizationId = `${siteConfig.origin}/#organization`;
  const websiteId = `${siteConfig.origin}/#website`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.origin,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description:
          "Johannesburg on-site curtain, blind and specialist fabric-care services for homes and professional properties.",
        image: [absoluteUrl("/hero-luxury.webp"), absoluteUrl("/jhb-textile-hero.webp")],
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Second Avenue, Florida",
          addressLocality: "Roodepoort",
          addressRegion: "Gauteng",
          postalCode: "1710",
          addressCountry: "ZA",
        },
        areaServed: ["Johannesburg", "Midrand"].map((name) => ({
          "@type": "City",
          name,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "On-site fabric care services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            url: absoluteUrl(service.path),
            itemOffered: {
              "@type": "Service",
              name: service.shortTitle,
              description: service.description,
              provider: { "@id": organizationId },
              areaServed: { "@type": "City", name: "Johannesburg" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.origin,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.origin}/#webpage`,
        url: siteConfig.origin,
        name: "Curtain & Fabric Cleaning Johannesburg",
        description:
          "On-site curtain, blind, upholstery, mattress and rug care across Johannesburg.",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        inLanguage: siteConfig.language,
      },
    ],
  };

  return <JsonLd data={schema} />;
}
