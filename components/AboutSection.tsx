"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaBrain, FaHeartbeat, FaFlask } from "react-icons/fa";

export default function AboutSection() {
  useEffect(() => {
    const initTilt = async () => {
      const VanillaTilt = (await import("vanilla-tilt")).default;
      const elements = document.querySelectorAll<HTMLElement>(".tilt");
      elements.forEach((element) => {
        VanillaTilt.init(element, { max: 15 });
      });
    };
    initTilt();
  }, []);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({ origin: "top", distance: "70px", duration: 1200, reset: true });
        sr.reveal(".about-title", { delay: 200 });
        sr.reveal(".about-image", { delay: 400 });
        sr.reveal(".about-content", { delay: 600 });
      }
    };
    initScrollReveal();
  }, []);

  const highlights = [
    { icon: FaBrain, label: "AI & Machine Learning", color: "text-purple-600 bg-purple-50" },
    { icon: FaHeartbeat, label: "Healthcare Innovation", color: "text-red-500 bg-red-50" },
    { icon: FaFlask, label: "AI Research", color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="about-title flex items-center justify-center gap-3 mb-10 sm:mb-12">
          <FaUser className="text-2xl sm:text-3xl text-purple-600" />
          <h2 className="text-xl sm:text-2xl font-bold">
            About <span className="text-purple-600">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center px-6 md:px-8">
          <div className="about-image flex justify-center">
            <div className="tilt w-[250px] sm:w-[320px] md:w-[400px] max-w-full transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Ogola Sospeter"
                width={400}
                height={400}
                className="object-cover cursor-pointer rounded-[10%] shadow-lg transition-all duration-300 mix-blend-luminosity hover:mix-blend-normal"
                draggable={false}
              />
            </div>
          </div>

          <div className="about-content text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              I&apos;m Ogola Sospeter
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-5">
              Software Engineer &amp; AI Researcher in the Making
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-prose mb-5">
              I am a Software Engineer with a strong foundation in full-stack web development,
              Android development, and backend systems. Python is the backbone of my programming
              — and increasingly, the lens through which I explore Machine Learning and AI.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-prose mb-6">
              My emerging passion lies at the intersection of <strong>Artificial Intelligence and Healthcare</strong>.
              I am actively venturing into AI research, with a focus on how intelligent systems can
              transform clinical care, disease diagnosis, and health equity across Africa.
              Projects like SmartTechFarm and SmartHealth reflect this drive — and this is just the beginning.
            </p>

            {/* Interest highlights */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
              {highlights.map((h, i) => (
                <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${h.color}`}>
                  <h.icon className="text-sm" />
                  {h.label}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-blue-600 font-semibold">Email: </span>
                ogolasospeter62@gmail.com
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-blue-600 font-semibold">Location: </span>
                Nairobi, Kenya
              </p>
            </div>

            <Link
              href="/OGOLA-SOSPETER-OKONGO_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              View Resume
              <span className="ml-2 text-lg leading-none">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
