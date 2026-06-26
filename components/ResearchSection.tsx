"use client";

import { useEffect } from "react";
import { FaBrain, FaHeartbeat, FaDna, FaMicroscope, FaRobot, FaGlobe } from "react-icons/fa";

const focusAreas = [
  {
    icon: FaHeartbeat,
    title: "AI in Clinical Diagnostics",
    description:
      "Exploring machine learning models for early disease detection — from medical imaging analysis to predictive risk scoring for conditions prevalent in Sub-Saharan Africa.",
    color: "from-red-50 to-red-100 border-red-200",
    iconColor: "text-red-500",
  },
  {
    icon: FaDna,
    title: "Health Data & NLP",
    description:
      "Applying Natural Language Processing to healthcare records, clinical notes, and public health datasets to extract insights and support evidence-based decision-making.",
    color: "from-green-50 to-green-100 border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: FaRobot,
    title: "Intelligent Health Systems",
    description:
      "Building AI-powered platforms that assist healthcare workers with patient management, drug interactions, and program enrollment — reducing administrative burden in under-resourced settings.",
    color: "from-blue-50 to-blue-100 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: FaMicroscope,
    title: "Precision Agriculture & One Health",
    description:
      "Investigating the link between food security, precision farming, and community health — leveraging AI to bridge the gap between agricultural resilience and public health outcomes.",
    color: "from-yellow-50 to-yellow-100 border-yellow-200",
    iconColor: "text-yellow-600",
  },
  {
    icon: FaBrain,
    title: "Machine Learning Research",
    description:
      "Developing and evaluating deep learning and classical ML approaches for biomedical problems — with an emphasis on model interpretability and low-resource deployment scenarios.",
    color: "from-purple-50 to-purple-100 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: FaGlobe,
    title: "AI for Africa",
    description:
      "Committed to building AI solutions that are contextually relevant and accessible to African healthcare systems — addressing data scarcity, infrastructure constraints, and local disease burdens.",
    color: "from-orange-50 to-orange-100 border-orange-200",
    iconColor: "text-orange-600",
  },
];

export default function ResearchSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({ origin: "bottom", distance: "50px", duration: 1000, reset: true });
        sr.reveal(".research-card", { interval: 150 });
        sr.reveal(".research-header", { delay: 200 });
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section id="research" className="py-16 sm:py-20 bg-gradient-to-br from-[#0a0f2e] via-[#0d1b4b] to-[#0a0f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="research-header text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-semibold mb-5">
            <FaBrain className="text-blue-400" />
            Research Interests
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            AI for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Healthcare Innovation
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My research direction sits at the intersection of Artificial Intelligence and Healthcare —
            with a deep conviction that AI can be a transformative force for health equity in Africa.
            I am actively exploring, building, and collaborating in this space.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`research-card bg-gradient-to-br ${area.color} border rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                <area.icon className={`text-2xl ${area.iconColor}`} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-4">
            Interested in collaborating on AI + Healthcare research?
          </p>
          <a
            href="mailto:ogolasospeter62@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            <FaBrain />
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
