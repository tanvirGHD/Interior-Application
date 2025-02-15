"use client"; // Ensure this is a client component
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaLightbulb, FaPalette, FaTools } from "react-icons/fa"; 
import { TbTransformFilled } from "react-icons/tb";

export default function InteriorProcess() {
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
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
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
            Interior Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-600 max-w-2xl mx-auto"
          >
            Transforming a space involves understanding and applying key design
            principles to create a harmonious and functional environment.
          </motion.p>
        </motion.div>

        {/* Step Progress Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row justify-center gap-4 mb-16"
        >
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#C89756] flex items-center justify-center text-white font-medium">
              1
            </span>
            <p className="text-gray-600">Discover Vision</p>
          </div>
          {/* Connector Line */}
          <div className="hidden lg:block w-12 h-px bg-gray-300"></div>
          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#C89756] flex items-center justify-center text-white font-medium">
              2
            </span>
            <p className="text-gray-600">Create Concepts</p>
          </div>
          {/* Connector Line */}
          <div className="hidden lg:block w-12 h-px bg-gray-300"></div>
          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
              3
            </span>
            <p className="text-gray-600">Bring Ideas to Life</p>
          </div>
          {/* Connector Line */}
          <div className="hidden lg:block w-12 h-px bg-gray-300"></div>
          {/* Step 4 */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
              4
            </span>
            <p className="text-gray-600">Finalize & Deliver</p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Step 1: Discovering Your Vision */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-4xl text-[#C89756]" />
            </div>
            <h3 className="text-xl font-bold text-[#C89756] mb-4">
              Discovering Your Vision
            </h3>
            <p className="text-gray-600">
              We meet with you to discuss your vision, needs, budget, and
              timeline. This helps us understand your unique requirements.
            </p>
          </motion.div>

          {/* Step 2: Creating Concepts */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FaPalette className="text-4xl text-[#C89756]" />
            </div>
            <h3 className="text-xl font-bold text-[#C89756] mb-4">
              Creating Concepts
            </h3>
            <p className="text-gray-600">
              Based on our consultation, we create initial design concepts and
              mood boards to visualize the space and refine the ideas.
            </p>
          </motion.div>

          {/* Step 3: Bringing Ideas to Life */}
          <motion.div
            variants={fadeInUp}
            className=" text-center"
          >
            <div className="flex justify-center mb-4">
              <FaTools className="text-4xl text-[#C89756]" />
            </div>
            <h3 className="text-xl font-bold text-[#C89756] mb-4">
              Bringing Ideas to Life
            </h3>
            <p className="text-gray-600">
              Once you approve the concept, we develop detailed plans, 3D
              renderings, and select materials to bring your vision to life.
            </p>
          </motion.div>
          {/* Step 4: Transforming your space*/}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <TbTransformFilled className="text-4xl text-[#C89756]" />
            </div>
            <h3 className="text-xl font-bold text-[#C89756] mb-4">
            Transforming your space
            </h3>
            <p className="text-gray-600">
            We oversee the transformation of your space, coordinating with contractors and managing the installation of furnishings and decor.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <button className="bg-[#C89756] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#B88646] transition-colors duration-300">
            Get in Touch!
          </button>
        </motion.div>
      </div>
    </div>
  );
}