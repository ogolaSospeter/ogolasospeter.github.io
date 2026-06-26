"use client";

import Image from "next/image";
import { FaEye, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        w-full
        rounded-xl
        overflow-hidden
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:scale-[1.02]
        py-5
      "
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden ">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 p-6 pb-[calc(1.5rem+10px)]">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#026969] bg-[#026969]/10 rounded-full mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.links.view}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              inline-flex items-center justify-center
              px-4 py-2.5
              rounded-lg
              bg-[#026969]
              text-white
              text-sm font-medium
              transition-all
              duration-300
              hover:bg-[#015555]
              hover:shadow-md
            "
          >
            <FaEye className="mr-2" /> View Project
          </a>
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              inline-flex items-center justify-center
              px-4 py-2.5
              rounded-lg
              border-2 border-[#026969]
              text-[#026969]
              text-sm font-medium
              transition-all
              duration-300
              hover:bg-[#026969]
              hover:text-white
              hover:shadow-md
            "
          >
            <FaCode className="mr-2" /> View Code
          </a>
        </div>
      </div>

      {/* External Link Indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaExternalLinkAlt className="text-white text-xl" />
      </div>
    </div>
  );
}
