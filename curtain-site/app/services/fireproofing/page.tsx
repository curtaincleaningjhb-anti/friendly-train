import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon, FireIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Fireproofing Services Johannesburg | Fire Retardant Treatment for Fabrics",
  description: "Professional fireproofing and fire retardant treatments for curtains, drapes, and soft furnishings in Johannesburg. Compliance certification available. Call 071 622 6753.",
  keywords: [
    "fireproofing Johannesburg",
    "fire retardant treatment",
    "flame retardant",
    "curtain fireproofing",
    "fire safety compliance",
    "commercial fireproofing"
  ],
  alternates: {
    canonical: "/services/fireproofing",
  },
  openGraph: {
    title: "Fireproofing Services Johannesburg | Fire Retardant Treatment",
    description: "Professional fireproofing and fire retardant treatments for fabrics.",
    url: "https://www.curtainclean.co.za/services/fireproofing",
  },
};

export default function FireproofingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fireproofing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "On The Spot Curtain Cleaning",
      "telephone": "+27716226753",
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
    "description": "Professional fireproofing and fire retardant treatment services for curtains and soft furnishings.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "ZAR"
    }
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
              <span className="text-gray-900 font-semibold">Fireproofing</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FireIcon className="h-20 w-20 mx-auto mb-6 text-red-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Fireproofing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Fire retardant treatment for curtains and soft furnishings to meet safety regulations
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
              Why Fireproofing Is Essential
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  Meet fire safety regulations for commercial buildings, hotels, restaurants, and public spaces.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Enhanced Safety</h3>
                <p className="text-gray-700">
                  Slows down flame spread, providing crucial extra time for evacuation in case of fire.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Insurance Requirements</h3>
                <p className="text-gray-700">
                  Many insurance policies require fire retardant treatment for certain commercial properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Fireproofing */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Who Needs Fireproofing?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Hospitality Industry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hotels & Guest Houses</li>
                  <li>• Bed & Breakfasts</li>
                  <li>• Lodges & Resorts</li>
                  <li>• Conference Venues</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Office Buildings</li>
                  <li>• Shopping Centers</li>
                  <li>• Restaurants & Cafes</li>
                  <li>• Retail Stores</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Public Buildings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schools & Universities</li>
                  <li>• Hospitals & Clinics</li>
                  <li>• Theaters & Cinemas</li>
                  <li>• Government Buildings</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Residential Properties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apartment Complexes</li>
                  <li>• Retirement Villages</li>
                  <li>• Student Residences</li>
                  <li>• High-Value Homes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Fireproof */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Materials We Treat
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Window Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Curtains & Drapes</li>
                  <li>• Roman Blinds</li>
                  <li>• Fabric Blinds</li>
                  <li>• Stage Curtains</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Soft Furnishings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Upholstered Furniture</li>
                  <li>• Cushions & Pillows</li>
                  <li>• Bed Valances</li>
                  <li>• Table Linens</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Decorative Items</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wall Hangings</li>
                  <li>• Banners & Flags</li>
                  <li>• Exhibition Displays</li>
                  <li>• Fabric Artwork</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Commercial Fabrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ceiling Draping</li>
                  <li>• Room Dividers</li>
                  <li>• Event Decor</li>
                  <li>• Acoustic Panels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Fireproofing Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Assessment & Quotation</h3>
                  <p className="text-gray-700">
                    We assess your fabrics, determine compliance requirements, and provide a detailed quote.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Application</h3>
                  <p className="text-gray-700">
                    Fire retardant chemicals are professionally applied using specialized equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Verification</h3>
                  <p className="text-gray-700">
                    Treated fabrics are tested to ensure they meet required fire safety standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certification</h3>
                  <p className="text-gray-700">
                    Compliance certificates are issued for your records and insurance purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Important Information
            </h2>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Treatment Duration</h3>
              <p className="text-gray-700 mb-4">
                Fire retardant treatments are not permanent and may need reapplication after:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional cleaning (treatment may be removed)</li>
                <li>• 12-24 months for most commercial applications</li>
                <li>• Heavy exposure to sunlight or moisture</li>
                <li>• As specified by regulations or insurance requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ensure Your Property Meets Fire Safety Standards
            </h2>
            <p className="text-xl mb-8">
              Professional fireproofing services with compliance certification
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
