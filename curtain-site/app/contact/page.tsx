import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Quote for Curtain Cleaning in Johannesburg",
  description: "Get a free quote for curtain cleaning, mattress sanitization, and upholstery cleaning in Johannesburg. Call 071 622 6753 or fill out our contact form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "On The Spot Curtain Cleaning",
      "telephone": "+27716226753",
      "email": "info@curtaincleaning.org",
      "url": "https://www.curtainclean.co.za",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Johannesburg",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
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
              <span className="text-gray-900 font-semibold">Contact</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Contact us for a free on-site quotation in Johannesburg
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5 text-primary" />
                      Phone Numbers
                    </h3>
                    <div className="space-y-2 ml-7">
                      <a 
                        href="tel:0716226753"
                        className="block text-gray-700 hover:text-primary font-semibold"
                      >
                        Mobile: 071 622 6753
                      </a>
                      <a 
                        href="tel:0615222037"
                        className="block text-gray-700 hover:text-primary font-semibold"
                      >
                        Office: 061 522 2037
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <EnvelopeIcon className="h-5 w-5 text-primary" />
                      Email
                    </h3>
                    <a 
                      href="mailto:info@curtaincleaning.org"
                      className="block text-gray-700 hover:text-primary font-semibold ml-7"
                    >
                      info@curtaincleaning.org
                    </a>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Website</h3>
                    <a 
                      href="https://www.curtainclean.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:text-primary font-semibold"
                    >
                      www.curtainclean.co.za
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Service Areas</h3>
                  <p className="text-gray-700 mb-3">
                    We serve all of Johannesburg and surrounding areas, including:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Sandton & Hyde Park</li>
                    <li>• Fourways & Bryanston</li>
                    <li>• Rosebank & Morningside</li>
                    <li>• Randburg & Parkhurst</li>
                    <li>• Midrand & Sunninghill</li>
                    <li>• And all other Johannesburg suburbs</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Request a Free Quote
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Happens Next?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">We Contact You</h3>
                <p className="text-gray-700">
                  We'll reach out within 24 hours to discuss your needs and schedule a visit.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Free On-Site Quote</h3>
                <p className="text-gray-700">
                  We visit your location to assess and provide an accurate, no-obligation quote.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent text-gray-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Professional Service</h3>
                <p className="text-gray-700">
                  Once approved, we schedule and complete the cleaning at your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
