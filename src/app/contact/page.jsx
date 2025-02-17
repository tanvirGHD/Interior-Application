"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (replace with actual API call)
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-gray-50 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#C89756] mb-12">
        Get In Touch
      </h2>

      {/* Two-Column Layout */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Office Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaMapMarkerAlt className="text-[#C89756] mr-2" /> Our Office
          </h3>
          <p className="text-gray-600 mb-4 flex items-center">
            <FaMapMarkerAlt className="text-[#C89756] mr-2" />
            <span>
              <strong>Address:</strong> 123 Design Lane, Creative City, Country
            </span>
          </p>
          <p className="text-gray-600 mb-4 flex items-center">
            <FaPhoneAlt className="text-[#C89756] mr-2" />
            <span>
              <strong>Phone:</strong> +1 (234) 567-890
            </span>
          </p>
          <p className="text-gray-600 mb-4 flex items-center">
            <FaEnvelope className="text-[#C89756] mr-2" />
            <span>
              <strong>Email:</strong> info@interiordesign.com
            </span>
          </p>
          <p className="text-gray-600 mb-6 flex items-center">
            <FaClock className="text-[#C89756] mr-2" />
            <span>
              <strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
            </span>
          </p>

          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.764018548824!2d-73.99185228460776!3d40.74117077932947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d547f%3A0x7b0b8b0b8b0b8b0b!2sInterior%20Design%20Office!5e0!3m2!1sen!2sus!4v1697000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Right Column: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89756]"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89756]"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89756]"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89756]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#C89756] text-white rounded-lg font-medium hover:bg-[#b88746] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
