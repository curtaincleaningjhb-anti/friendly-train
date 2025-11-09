import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Cleaning Tips & Special Offers
            </h2>
            <p className="text-gray-100 mb-6">
              Subscribe to our newsletter for seasonal cleaning advice, exclusive discounts, and service updates.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">On The Spot Curtain Cleaning</h3>
            <p className="text-gray-400 mb-4">
              Professional on-site curtain and soft furnishing cleaning services in Johannesburg since 1998.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:0716226753"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>071 622 6753</span>
              </a>
              <a 
                href="mailto:info@curtaincleaning.org"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@curtaincleaning.org</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/curtain-cleaning" className="text-gray-400 hover:text-white">
                  Curtain Dry Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/mattress-cleaning" className="text-gray-400 hover:text-white">
                  Mattress Sanitization
                </Link>
              </li>
              <li>
                <Link href="/services/upholstery-cleaning" className="text-gray-400 hover:text-white">
                  Upholstery Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/rug-cleaning" className="text-gray-400 hover:text-white">
                  Persian Rug Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/fabric-protection" className="text-gray-400 hover:text-white">
                  Fabric Protection
                </Link>
              </li>
              <li>
                <Link href="/services/fireproofing" className="text-gray-400 hover:text-white">
                  Fireproofing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/sandton" className="text-gray-400 hover:text-white">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/locations/fourways" className="text-gray-400 hover:text-white">
                  Fourways
                </Link>
              </li>
              <li>
                <Link href="/locations/rosebank" className="text-gray-400 hover:text-white">
                  Rosebank
                </Link>
              </li>
              <li>
                <Link href="/locations/randburg" className="text-gray-400 hover:text-white">
                  Randburg
                </Link>
              </li>
              <li className="text-gray-400">
                <MapPinIcon className="h-4 w-4 inline mr-1" />
                All Johannesburg Suburbs
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/27716226753?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20curtain%20cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a 
                  href="https://www.curtainclean.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Main Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} On The Spot Curtain Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
