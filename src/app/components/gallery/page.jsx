"use client"; // Ensure this is a client component
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "../../../../public/assets/gallery1.jpg";
import img2 from "../../../../public/assets/gallery2.jpg";
import img3 from "../../../../public/assets/gallery3.jpg";
import img4 from "../../../../public/assets/gallery4.jpg";
import img5 from "../../../../public/assets/gallery5.jpg";

export default function OurGalleryPage() {
  // Gallery image data
  const galleryImages = [
    { id: 1, src: img1, alt: "Gallery Image 1", featured: true }, // Featured image
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
    { id: 5, src: img5, alt: "Gallery Image 5" },
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

  return (
    <div className="py-20 ">
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
            Our Gallery
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-[#ccaf8d] max-w-2xl mx-auto"
          >
            Explore our stunning collection of interior design projects that
            showcase our creativity and expertise.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                image.featured ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-medium">View More</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}