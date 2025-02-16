import React from "react";
import Image from "next/image";
import img from "../../../public/assets/residential.jpg";
import img1 from "../../../public/assets/renovation.jpg";
import img2 from "../../../public/assets/redesign.jpg";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl font-bold text-center text-[#C89756] mb-12">
        Our Services
      </h2>

      {/* Services Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1: Interior Design Consultation */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Background Image */}
          <div className="w-full h-48 relative">
            <Image
              src={img}
              alt="Interior Design"
              layout="fill"
              className="brightness-75"
            />
            <div className="absolute top-0 left-0 w-full h-48"></div>
          </div>
          <div className="p-6 relative z-10">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#C89756]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interior Design Consultation</h3>
            <p className="text-gray-600">
              Get personalized advice from our expert designers to transform your space into a functional and stylish environment.
            </p>
          </div>
        </div>

        {/* Service 2: Custom Furniture Design */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Background Image */}
          <div className="w-full h-48 relative">
            <Image
              src={img1}
              alt="Custom Furniture"
              layout="fill"
              className="brightness-75"
            />
            <div className="absolute top-0 left-0 w-full h-48 "></div>
          </div>
          <div className="p-6 relative z-10">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#C89756]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Furniture Design</h3>
            <p className="text-gray-600">
              Create bespoke furniture pieces tailored to your unique style and space requirements.
            </p>
          </div>
        </div>

        {/* Service 3: Space Planning */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Background Image */}
          <div className="w-full h-48 relative">
            <Image
              src={img2}
              alt="Space Planning"
              layout="fill"
              className="brightness-75"
            />
            <div className="absolute top-0 left-0 w-full h-48 "></div>
          </div>
          <div className="p-6 relative z-10">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#C89756]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Space Planning</h3>
            <p className="text-gray-600">
              Optimize your space with our expert planning services to ensure functionality and aesthetics.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          Ready to transform your space? Let us bring your vision to life!
        </p>
        <button className="px-8 py-3 bg-[#C89756] text-white rounded-lg font-medium hover:bg-[#b88746] transition-colors duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
}