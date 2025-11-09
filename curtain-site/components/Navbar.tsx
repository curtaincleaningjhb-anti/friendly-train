"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const services = [
    { name: "Curtain Dry Cleaning", href: "/services/curtain-cleaning" },
    { name: "Mattress Sanitization", href: "/services/mattress-cleaning" },
    { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
    { name: "Persian Rug Cleaning", href: "/services/rug-cleaning" },
    { name: "Fabric Protection", href: "/services/fabric-protection" },
    { name: "Fireproofing Services", href: "/services/fireproofing" },
  ];

  const locations = [
    { name: "Sandton", href: "/locations/sandton" },
    { name: "Fourways", href: "/locations/fourways" },
    { name: "Rosebank", href: "/locations/rosebank" },
    { name: "Randburg", href: "/locations/randburg" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Curtain Cleaning</span>
            <span className="text-xl font-normal text-gray-700 ml-2">Johannesburg</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-semibold transition-colors ${
                isActive("/") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-semibold text-gray-700 hover:text-primary flex items-center gap-1">
                Services
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="font-semibold text-gray-700 hover:text-primary flex items-center gap-1">
                Locations
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`font-semibold transition-colors ${
                isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/booking/deposit"
              className={`font-semibold transition-colors ${
                isActive("/booking/deposit") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Book Online
            </Link>

            <a
              href="tel:+27750119200"
              className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              <PhoneIcon className="h-5 w-5" />
              +27 75 011 9200
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services Mobile */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold"
                >
                  Services
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations Mobile */}
              <div>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold"
                >
                  Locations
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                {locationsOpen && (
                  <div className="pl-4 space-y-1">
                    {locations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/booking/deposit"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Online
              </Link>

              <a
                href="tel:+27750119200"
                className="block mx-4 mt-4 bg-primary text-white hover:bg-primary-dark px-4 py-3 rounded-lg font-semibold transition-all text-center"
              >
                <PhoneIcon className="h-5 w-5 inline mr-2" />
                +27 75 011 9200
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
