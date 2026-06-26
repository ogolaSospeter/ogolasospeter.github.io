"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaBriefcase, FaArrowLeft } from "react-icons/fa";
import { experienceData } from "@/lib/data"; // Fetch all experience data

const ExperiencePage = () => {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "60px",
          duration: 1000,
          reset: false,
        });

        // Reveal Timeline & Containers Properly
        sr.reveal(".experience .timeline-line", { delay: 300 });
        sr.reveal(".experience .experience-card", { interval: 200, scale: 0.85 });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="experience" id="experience">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          <FaBriefcase className="inline-block mr-2 text-lg sm:text-xl" /> Experience
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative max-w-[1100px] mx-auto px-4">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block absolute w-[3px] bg-[#020133] h-full left-1/2 -translate-x-1/2 top-0 -z-10" />
          <div className="timeline-line md:hidden absolute w-[3px] bg-[#020133] h-full left-8 top-0" />

          {experienceData.map((exp, index) => (
            <div key={index} className="container relative flex mb-6 experience-card">
              {/* Mobile Layout */}
              <div className="md:hidden flex w-full">
                {/* Briefcase Icon for Mobile */}
                <div className="absolute left-8 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#020133] flex items-center justify-center z-10">
                  <FaBriefcase className="text-[#020133] text-sm" />
                </div>

                {/* Content Box for Mobile */}
                <div className="ml-16 w-[calc(100%-4rem)]">
                  <div className="bg-[#f68c09] rounded-lg p-4 relative">
                    <h2 className="text-lg font-bold mb-1 text-black">{exp.company}</h2>
                    <h3 className="text-base mb-1 text-black">{exp.role}</h3>
                    <p className="text-sm text-black">{exp.duration}</p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-center w-full">
                {/* Briefcase Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#020133] flex items-center justify-center z-10">
                  <FaBriefcase className="text-[#020133] text-lg" />
                </div>

                {/* Content Box */}
                <div className={`w-[45%] ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"}`}>
                  <div className="bg-[#f68c09] rounded-lg p-6 relative">
                    {/* Arrow */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "left-0 -translate-x-full" : "right-0 translate-x-full"
                      }`}
                    >
                      <div
                        className={`w-0 h-0 border-y-[12px] border-y-transparent ${
                          index % 2 === 0
                            ? "border-r-[12px] border-r-[#f68c09]"
                            : "border-l-[12px] border-l-[#f68c09]"
                        }`}
                      />
                    </div>

                    <h2 className="text-xl font-bold mb-2 text-black">{exp.company}</h2>
                    <h3 className="text-lg mb-2 text-black">{exp.role}</h3>
                    <p className="text-base text-black">{exp.duration}</p>
                    {exp.overview && (
                      <p className="text-sm text-gray-800 mt-2 leading-relaxed">{exp.overview}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/#experience"
            className="inline-flex items-center px-8 py-3 rounded-md bg-[#2506ad] text-white text-lg shadow-md hover:bg-[#1a047e] transition-all duration-300 group"
          >
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
