import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional On-Site Curtain Cleaning in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              We clean curtains where they hang - No takedown, No shrinkage, No hassle
            </p>
            <p className="text-lg mb-8 text-blue-50">
              Serving Sandton, Bryanston, Fourways, Rosebank, and all Johannesburg suburbs
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+27750119200"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                <PhoneIcon className="h-6 w-6" />
                Call Now: +27 75 011 9200
              </a>
              <Link 
                href="#quote"
                className="bg-accent text-gray-900 hover:bg-green-400 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">No Shrinkage Guarantee</h3>
              <p className="text-gray-700">All work guaranteed against shrinkage and fabric damage</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">On-Site Service</h3>
              <p className="text-gray-700">Curtains cleaned where they hang - minimal disruption</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Same-Day Available</h3>
              <p className="text-gray-700">Hotels & offices can rent rooms same day</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Hardware Servicing</h3>
              <p className="text-gray-700">We repair and service all curtain hardware</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Cleaning Services
            </h2>
            <p className="text-xl text-gray-700">
              Complete soft furnishing care for homes, hotels, and offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curtain Cleaning */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">On-Site Curtain Dry Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Dry clean curtains and blinds where they hang. Our service includes repairing, servicing, and cleaning of curtain hardware.
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>No takedown required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Hardware cleaning & repair included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Works on all fabric types</span>
                </li>
              </ul>
              <Link href="/services/curtain-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Mattress Cleaning */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">Deep Mattress Sanitization</h3>
              <p className="text-gray-700 mb-4">
                Deep clean & sanitize mattresses on-site. Clinical process removes dust mites, bacteria, and allergens.
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Removes 4.5kg annual skin shedding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Eliminates dust mites & bacteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Healthier sleeping environment</span>
                </li>
              </ul>
              <Link href="/services/mattress-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Upholstery Cleaning */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">Upholstery Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Professional dry/wet cleaning for all upholstery. Regular maintenance extends furniture life.
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Dry & wet cleaning options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Masterguard fabric protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Doubles furniture lifespan</span>
                </li>
              </ul>
              <Link href="/services/upholstery-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Persian Rug Cleaning */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">Persian & Oriental Rugs</h3>
              <p className="text-gray-700 mb-4">
                Expert cleaning for valuable Persian and Oriental rugs. Professional care preserves beauty and value.
              </p>
              <Link href="/services/rug-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Fabric Protection */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">Masterguard Fabric Protection</h3>
              <p className="text-gray-700 mb-4">
                Prevents oil & water stains, extends beauty and wear life, reduces UV fading.
              </p>
              <Link href="/services/fabric-protection" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Fire Proofing */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-primary">Fire Proofing Services</h3>
              <p className="text-gray-700 mb-4">
                Professional fireproofing treatment for soft furnishings. Essential for commercial properties.
              </p>
              <Link href="/services/fireproofing" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why On The Spot?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Convenience</h3>
              <p className="text-blue-100">
                All work is done on-site at suitable and convenient times so minimum disruption is caused.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Cost Saving</h3>
              <p className="text-blue-100">
                Our on-site systems are less expensive than conventional dry cleaning without any inconvenience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Regular Maintenance</h3>
              <p className="text-blue-100">
                Extends the life of fabrics and mattresses by up to double. Cleaned rooms can be rented same day - NO DOWN TIME.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Hygiene</h3>
              <p className="text-blue-100">
                You can be assured all your soft furnishings and mattresses are hygienically clean and customer satisfaction is at an optimum.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Professional Expertise</h3>
              <p className="text-blue-100">
                All our services are performed by friendly, well-trained staff with unique ability to service and repair curtaining hardware.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Industry Leader</h3>
              <p className="text-blue-100">
                Highly beneficial to Hospitality, Corporate & Domestic industries where hygiene, cleanliness and appearance matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="quote" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Your Free On-Site Quotation
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact interior decorator and fabric expert, Kathy Dunlop
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a 
              href="tel:+27750119200"
              className="bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <PhoneIcon className="h-6 w-6" />
              Mobile: +27 75 011 9200
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="mailto:info@curtaincleaning.co.za"
              className="text-primary hover:text-primary-dark font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              <EnvelopeIcon className="h-6 w-6" />
              info@curtaincleaning.co.za
            </a>
            <a 
              href="https://www.curtainclean.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              www.curtainclean.co.za
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <MapPinIcon className="h-10 w-10 text-primary inline-block mr-2" />
              Areas We Serve in Johannesburg
            </h2>
            <p className="text-xl text-gray-700">
              Professional curtain cleaning across all major Johannesburg suburbs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Sandton', 'Bryanston', 'Fourways', 'Rosebank', 'Randburg', 'Midrand', 
              'Bedfordview', 'Hyde Park', 'Morningside', 'Rivonia', 'Sunninghill', 'Parkhurst'].map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg px-4 py-3 font-semibold text-gray-700 hover:text-primary transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
