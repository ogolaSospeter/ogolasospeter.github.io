"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";


export default function ProjectsSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "bottom",
          distance: "60px",
          duration: 1000,
          reset: true,
        });

        sr.reveal(".work-item", { interval: 200 });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section
      id="work"
      className="relative py-24 bg-gradient-to-b from-[#005f6b] to-[#387888] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <FaLaptopCode className="inline-block mr-2" />
            Featured <span className="text-[rgb(255,230,0)]">Projects</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 6).map((project, index) => (
            <div key={index} className="work-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/projects"
            className="
              group
              inline-flex items-center gap-2
              px-8 py-4
              rounded-full
              bg-white/10
              backdrop-blur-sm
              text-white
              text-lg font-semibold
              border border-white/20
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#005f6b]
              hover:shadow-lg
            "
          >
            <span>View All Projects</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
