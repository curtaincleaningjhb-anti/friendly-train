import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getServiceContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = await getServiceContent('upholstery-cleaning');
  
  const title = serviceData?.seoTitle || "Upholstery Cleaning Johannesburg | Sofas, Chairs & Couches";
  const description = serviceData?.seoDescription || "Expert upholstery cleaning Johannesburg. Deep clean sofas, chairs, couches, and fabric furniture. Stain removal, deodorizing & fabric protection. Call +27 75 011 9200 for a free quote.";

  return {
    title,
    description,
    keywords: [
      "upholstery cleaning Johannesburg",
      "sofa cleaning",
      "couch cleaning",
      "furniture cleaning",
      "fabric furniture cleaning",
      "upholstery stain removal"
    ],
    alternates: {
      canonical: "/services/upholstery-cleaning",
    },
    openGraph: {
      title,
      description,
      url: "https://www.curtainclean.co.za/services/upholstery-cleaning",
    },
  };
}

export default async function UpholsteryCleaningPage() {
  const serviceData = await getServiceContent('upholstery-cleaning');
  
  const pageTitle = serviceData?.title || "Professional Upholstery Cleaning in Johannesburg";
  const pageSubtitle = serviceData?.subtitle || "Deep clean your sofas, chairs, and fabric furniture to look and feel like new";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.curtainclean.co.za/services/upholstery-cleaning#breadcrumb",
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
            "name": "Upholstery Cleaning",
            "item": "https://www.curtainclean.co.za/services/upholstery-cleaning"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.curtainclean.co.za/services/upholstery-cleaning#service",
        "serviceType": "Upholstery Cleaning",
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
        "description": "Professional upholstery cleaning for sofas, chairs, and fabric furniture in Johannesburg.",
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
              <span className="text-gray-900 font-semibold">Upholstery Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {pageSubtitle}
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
              Why Choose Our Upholstery Cleaning?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Deep Cleaning Technology</h3>
                <p className="text-gray-700">
                  Professional equipment extracts dirt, dust, and allergens from deep within fabric fibers.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Stain & Odor Removal</h3>
                <p className="text-gray-700">
                  Specialized treatments for tough stains, pet odors, and stubborn marks.
                </p>
              </div>

              <div className="text-center">
                <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Drying Time</h3>
                <p className="text-gray-700">
                  Low-moisture cleaning methods ensure your furniture is dry and ready to use quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What We Clean
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Living Room Furniture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sofas & Sectionals</li>
                  <li>• Armchairs & Recliners</li>
                  <li>• Ottomans & Footstools</li>
                  <li>• Love Seats</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Dining & Office</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dining Room Chairs</li>
                  <li>• Office Chairs</li>
                  <li>• Bar Stools</li>
                  <li>• Bench Seating</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reception Area Seating</li>
                  <li>• Conference Room Chairs</li>
                  <li>• Restaurant Booths</li>
                  <li>• Hotel Furniture</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Specialty Items</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Antique Furniture</li>
                  <li>• Velvet & Silk Upholstery</li>
                  <li>• Microfiber & Suede</li>
                  <li>• Leather Care Available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Cleaning Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inspection & Pre-Treatment</h3>
                  <p className="text-gray-700">
                    We inspect fabric type, identify stains, and apply pre-treatment solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deep Extraction Cleaning</h3>
                  <p className="text-gray-700">
                    Professional hot water extraction removes embedded dirt and allergens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Stain Treatment & Deodorizing</h3>
                  <p className="text-gray-700">
                    Specialized spot treatment for tough stains and professional deodorizing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Grooming & Protection</h3>
                  <p className="text-gray-700">
                    Fabric grooming for a uniform finish, with optional Masterguard protection.
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
              Ready to Refresh Your Furniture?
            </h2>
            <p className="text-xl mb-8">
              Get a free quote for professional upholstery cleaning in Johannesburg
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
