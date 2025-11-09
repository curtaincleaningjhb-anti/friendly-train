import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Fabric Protection Johannesburg | Masterguard Stain & Spill Protection",
  description: "Professional Masterguard fabric protection Johannesburg for curtains, upholstery & carpets. Protect against stains, spills & wear. Call +27 75 011 9200 for a free quote.",
  keywords: [
    "fabric protection Johannesburg",
    "Masterguard",
    "stain protection",
    "fabric guard",
    "upholstery protection",
    "carpet protection"
  ],
  alternates: {
    canonical: "/services/fabric-protection",
  },
  openGraph: {
    title: "Fabric Protection Johannesburg | Masterguard Stain & Spill Protection",
    description: "Professional fabric protection services for curtains, upholstery, and carpets in Johannesburg.",
    url: "https://www.curtainclean.co.za/services/fabric-protection",
  },
};

export default function FabricProtectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/services/fabric-protection#breadcrumb",
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
            "name": "Fabric Protection",
            "item": "https://www.curtainclean.co.za/services/fabric-protection"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.curtainclean.co.za/services/fabric-protection#service",
        "serviceType": "Fabric Protection",
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
        "description": "Professional Masterguard fabric protection services for curtains, upholstery, and carpets in Johannesburg.",
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
              <span className="text-gray-900 font-semibold">Fabric Protection</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheckIcon className="h-20 w-20 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Masterguard Fabric Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Advanced protection against stains, spills, and everyday wear for your fabrics
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
              Why Apply Fabric Protection?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Stain Resistance</h3>
                <p className="text-gray-700">
                  Creates an invisible barrier that repels liquids and prevents stains from setting.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Extended Fabric Life</h3>
                <p className="text-gray-700">
                  Protects against wear, fading, and dirt accumulation, extending the life of your fabrics.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Easier Cleaning</h3>
                <p className="text-gray-700">
                  Protected fabrics clean easier and require less frequent deep cleaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Protect */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What We Protect
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Window Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Curtains & Drapes</li>
                  <li>• Roman Blinds</li>
                  <li>• Fabric Valances</li>
                  <li>• Swags & Pelmets</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Upholstery</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sofas & Armchairs</li>
                  <li>• Dining Room Chairs</li>
                  <li>• Office Furniture</li>
                  <li>• Fabric Headboards</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Floor Coverings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Carpets</li>
                  <li>• Area Rugs</li>
                  <li>• Runners</li>
                  <li>• Carpet Tiles</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hotel Room Fabrics</li>
                  <li>• Restaurant Seating</li>
                  <li>• Office Reception Areas</li>
                  <li>• Conference Room Fabrics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How Masterguard Protection Works
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Microscopic Barrier</h3>
                  <p className="text-gray-700">
                    Masterguard creates an invisible, breathable barrier at the molecular level around each fiber.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Liquid Repellency</h3>
                  <p className="text-gray-700">
                    Spills bead up on the surface instead of soaking in, giving you time to blot them away.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Breathable & Safe</h3>
                  <p className="text-gray-700">
                    Allows fabrics to breathe naturally while being non-toxic and safe for homes with children and pets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Long-Lasting Protection</h3>
                  <p className="text-gray-700">
                    Protection lasts for years with normal use and survives multiple cleanings.
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
              Protect Your Investment
            </h2>
            <p className="text-xl mb-8">
              Add Masterguard fabric protection to keep your fabrics looking new longer
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
