"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft, FaLock } from "react-icons/fa";

export default function ResumeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "p", "u"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0f2e] via-[#0d1547] to-[#0a0f2e] flex flex-col"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0a0f2e]/90 backdrop-blur border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <Link
          href="/#about"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back to Portfolio
        </Link>

        <div className="text-center">
          <p className="text-white font-semibold text-sm tracking-wide">Ogola Sospeter O.</p>
          <p className="text-gray-500 text-xs">Résumé</p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <FaLock className="text-[10px]" />
          View only
        </div>
      </header>

      {/* PDF viewer */}
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.15)] border border-white/10">
          {/* Subtle watermark */}
          <div
            className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <span
              className="text-white font-black opacity-[0.03] rotate-[-35deg] whitespace-nowrap"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)", letterSpacing: "0.1em" }}
            >
              OGOLA SOSPETER © 2026
            </span>
          </div>

          <iframe
            src="/OGOLA-SOSPETER-OKONGO_RESUME.pdf#toolbar=0&navpanes=0&view=FitH"
            className="w-full block"
            style={{ height: "90vh", border: "none" }}
            title="Ogola Sospeter Résumé"
          />
        </div>

        <p className="mt-6 text-xs text-gray-600 italic text-center">
          © 2026 Ogola Sospeter. All rights reserved. Unauthorized reproduction or distribution is prohibited.
        </p>
      </main>
    </div>
  );
}
