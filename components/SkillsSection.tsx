"use client";

import { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { skillsData } from "@/lib/data";
import Image from "next/image";

export default function SkillsSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({ origin: "bottom", distance: "60px", duration: 800, reset: true });
        sr.reveal(".skills-title", { delay: 200 });
        sr.reveal(".skills-grid .skill-card", { interval: 100 });
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section id="skills" className="bg-gradient-to-b from-white to-[#f0f4ff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="skills-title text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <FaLaptopCode className="text-2xl text-[#3106f1]" />
            <h2 className="font-bold text-[#3106f1]">
              Skills &amp; <span className="text-[rgb(141,127,5)]">Abilities</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Technologies and tools I work with — from web and mobile development to AI/ML.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
