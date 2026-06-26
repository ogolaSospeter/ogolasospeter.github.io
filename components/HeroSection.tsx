"use client";

import { useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 60;
    const MAX_DIST = 160;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 1.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,32,87,0.7)";
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(0,32,87,${0.18 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const [typeEffect] = useTypewriter({
    words: [
      "AI for Healthcare Innovation",
      "Machine Learning Research",
      "Full-Stack Web Development",
      "Backend Engineering",
      "Android Development",
      "Software Engineering",
      "Database Design & Admin",
      "AI-Driven Systems",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 25,
    delaySpeed: 600,
  });

  useEffect(() => {
    const initScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const sr = ScrollReveal({ origin: "top", distance: "60px", duration: 1200, reset: true });
        sr.reveal(".hero-title", { delay: 200 });
        sr.reveal(".hero-subtitle", { delay: 400 });
        sr.reveal(".hero-badge", { delay: 500 });
        sr.reveal(".hero-btn", { delay: 600 });
        sr.reveal(".hero-socials", { delay: 800, interval: 100 });
        sr.reveal(".hero-image", { delay: 1000 });
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f4ff] pt-[102px] md:pt-0"
      id="home"
    >
      {/* Network nodes canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-10 text-center md:text-left">
        <div className="pt-0 pb-4 sm:py-12 flex flex-col-reverse md:flex-row items-center gap-4 sm:gap-14 md:gap-16">
          <div className="flex-1 space-y-5">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide w-fit mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Open to AI Research Collaborations
            </div>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0f2e] leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#002057]">Ogola</span>{" "}
              <span className="text-[#ff7b00]">Sospeter.</span>
            </h1>
            <div className="hero-subtitle text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
              I work in{" "}
              <span className="text-[#940808] font-bold">{typeEffect}</span>
              <Cursor cursorStyle="|" />
            </div>
            <p className="hero-subtitle text-sm sm:text-base text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed">
              Software Engineer &amp; aspiring AI Researcher &mdash; focused on building intelligent systems
              for healthcare innovation in Africa and beyond.
            </p>
            <div className="hero-btn flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Link
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-[#002057] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#002057]/20 hover:bg-[#0033a0] hover:shadow-[#002057]/40 hover:scale-105 transition-all duration-300"
              >
                About Me
                <i className="fas fa-arrow-circle-down ml-2" />
              </Link>
              <Link
                href="#research"
                className="inline-flex items-center px-6 py-3 bg-white text-[#002057] border border-[#002057]/20 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                AI Research Focus
              </Link>
            </div>
            <div className="hero-socials flex gap-3 pt-2 justify-center md:justify-start">
              {[
                { href: "https://www.linkedin.com/in/ogola-sospeter-5611a41b3/", icon: FaLinkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0077b5]" },
                { href: "https://github.com/ogolasospeter", icon: FaGithub, label: "GitHub", hoverBg: "hover:bg-[#333]" },
                { href: "mailto:ogolasospeter62@gmail.com", icon: MdEmail, label: "Email", hoverBg: "hover:bg-[#ea4335]" },
                { href: "https://api.whatsapp.com/send/?phone=254795398253", icon: MdWhatsapp, label: "WhatsApp", hoverBg: "hover:bg-[#25D366]" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 border border-gray-200 transition-all duration-300 ${social.hoverBg} hover:text-white hover:scale-110 hover:border-transparent hover:shadow-md`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image flex-1 flex justify-center items-center pb-6 md:pb-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-orange-100 opacity-70 blur-sm" />
              <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] transition-transform duration-300 hover:scale-105">
                <Image
                  src="/profile2.jpg"
                  alt="Ogola Sospeter"
                  fill
                  priority
                  className="object-cover rounded-[2rem] shadow-2xl"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
