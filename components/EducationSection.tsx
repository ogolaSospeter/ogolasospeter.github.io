"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const educationData = [
  {
    image: "/educat/jkuat.jpeg",
    title: "Bachelor of Science in Computer Technology",
    school: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    period: "2021 – 2025",
    status: { text: "Completed", color: "text-emerald-600 bg-emerald-50" }
  },
  {
    image: "/educat/Aspire.png",
    title: "Certificate in Leadership Development & Team Management",
    school: "Aspire Institute Inc.",
    period: "2024",
    status: { text: "Completed", color: "text-emerald-600 bg-emerald-50" }
  },
  {
    image: "/educat/plp.jpg",
    title: "Certificate in Software Development",
    school: "Power Learn Project (PLP Africa)",
    period: "2024",
    status: { text: "Completed", color: "text-emerald-600 bg-emerald-50" }
  },
  {
    image: "/educat/ALX.png",
    title: "Certificate in Software Engineering",
    school: "ALX Africa (ALX_SE)",
    period: "2023 – 2024",
    status: { text: "Completed", color: "text-emerald-600 bg-emerald-50" }
  },
  {
    image: "/educat/school.jpeg",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    school: "Homabay High School",
    period: "2016 – 2019",
    status: { text: "A− · 79 Points", color: "text-blue-700 bg-blue-50" }
  }
];

export default function EducationSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({ origin: "top", distance: "80px", duration: 1000, reset: true });
        sr.reveal(".education-item", { interval: 200 });
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section id="education" className="bg-[#f4f7fe] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <FaGraduationCap className="text-2xl text-[#ff7b00]" />
          <h2 className="font-extrabold">
            My <span className="text-[#ff7b00]">Education</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-500 font-medium max-w-xl mx-auto">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-item bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Full-width image banner */}
            <div className="relative w-full h-48">
              <Image
                src={edu.image}
                alt={edu.school}
                fill
                className="object-cover"
                draggable={false}
              />
              {/* Subtle gradient overlay at bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#012970] mb-1 leading-snug">
                  {edu.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  {edu.school}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap mt-auto">
                <span className="text-xs font-semibold text-gray-700">{edu.period}</span>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${edu.status.color}`}>
                  <FaCheckCircle className="text-xs" />
                  {edu.status.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
