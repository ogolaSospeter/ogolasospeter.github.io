"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/data";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("*");
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1000,
          reset: true,
        });

      sr.reveal(".work .project-card", { interval: 200 });
    }
  };

  initScrollReveal();
}, []);


  useEffect(() => {
    if (filter === "*") {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter((project) => project.category === filter));
    }
  }, [filter]);

  const categories = [
    { id: "*", name: "All Projects" },
    { id: "BasicWebDevelopment", name: "Web Apps" },
    { id: "AndroidApp", name: "Android App" },
    { id: "RoboticsandAI", name: "Robotics & AI/ML" },
  ];

  return (
    <section id="work" className="min-h-screen bg-gradient-to-b from-[#005f6b] to-[#387888] py-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white p-4">
        <FaLaptopCode className="inline-block mr-2" />
        Projects <span className="text-[rgb(255,230,0)]">Made</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-8 flex-wrap px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              filter === cat.id
                ? "bg-white text-black"
                : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-500 group"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;
