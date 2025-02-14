"use client"; // Ensure this component is rendered on the client side
import { useState, useEffect } from "react";
import Image from "next/image";
import banner1 from "../../../../public/assets/banner1.jpg";
import banner2 from "../../../../public/assets/banner2.jpg";
import banner3 from "../../../../public/assets/banner3.jpg";

export default function BannerPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides with their respective images, alt text, title, and description
  const slides = [
    {
      image: banner1,
      alt: "Living Room",
      title: "Modern Living Room Design",
      description: "Experience the elegance of modern living room designs tailored to your lifestyle.",
    },
    {
      image: banner2,
      alt: "Golden Canopy",
      title: "Luxurious Bedroom Interiors",
      description: "Transform your bedroom into a luxurious retreat with our bespoke interior solutions.",
    },
    {
      image: banner3,
      alt: "Urban Exploration",
      title: "Contemporary Kitchen Spaces",
      description: "Discover the perfect blend of functionality and style in our contemporary kitchen designs.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  // Function to handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[650px] w-full overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            priority // Preload the first image for better performance
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center p-5">
            <h1 className="text-7xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
      >
        &lt; {/* Left arrow */}
      </button>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          )
        }
      >
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
}


