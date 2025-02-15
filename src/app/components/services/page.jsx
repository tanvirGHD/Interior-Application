"use client"; // Ensure this is a client component
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import residential from "../../../../public/assets/residential.jpg";
import planning from "../../../../public/assets/planning.jpg";
import renovation from "../../../../public/assets/renovation.jpg";
import redesign from "../../../../public/assets/redesign.jpg";

export default function ServicesPage() {
  // Category data
  const categories = [
    {
      name: "Residential",
      image: residential,
    },
    {
      name: "Planning",
      image: planning,
    },
    {
      name: "Renovation",
      image: renovation,
    },
    {
      name: "Redesign",
      image: redesign,
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-6xl font-bold text-[#C89756] mb-4"
          >
            Expertly Crafting <br /> Your Dream
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            className="text-sm text-gray-500 mb-6"
          >
            Services
          </motion.h1>
          <motion.hr
            variants={fadeInUp}
            className="border-t-2 border-[#C89756] w-24 mx-auto my-6"
          />
          <motion.p
            variants={fadeInUp}
            className="text-xs text-gray-600 max-w-2xl mx-auto"
          >
            We turn your interior design dreams into reality with our
            specialized touch in elegant and functional spaces.
          </motion.p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Category Name */}
                <h2 className="text-2xl font-bold text-white text-center">
                  {category.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}