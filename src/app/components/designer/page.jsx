"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OurDesigner() {
  // Animation variants for the designers' cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      rotate: -5,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Hover animation for cards
  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for the button
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="py-16  to-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-[#C89756] mb-6"
      >
        Meet Our Designers
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm text-[#ccaf8d] mb-12 max-w-2xl mx-auto"
      >
        Our team of passionate experts transforms your vision into stunning and impactful designs.
      </motion.p>

      {/* Designer Cards */}
      <div className="flex justify-center gap-8 flex-wrap px-4">
        {/* Designer 1 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg w-64 text-center overflow-hidden relative"
        >
          <motion.img
            src="/assets/designer1.jpg"
            alt="Sophia Michela"
            className="w-full rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Sophia Michela</h3>
          <motion.div
            variants={cardHoverVariants}
            className="absolute inset-0 bg-black bg-opacity-20 rounded-lg hidden group-hover:block transition-opacity duration-300"
          ></motion.div>
        </motion.div>

        {/* Designer 2 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg w-64 text-center overflow-hidden relative"
        >
          <motion.img
            src="/assets/designer2.jpg"
            alt="Elina Parker"
            className="w-full rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Elina Parker</h3>
          <motion.div
            variants={cardHoverVariants}
            className="absolute inset-0 bg-black bg-opacity-20 rounded-lg hidden group-hover:block transition-opacity duration-300"
          ></motion.div>
        </motion.div>

        {/* Designer 3 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg w-64 text-center overflow-hidden relative"
        >
          <motion.img
            src="/assets/designer3.jpg"
            alt="Abid Bhuyan"
            className="w-full rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Abid Bhuyan</h3>
          <motion.div
            variants={cardHoverVariants}
            className="absolute inset-0 bg-black bg-opacity-20 rounded-lg hidden group-hover:block transition-opacity duration-300"
          ></motion.div>
        </motion.div>
      </div>

      {/* Contact Us Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        className="mt-12 px-8 py-3 bg-[#C89756] text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      >
        Contact Us
      </motion.button>
    </div>
  );
}