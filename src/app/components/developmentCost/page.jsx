"use client";
import React from "react";

export default function CostPage() {
  return (
    <div className="py-20">
      {/* Heading */}
      <h2 className="text-6xl font-bold text-center text-[#C89756] mb-5">
        Choose Your Perfect Plan
      </h2>
      <p className="text-sm text-[#ccaf8d] mb-12 text-center">Few lines to well describe your content supporting headline.Few lines to well describe your content supporting headline.Few </p>

      {/* Pricing Plans Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {/* Elite Plan */}
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-xl relative">
          {/* Ribbon for Elite Plan */}
          <div className="absolute top-0 right-0 bg-[#C89756] text-white text-xs font-medium px-4 py-2 rounded-bl-lg">
            Best Value
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#C89756] mb-4">Elite Plan</h3>
            <p className="text-3xl font-bold text-gray-800 mb-6">$389<span className="text-base text-gray-600">/project</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Advanced design services
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated project manager
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Custom branding strategy
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Priority support (24/7)
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited revisions
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Free consultation session
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Exclusive access to premium templates
              </li>
            </ul>
            <button className="w-full bg-[#C89756] text-white py-3 rounded-lg font-medium hover:bg-[#b88746] transition-colors duration-300">
              Get Started With Elite Plan
            </button>
          </div>
        </div>

        {/* Plus Plan */}
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-xl relative">
          {/* Badge for Plus Plan */}
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-4 py-2 rounded-bl-lg">
            Popular
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#C89756] mb-4">Plus Plan</h3>
            <p className="text-3xl font-bold text-gray-800 mb-6">$289<span className="text-base text-gray-600">/project</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Enhanced design services
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Initial consultation
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Standard branding package
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Support during business hours
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 3 revisions
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Access to standard templates
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Quarterly performance reports
              </li>
            </ul>
            <button className="w-full bg-[#C89756] text-white py-3 rounded-lg font-medium hover:bg-[#b88746] transition-colors duration-300">
              Get Started With Plus Plan
            </button>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#C89756] mb-4">Basic Plan</h3>
            <p className="text-3xl font-bold text-gray-800 mb-6">$189<span className="text-base text-gray-600">/project</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Essential design services
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Limited branding options
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Email support only
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Single revision allowed
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Starter templates
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Basic project management tools
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                End-of-project summary report
              </li>
            </ul>
            <button className="w-full bg-[#C89756] text-white py-3 rounded-lg font-medium hover:bg-[#b88746] transition-colors duration-300">
              Get Started With Basic Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}