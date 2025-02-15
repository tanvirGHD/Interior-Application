"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from "../../../../public/assets/about1.jpg";

export default function AboutUsPage() {
  return (
    <div className="py-28 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-gray-800 mb-6 text-center"
        >
          Our Love for <br />
          <span className="text-[#C89756]">Interior Design</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-sm text-gray-500 uppercase tracking-wider"
        >
          ABOUT US
        </motion.p>
        <hr className="border-t-2 border-[#C89756] w-24 mx-auto my-6" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-center text-xs text-gray-500 mb-12"
        >
          We are a passionate team dedicated to creating stunning interiors.
        </motion.p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-auto"
          >
            <Image
              src={AboutImage}
              alt="About Us"
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              priority // Preload the image for better performance
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a passionate team dedicated to creating stunning interiors.
              With extensive experience in interior design and a deep
              understanding of the latest trends and techniques, we bring your
              vision to life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Interior, we blend creativity and functionality to transform
              spaces into stunning environments. Our team of passionate interior
              designers is committed to delivering personalized, stylish, and
              innovative solutions. Let us make your dream space a reality.
            </p>
            {/* Button with Hover Effect */}
            <button
              type="button"
              className="relative inline-block h-14 w-48 overflow-hidden border-2 border-[#C89756] px-6 py-2 text-black font-medium rounded-lg shadow-lg group hover:text-white transition-all duration-500"
            >
              <span className="relative z-10 uppercase text-sm">About Us</span>
              <span className="absolute inset-0 -z-10 bg-[#C89756] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}








