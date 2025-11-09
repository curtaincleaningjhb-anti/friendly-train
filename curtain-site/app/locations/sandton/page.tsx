import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, MapPinIcon, CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Curtain Cleaning Sandton Johannesburg | On-Site Service Hyde Park",
  description: "Professional curtain cleaning Sandton & Hyde Park, Johannesburg. On-site dry cleaning, mattress sanitization & upholstery cleaning. Serving Bryanston, Rivonia. Call +27 75 011 9200 for a free quote.",
  keywords: [
    "curtain cleaning Sandton",
    "mattress cleaning Sandton",
    "upholstery cleaning Sandton",
    "curtain dry cleaning Sandton",
    "on-site curtain cleaning Sandton",
    "Sandton cleaning services"
  ],
  alternates: {
    canonical: "/locations/sandton",
  },
  openGraph: {
    title: "Curtain Cleaning Sandton Johannesburg | On-Site Service",
    description: "Professional curtain cleaning in Sandton. On-site service with no takedown required.",
    url: "https://www.curtainclean.co.za/locations/sandton",
  },
};

export default function SandtonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/locations/sandton#breadcrumb",
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
            "name": "Sandton",
            "item": "https://www.curtainclean.co.za/locations/sandton"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.curtainclean.co.za/locations/sandton#business",
        "name": "Curtain Cleaning Johannesburg - Sandton",
        "description": "Professional on-site curtain cleaning, mattress sanitization, and upholstery cleaning service in Sandton and surrounding areas.",
        "telephone": "+27750119200",
    "email": "info@curtaincleaning.co.za",
    "url": "https://www.curtainclean.co.za",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sandton",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sandton"
      },
      {
        "@type": "Neighborhood",
        "name": "Hyde Park"
      },
      {
        "@type": "Neighborhood",
        "name": "Morningside"
      },
      {
        "@type": "Neighborhood",
        "name": "Bryanston"
      },
      {
        "@type": "Neighborhood",
        "name": "Rivonia"
      },
      {
        "@type": "Neighborhood",
        "name": "Sunninghill"
      }
    ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cleaning Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Curtain Dry Cleaning"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mattress Sanitization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Upholstery Cleaning"
              }
            }
          ]
        }
      }
    ]
  };

  const areas = [
    "Hyde Park",
    "Morningside",
    "Bryanston",
    "Rivonia",
    "Sunninghill",
    "Sandhurst",
    "Atholl",
    "Wendywood",
    "Illovo",
    "Inanda"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Breadcrumbs */}
        <section className="bg-gray-50 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary flex items-center gap-1">
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <Link href="/#areas" className="hover:text-primary">Areas</Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Sandton</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPinIcon className="h-10 w-10" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Sandton
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">
              Professional Curtain Cleaning Service
            </h2>
            <p className="text-xl mb-8">
              On-site dry cleaning, mattress sanitization & upholstery cleaning in Sandton and surrounding areas
            </p>
            <a 
              href="tel:0716226753"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <PhoneIcon className="h-6 w-6" />
              Call Now: 071 622 6753
            </a>
          </div>
        </section>

        {/* Local Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services in Sandton
              </h2>
              <p className="text-xl text-gray-700">
                Professional cleaning solutions for homes, offices, and hotels in Sandton
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link 
                href="/services/curtain-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all group"
              >
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary-dark mb-3">
                  Curtain Dry Cleaning
                </h3>
                <p className="text-gray-700 mb-4">
                  On-site curtain cleaning service - no takedown, no shrinkage. Perfect for Sandton homes and offices.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Hardware repair included</span>
                  </li>
                </ul>
              </Link>

              <Link 
                href="/services/mattress-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all group"
              >
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary-dark mb-3">
                  Mattress Sanitization
                </h3>
                <p className="text-gray-700 mb-4">
                  Deep cleaning for hotels, guest houses, and homes in Sandton. Clinical sanitization process.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Removes dust mites & bacteria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Ready to use same day</span>
                  </li>
                </ul>
              </Link>

              <Link 
                href="/services/upholstery-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all group"
              >
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary-dark mb-3">
                  Upholstery Cleaning
                </h3>
                <p className="text-gray-700 mb-4">
                  Professional furniture cleaning for Sandton residences and corporate offices.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Dry & wet cleaning options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Fabric protection available</span>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us in Sandton */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Sandton Residents Choose Us
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
                <p className="text-gray-700">
                  Extensive experience serving Sandton's residential estates, hotels, and corporate offices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Fast Response</h3>
                <p className="text-gray-700">
                  Quick service throughout Sandton, Hyde Park, Morningside, and surrounding areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Trusted by Hotels</h3>
                <p className="text-gray-700">
                  Preferred service provider for leading Sandton hotels and guest houses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Corporate Contracts</h3>
                <p className="text-gray-700">
                  Regular maintenance contracts available for Sandton office parks and businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-gray-700">
                  Work around your schedule with evening and weekend appointments available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
                <p className="text-gray-700">
                  All work guaranteed against shrinkage and damage - your satisfaction assured.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sandton Areas We Serve
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {areas.map((area) => (
                <div
                  key={area}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center font-semibold text-gray-700"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="text-center text-gray-700 text-lg">
              Don't see your area? We serve all of Sandton and surrounding suburbs. 
              <a href="tel:0716226753" className="text-primary hover:text-primary-dark font-semibold ml-1">
                Call us to confirm
              </a>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Book Your Sandton Cleaning Service?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Kathy Dunlop for a free on-site quotation in Sandton
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href="tel:0716226753"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="h-6 w-6" />
                Mobile: 071 622 6753
              </a>
              <a 
                href="tel:0615222037"
                className="bg-secondary text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="h-6 w-6" />
                Office: 061 522 2037
              </a>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              We Also Serve Nearby Johannesburg Areas
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['Fourways', 'Rosebank', 'Randburg', 'Midrand', 'Bedfordview', 'Bryanston', 'Parkhurst', 'Melrose'].map((area) => (
                <div
                  key={area}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center font-semibold text-gray-700"
                >
                  {area}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/#areas"
                className="text-primary hover:text-primary-dark font-semibold text-lg"
              >
                View all areas we serve →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
