import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#C89756] to-[#8B5F3B] text-white py-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About Us */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            Welcome to Interior Design Co., where creativity meets functionality.
            We specialize in crafting unique spaces that reflect your personality
            and lifestyle. Our team of experts is dedicated to delivering exceptional
            design solutions tailored to your needs.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-gray-300 transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300 transition-colors duration-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-gray-300 transition-colors duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition-colors duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300 transition-colors duration-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Newsletter Subscription */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">
            Stay updated with the latest trends, tips, and exclusive offers.
          </p>
          <form className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C89756]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#8B5F3B] text-white rounded-md hover:bg-[#734f30] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2v2m0 16v2m-6-9a6 6 0 1112 0m-6-9c-2.67 0-5 2.33-5 5v2m10-2v-2c0-2.67-2.33-5-5-5z"
            />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 4.5a3 3 0 100 6 3 3 0 000-6zm0 9.75a6 6 0 110-12 6 6 0 010 12z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12l-4 4 4 4m8-8l4-4-4-4M8 4l4 4-4 4M20 12l-4-4 4-4"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2v2m0 16v2m-6-9a6 6 0 1112 0m-6-9c-2.67 0-5 2.33-5 5v2m10-2v-2c0-2.67-2.33-5-5-5z"
            />
          </svg>
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Interior Design Co. All rights reserved.
        </p>
      </div>

      {/* Bottom Gradient Border */}
      <div className="mt-4">
        <div className="h-1 bg-gradient-to-r from-[#C89756] to-[#8B5F3B] rounded-full"></div>
      </div>
    </footer>
  );
}