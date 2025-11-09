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
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">On The Spot</h3>
            <p className="text-gray-400 mb-4">
              Professional on-site curtain and soft furnishing cleaning services in Johannesburg since 1998.
            </p>
            <div className="space-y-2 mb-4">
              <a 
                href="tel:+27750119200"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+27 75 011 9200</span>
              </a>
              <a 
                href="mailto:info@curtaincleaning.co.za"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@curtaincleaning.co.za</span>
              </a>
            </div>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/booking/deposit" className="block text-gray-400 hover:text-white transition-colors">
                Book Online
              </Link>
            </div>
          </div>

          {/* Cleaning Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Cleaning Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/curtain-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Curtain Dry Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/mattress-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Mattress Sanitization
                </Link>
              </li>
              <li>
                <Link href="/services/upholstery-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Upholstery Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/rug-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Persian Rug Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/fabric-protection" className="text-gray-400 hover:text-white transition-colors">
                  Fabric Protection
                </Link>
              </li>
              <li>
                <Link href="/services/fireproofing" className="text-gray-400 hover:text-white transition-colors">
                  Fireproofing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas - Johannesburg */}
          <div>
            <h4 className="text-lg font-bold mb-4">Sandton & Northern Suburbs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/sandton" className="text-gray-400 hover:text-white transition-colors">
                  Sandton & Hyde Park
                </Link>
              </li>
              <li>
                <Link href="/locations/fourways" className="text-gray-400 hover:text-white transition-colors">
                  Fourways & Bryanston
                </Link>
              </li>
              <li>
                <Link href="/locations/randburg" className="text-gray-400 hover:text-white transition-colors">
                  Randburg & Parkhurst
                </Link>
              </li>
              <li>
                <Link href="/locations/rosebank" className="text-gray-400 hover:text-white transition-colors">
                  Rosebank & Morningside
                </Link>
              </li>
              <li className="text-gray-400 pt-2">
                <MapPinIcon className="h-4 w-4 inline mr-1" />
                All Johannesburg Areas
              </li>
            </ul>
          </div>

          {/* Additional Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">More Service Areas</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Melrose</li>
              <li className="text-gray-400">Illovo</li>
              <li className="text-gray-400">Kramerville</li>
              <li className="text-gray-400">Sunninghill</li>
              <li className="text-gray-400">Woodmead</li>
              <li className="text-gray-400">Greenside</li>
              <li className="text-gray-400">Parktown</li>
              <li className="text-gray-400">Houghton</li>
            </ul>
          </div>

          {/* Quick Actions & Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/booking/deposit" className="text-gray-400 hover:text-white transition-colors">
                  Pay Deposit Online
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/27750119200?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20curtain%20cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Quote
                </a>
              </li>
              <li>
                <a 
                  href="tel:+27750119200"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Call Now
                </a>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-800">
              <h5 className="text-sm font-bold mb-2 text-white">Service Types</h5>
              <ul className="space-y-1 text-sm">
                <li className="text-gray-400">Residential Cleaning</li>
                <li className="text-gray-400">Commercial Cleaning</li>
                <li className="text-gray-400">Hospitality Services</li>
                <li className="text-gray-400">On-Site Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/people/Curtain-Cleaning-Johannesburg/61583188967013/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/onthespotcurtaincleaning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@onthespotcurtaincleaning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@onthespotcurtains"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a
              href="https://pinterest.com/onthespotcurtains"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://x.com/onthespotcurtains"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} On The Spot Curtain Cleaning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
