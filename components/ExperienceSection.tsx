"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaBriefcase, FaArrowRight, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { experienceData } from "@/lib/data";

export default function ExperienceSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({ origin: "bottom", distance: "50px", duration: 1000, reset: true });
        sr.reveal(".exp-card", { interval: 200 });
      }
    };
    initScrollReveal();
  }, []);

  const experiences = experienceData.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20" id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <FaBriefcase className="text-xl text-gray-800" />
            <h2 className="font-extrabold text-gray-900">Experience</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
            A snapshot of my professional journey — internships, roles, and collaborations that have shaped my technical and leadership profile.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FaBuilding className="text-gray-400 text-sm flex-shrink-0" />
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {exp.overview}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 sm:flex-shrink-0 sm:text-right whitespace-nowrap">
                  <FaCalendarAlt className="text-gray-400" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#002057] text-white text-sm font-semibold shadow-lg shadow-[#002057]/20 hover:bg-[#0033a0] hover:scale-105 transition-all duration-300"
          >
            View All Experience
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
