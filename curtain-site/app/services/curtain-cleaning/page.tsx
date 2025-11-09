import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Curtain Cleaning Johannesburg | Professional On-Site Dry Cleaning Service",
  description: "Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage, no hassle. Hardware cleaning & repair included. Call +27 75 011 9200 for a free quote.",
  keywords: [
    "curtain cleaning Johannesburg",
    "on-site curtain cleaning",
    "curtain dry cleaning",
    "curtain cleaning service",
    "professional curtain cleaning"
  ],
  alternates: {
    canonical: "/services/curtain-cleaning",
  },
  openGraph: {
    title: "Curtain Cleaning Johannesburg | Professional On-Site Dry Cleaning Service",
    description: "Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage.",
    url: "https://www.curtainclean.co.za/services/curtain-cleaning",
  },
};

export default function CurtainCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/services/curtain-cleaning#breadcrumb",
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
            "name": "Curtain Cleaning",
            "item": "https://www.curtainclean.co.za/services/curtain-cleaning"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.curtainclean.co.za/services/curtain-cleaning#service",
        "serviceType": "Curtain Cleaning",
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
        "description": "Professional on-site curtain dry cleaning service in Johannesburg. We clean curtains where they hang without takedown.",
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
              <span className="text-gray-900 font-semibold">Curtain Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              On-Site Curtain Dry Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We clean curtains where they hang - No takedown, No shrinkage, No hassle
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

        {/* Service Details */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Curtain Dry Cleaning Service
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                At On The Spot Curtain Cleaning, we specialize in dry cleaning curtains and blinds right where they hang. 
                Our innovative on-site service means no more hassle of taking down your curtains, no risk of shrinkage, 
                and no disruption to your home or business operations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What's Included in Our Service
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircleIcon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-lg mb-2">No Takedown Required</h4>
                  <p className="text-gray-700">
                    Curtains are cleaned exactly where they hang, saving you time and effort.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircleIcon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-lg mb-2">Hardware Service & Repair</h4>
                  <p className="text-gray-700">
                    We clean, service, and repair all curtain hardware as part of the process.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircleIcon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-lg mb-2">All Fabric Types</h4>
                  <p className="text-gray-700">
                    Safe for all curtain fabrics including delicate silks and heavy velvets.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircleIcon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-lg mb-2">No Shrinkage Guarantee</h4>
                  <p className="text-gray-700">
                    All work is guaranteed against shrinkage and fabric damage.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Why Choose On-Site Curtain Cleaning?
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Convenience:</strong> No need to take curtains down or wait days for them to be returned
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Cost-Effective:</strong> Our on-site service is less expensive than traditional dry cleaning
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>No Disruption:</strong> Work is done at times convenient for you with minimal impact
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Professional Results:</strong> Trained staff using professional-grade equipment
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Hardware Care:</strong> Unique service includes cleaning and repairing curtain tracks, rings, and mechanisms
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Our Process
              </h3>

              <ol className="space-y-4 mb-8 list-decimal list-inside">
                <li className="text-gray-700">
                  <strong>Initial Inspection:</strong> We assess your curtains and hardware condition
                </li>
                <li className="text-gray-700">
                  <strong>Hardware Service:</strong> Clean and repair tracks, rings, and mechanisms
                </li>
                <li className="text-gray-700">
                  <strong>Dry Cleaning:</strong> Professional on-site cleaning using specialized equipment
                </li>
                <li className="text-gray-700">
                  <strong>Final Inspection:</strong> Quality check to ensure perfect results
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Perfect For
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Residential Homes</h4>
                  <p className="text-sm">Keep your home curtains fresh and clean</p>
                </div>
                <div className="bg-secondary text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Hotels & Hospitality</h4>
                  <p className="text-sm">Same-day service means no room downtime</p>
                </div>
                <div className="bg-accent text-gray-900 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Corporate Offices</h4>
                  <p className="text-sm">Minimal disruption to business operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Your Curtains Professionally Cleaned?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today for a free on-site quotation
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href="tel:0716226753"
                className="bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
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

        {/* Related Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Services You Might Need
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/services/mattress-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">Mattress Sanitization</h3>
                <p className="text-gray-700">
                  Deep clean and sanitize mattresses on-site for a healthier sleeping environment.
                </p>
              </Link>

              <Link 
                href="/services/upholstery-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">Upholstery Cleaning</h3>
                <p className="text-gray-700">
                  Professional dry/wet cleaning for all types of upholstered furniture.
                </p>
              </Link>

              <Link 
                href="/services/fabric-protection"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">Fabric Protection</h3>
                <p className="text-gray-700">
                  Masterguard treatment prevents stains and extends fabric life.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
