"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ResumeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Block right-click on the viewer
    const el = containerRef.current;
    if (!el) return;

    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      // Block Ctrl+S, Ctrl+P, Ctrl+Shift+I, F12, PrintScreen
      if (
        (e.ctrlKey && ["s", "p", "u"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };

    el.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);

    return () => {
      el.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-950 flex flex-col items-center py-8 px-4"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-4">
        <Link
          href="/#about"
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-white font-semibold text-base">
          Ogola Sospeter — Résumé
        </h1>
        <span className="text-xs text-gray-600 italic">View only</span>
      </div>

      {/* Viewer wrapper — overlay blocks direct interaction with iframe */}
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Watermark */}
        <div
          className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center"
          aria-hidden="true"
        >
          <p
            className="text-white font-bold text-4xl opacity-[0.04] rotate-[-35deg] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Ogola Sospeter © 2026
          </p>
        </div>

        {/* Transparent click-blocker overlay — prevents right-click save on iframe */}
        <div
          className="absolute inset-0 z-20"
          style={{ pointerEvents: "auto", background: "transparent" }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />

        {/* PDF iframe */}
        <iframe
          src="/OGOLA-SOSPETER-OKONGO_RESUME.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full"
          style={{
            height: "85vh",
            border: "none",
            pointerEvents: "none",
          }}
          title="Ogola Sospeter Resume"
        />
      </div>

      <p className="mt-4 text-xs text-gray-600 italic">
        © 2026 Ogola Sospeter. All rights reserved. Unauthorized reproduction prohibited.
      </p>
    </div>
  );
}
