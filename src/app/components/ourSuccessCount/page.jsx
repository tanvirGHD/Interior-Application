"use client"; // Ensure this component is rendered on the client side
import { useState, useEffect, useRef } from "react";

export default function SuccessCountPage() {
  const [officesCount, setOfficesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [briceCount, setBriceCount] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(sectionRef.current); // Stop observing after counting starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const targetOffices = 16;
    const targetCountries = 47;
    const targetProjects = 216;
    const targetBrice = 1994;

    const duration = 2000; // Duration of the counting animation in milliseconds
    const interval = 50; // Interval for updating the count

    const incrementOffices = targetOffices / (duration / interval);
    const incrementCountries = targetCountries / (duration / interval);
    const incrementProjects = targetProjects / (duration / interval);
    const incrementBrice = targetBrice / (duration / interval);

    const officesInterval = setInterval(() => {
      setOfficesCount((prev) => {
        if (prev >= targetOffices) {
          clearInterval(officesInterval);
          return targetOffices;
        }
        return Math.ceil(prev + incrementOffices);
      });
    }, interval);

    const countriesInterval = setInterval(() => {
      setCountriesCount((prev) => {
        if (prev >= targetCountries) {
          clearInterval(countriesInterval);
          return targetCountries;
        }
        return Math.ceil(prev + incrementCountries);
      });
    }, interval);

    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev >= targetProjects) {
          clearInterval(projectsInterval);
          return targetProjects;
        }
        return Math.ceil(prev + incrementProjects);
      });
    }, interval);

    const briceInterval = setInterval(() => {
      setBriceCount((prev) => {
        if (prev >= targetBrice) {
          clearInterval(briceInterval);
          return targetBrice;
        }
        return Math.ceil(prev + incrementBrice);
      });
    }, interval);
  };

  return (
    <div
      ref={sectionRef}
      className="py-16 bg-[#F5EFE6] text-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Offices */}
          <div className="p-4">
            <h3 className="text-7xl font-bold text-[#C89756]">{officesCount}</h3>
            <p className="text-lg text-gray-600">Offices</p>
          </div>

          {/* Countries */}
          <div className="p-4">
            <h3 className="text-7xl font-bold text-[#C89756]">{countriesCount}</h3>
            <p className="text-lg text-gray-600">Countries</p>
          </div>

          {/* Projects */}
          <div className="p-4">
            <h3 className="text-7xl font-bold text-[#C89756]">{projectsCount}</h3>
            <p className="text-lg text-gray-600">Projects</p>
          </div>

          {/* Brice */}
          <div className="p-4">
            <h3 className="text-7xl font-bold text-[#C89756]">{briceCount}</h3>
            <p className="text-lg text-gray-600">Since</p>
          </div>
        </div>
      </div>
    </div>
  );
}