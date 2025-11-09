import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Persian Rug Cleaning Johannesburg | Oriental & Area Rug Care",
  description: "Specialist Persian, Oriental & area rug cleaning Johannesburg. Hand-washing, deep cleaning & restoration for valuable rugs. Pet-safe products. Call +27 75 011 9200 for a free quote.",
  keywords: [
    "Persian rug cleaning Johannesburg",
    "Oriental rug cleaning",
    "area rug cleaning",
    "rug cleaning service",
    "antique rug cleaning",
    "rug restoration"
  ],
  alternates: {
    canonical: "/services/rug-cleaning",
  },
  openGraph: {
    title: "Persian Rug Cleaning Johannesburg | Oriental & Area Rug Care",
    description: "Specialist Persian & Oriental rug cleaning services in Johannesburg.",
    url: "https://www.curtainclean.co.za/services/rug-cleaning",
  },
};

export default function RugCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/services/rug-cleaning#breadcrumb",
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
            "name": "Services",
            "item": "https://www.curtainclean.co.za/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Rug Cleaning",
            "item": "https://www.curtainclean.co.za/services/rug-cleaning"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.curtainclean.co.za/services/rug-cleaning#service",
        "serviceType": "Rug Cleaning",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.curtainclean.co.za/#business",
          "name": "Curtain Cleaning Johannesburg",
          "telephone": "+27750119200",
          "email": "info@curtaincleaning.co.za",
          "url": "https://www.curtainclean.co.za",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Johannesburg",
            "addressRegion": "Gauteng",
            "addressCountry": "ZA"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Johannesburg"
            }
          ]
        },
        "description": "Specialist Persian, Oriental, and area rug cleaning services in Johannesburg.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "ZAR"
        }
      }
    ]
  };

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
              <Link href="/#services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Rug Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Persian & Oriental Rug Cleaning in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert care for your valuable Persian, Oriental, and area rugs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0716226753"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 071 622 6753
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Expert Rug Cleaning You Can Trust
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Hand-Washing Specialists</h3>
                <p className="text-gray-700">
                  Traditional hand-washing techniques for delicate and antique rugs.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Color-Safe Methods</h3>
                <p className="text-gray-700">
                  pH-balanced solutions that preserve vibrant colors and natural dyes.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pet & Eco-Friendly</h3>
                <p className="text-gray-700">
                  Safe, non-toxic cleaning products that are gentle on fibers and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Rugs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Rugs We Clean
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Persian & Oriental Rugs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hand-knotted Persian rugs</li>
                  <li>• Turkish & Middle Eastern rugs</li>
                  <li>• Silk rugs</li>
                  <li>• Antique & heirloom pieces</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Modern & Contemporary</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Area rugs</li>
                  <li>• Designer rugs</li>
                  <li>• Shag & high-pile rugs</li>
                  <li>• Synthetic fiber rugs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Natural Fiber Rugs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wool rugs</li>
                  <li>• Jute & sisal rugs</li>
                  <li>• Cotton dhurrie rugs</li>
                  <li>• Natural fiber blends</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Specialty Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pet stain & odor removal</li>
                  <li>• Water damage restoration</li>
                  <li>• Moth & insect treatment</li>
                  <li>• Rug repair & binding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Rug Cleaning Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inspection & Assessment</h3>
                  <p className="text-gray-700">
                    We examine fiber type, dye stability, construction, and identify any damage or special care needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dust & Soil Removal</h3>
                  <p className="text-gray-700">
                    Professional dusting equipment removes embedded dirt and sand from deep within the pile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gentle Washing</h3>
                  <p className="text-gray-700">
                    Hand-washing or controlled machine washing with pH-balanced, fiber-appropriate solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Controlled Drying & Finishing</h3>
                  <p className="text-gray-700">
                    Climate-controlled drying prevents shrinkage, followed by grooming and final inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Preserve the Beauty of Your Valuable Rugs
            </h2>
            <p className="text-xl mb-8">
              Get expert rug cleaning services in Johannesburg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0716226753"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 071 622 6753
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
