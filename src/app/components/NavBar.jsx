"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="bg-[#C89756] text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              INTERIOZ
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-gray-200 transition duration-300 ease-in-out"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-200 transition duration-300 ease-in-out"
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-200 transition duration-300 ease-in-out"
            >
              CONTACT
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-gray-200 transition duration-300 ease-in-out"
            >
              PORTFOLIO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#B8864F] transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#B8864F] transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              SERVICES
            </Link>
            <Link
              href="/interioz"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#B8864F] transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              INTERIOZ
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#B8864F] transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}