import React from 'react';
import Image from 'next/image';
import AboutImage from "../../../../public/assets/about1.jpg";

export default function AboutUsPage() {
  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={AboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg"
              priority // Preload the image for better performance
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Love for <span className="text-indigo-600">Interior Design</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team dedicated to creating stunning interiors. We have extensive experience in interior design and a broad knowledge of the latest trends and techniques.
            </p>
            <p className="text-lg text-gray-600">
              At Interior, we blend creativity and functionality to transform spaces into stunning environments. Our team of passionate interior designers is dedicated to bringing your vision to life with personalized, stylish, and innovative solutions. Let us make your dream space a reality.
            </p>
            <button type="button" className=" mt-4 relative inline-block h-14 w-40 overflow-hidden border-[#C89756] px-5 py-2 text-[#C89756] shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#C89756] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#C89756] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}