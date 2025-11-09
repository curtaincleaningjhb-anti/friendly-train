import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Mattress Sanitization & Deep Cleaning Johannesburg | On-Site Service",
  description: "Professional on-site mattress sanitization in Johannesburg. Clinical deep cleaning removes dust mites, bacteria & allergens. Healthier sleeping environment. Call 071 622 6753 for quote.",
  keywords: [
    "mattress cleaning Johannesburg",
    "mattress sanitization",
    "deep mattress cleaning",
    "dust mite removal",
    "mattress cleaning service"
  ],
  alternates: {
    canonical: "/services/mattress-cleaning",
  },
  openGraph: {
    title: "Mattress Sanitization & Deep Cleaning Johannesburg",
    description: "Professional on-site mattress sanitization. Clinical deep cleaning removes dust mites, bacteria & allergens.",
    url: "https://www.curtainclean.co.za/services/mattress-cleaning",
  },
};

export default function MattressCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mattress Cleaning and Sanitization",
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
    "description": "Professional on-site mattress deep cleaning and sanitization service that removes dust mites, bacteria, and allergens.",
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
              <span className="text-gray-900 font-semibold">Mattress Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Mattress Sanitization
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Clinical deep cleaning that removes dust mites, bacteria, and allergens
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
                Why Your Mattress Needs Professional Cleaning
              </h2>
              
              <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Did you know?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• The average person sheds <strong>4.5kg of skin</strong> annually into their mattress</li>
                  <li>• A mattress can contain <strong>up to 2 million dust mites</strong></li>
                  <li>• Dust mites feed on dead skin cells and produce allergens</li>
                  <li>• Regular cleaning can extend your mattress life by up to <strong>double</strong></li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Our professional mattress sanitization service uses a clinical deep-cleaning process to eliminate 
                dust mites, bacteria, allergens, and accumulated organic matter. The result is a hygienically clean, 
                healthier sleeping environment for you and your family.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Our Mattress Cleaning Process
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h4 className="font-bold text-lg mb-2">Inspection & Assessment</h4>
                  <p className="text-gray-700">
                    We assess your mattress condition and identify problem areas requiring special attention.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <h4 className="font-bold text-lg mb-2">Deep Vacuum Extraction</h4>
                  <p className="text-gray-700">
                    High-powered extraction removes dust mites, dead skin cells, and accumulated debris.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <h4 className="font-bold text-lg mb-2">Sanitization Treatment</h4>
                  <p className="text-gray-700">
                    Clinical-grade sanitizing agents eliminate bacteria, viruses, and allergens.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <h4 className="font-bold text-lg mb-2">Fast Drying</h4>
                  <p className="text-gray-700">
                    Your mattress is ready to use the same day - minimal disruption to your routine.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Health Benefits
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong>Allergy Relief:</strong> Eliminates dust mites and allergens that trigger asthma and allergies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong>Improved Sleep Quality:</strong> Cleaner sleeping environment promotes better, healthier sleep
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong>Odor Removal:</strong> Eliminates bacteria that cause unpleasant mattress odors
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong>Extended Mattress Life:</strong> Regular cleaning prevents premature breakdown and extends lifespan
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong>Hygienic Environment:</strong> Creates a cleaner, healthier bedroom for your family
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Recommended Cleaning Schedule
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Residential</h4>
                  <p className="text-2xl font-bold mb-2">Every 6 months</p>
                  <p className="text-sm">For optimal health and mattress longevity</p>
                </div>
                <div className="bg-secondary text-white p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Hotels</h4>
                  <p className="text-2xl font-bold mb-2">Every 3 months</p>
                  <p className="text-sm">High turnover requires frequent sanitization</p>
                </div>
                <div className="bg-accent text-gray-900 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Guest Houses</h4>
                  <p className="text-2xl font-bold mb-2">Every 4 months</p>
                  <p className="text-sm">Maintain guest satisfaction and hygiene</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Perfect For
              </h3>

              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Residential homes and apartments</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Hotels and lodges</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Guest houses and B&Bs</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Hospitals and care facilities</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Student accommodation</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-4 rounded">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Corporate housing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready for a Healthier Sleeping Environment?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today for professional mattress sanitization
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
                href="/services/curtain-cleaning"
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-6 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">Curtain Cleaning</h3>
                <p className="text-gray-700">
                  On-site curtain dry cleaning service - no takedown required.
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
