import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, HomeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Curtain Cleaning Rosebank Johannesburg | Morningside On-Site Service",
  description: "Professional curtain cleaning Rosebank & Morningside, Johannesburg. On-site service with no takedown. Mattress, upholstery & rug cleaning. Call +27 75 011 9200 for a free quote.",
  keywords: [
    "curtain cleaning Rosebank",
    "mattress cleaning Rosebank",
    "upholstery cleaning Rosebank",
    "Morningside curtain cleaning",
    "Rosebank cleaning service"
  ],
  alternates: {
    canonical: "/locations/rosebank",
  },
};

export default function RosebankPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/locations/rosebank#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.curtainclean.co.za"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.curtainclean.co.za/#locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Rosebank",
            "item": "https://www.curtainclean.co.za/locations/rosebank"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.curtainclean.co.za/locations/rosebank#business",
        "name": "Curtain Cleaning Johannesburg - Rosebank",
        "telephone": "+27750119200",
        "email": "info@curtaincleaning.co.za",
        "url": "https://www.curtainclean.co.za",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rosebank",
          "addressRegion": "Gauteng",
          "addressCountry": "ZA"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rosebank"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="bg-gray-50 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary flex items-center gap-1">
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Rosebank</span>
            </nav>
          </div>
        </section>

        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPinIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Curtain Cleaning in Rosebank
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional on-site cleaning for Rosebank, Morningside & surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27750119200" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all">
                <PhoneIcon className="h-5 w-5" />
                Call +27 75 011 9200
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Serving Rosebank & Surrounding Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-bold text-lg mb-3">Our Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• On-Site Curtain Dry Cleaning</li>
                  <li>• Mattress Sanitization</li>
                  <li>• Upholstery Cleaning</li>
                  <li>• Persian Rug Cleaning</li>
                  <li>• Fabric Protection</li>
                  <li>• Fireproofing Services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Areas We Cover</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rosebank</li>
                  <li>• Morningside</li>
                  <li>• Parktown</li>
                  <li>• Houghton</li>
                  <li>• Saxonwold</li>
                  <li>• Melrose</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• No curtain takedown required</li>
                  <li>• Same-day service available</li>
                  <li>• Free on-site quotations</li>
                  <li>• 25+ years experience</li>
                  <li>• Residential & commercial</li>
                  <li>• Eco-friendly products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
            <p className="text-xl mb-8">Serving Rosebank with professional cleaning services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27750119200" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all">
                <PhoneIcon className="h-5 w-5" />
                Call +27 75 011 9200
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg transition-all">
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
