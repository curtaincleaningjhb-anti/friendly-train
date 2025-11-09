import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, HomeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Curtain Cleaning Fourways | Professional On-Site Service",
  description: "Professional curtain cleaning in Fourways, Johannesburg. On-site service with no takedown. Also mattress, upholstery, and rug cleaning. Call 071 622 6753.",
  keywords: [
    "curtain cleaning Fourways",
    "mattress cleaning Fourways",
    "upholstery cleaning Fourways",
    "Bryanston curtain cleaning",
    "Fourways cleaning service"
  ],
  alternates: {
    canonical: "/locations/fourways",
  },
};

export default function FourwaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "On The Spot Curtain Cleaning - Fourways",
    "telephone": "+27716226753",
    "email": "info@curtaincleaning.org",
    "url": "https://www.curtainclean.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fourways",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "City",
      "name": "Fourways"
    }
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
              <span className="text-gray-900 font-semibold">Fourways</span>
            </nav>
          </div>
        </section>

        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPinIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Curtain Cleaning in Fourways
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional on-site cleaning for Fourways, Bryanston & surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0716226753" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all">
                <PhoneIcon className="h-5 w-5" />
                Call 071 622 6753
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Serving Fourways & Surrounding Areas
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
                  <li>• Fourways</li>
                  <li>• Bryanston</li>
                  <li>• Lonehill</li>
                  <li>• Douglasdale</li>
                  <li>• Sunninghill</li>
                  <li>• Witkoppen</li>
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
            <p className="text-xl mb-8">Serving Fourways with professional cleaning services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0716226753" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all">
                <PhoneIcon className="h-5 w-5" />
                Call 071 622 6753
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
