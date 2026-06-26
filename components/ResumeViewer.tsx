"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaLock, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ResumeViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const pdfRef = useRef<unknown>(null);

  // Block right-click, keyboard shortcuts, touch callout
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "p", "u", "a"].includes(e.key.toLowerCase())) ||
        ["F12", "PrintScreen"].includes(e.key)
      ) {
        e.preventDefault();
      }
    };
    // Blur when user switches away (screenshot workflow on mobile)
    const handleVisibility = () => setHidden(document.hidden);

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Load PDF.js and render page
  useEffect(() => {
    let cancelled = false;

    const loadPDF = async () => {
      setLoading(true);
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const pdf = await pdfjsLib.getDocument("/resume.pdf").promise;
        if (cancelled) return;

        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        await renderPage(pdf, currentPage);
      } catch (err) {
        console.error("PDF load error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadPDF();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-render when page changes
  useEffect(() => {
    if (pdfRef.current) {
      renderPage(pdfRef.current, currentPage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderPage = async (pdf: unknown, pageNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page = await (pdf as any).getPage(pageNum);
    const container = containerRef.current;
    const containerWidth = container?.clientWidth ?? 800;

    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0a0f2e] via-[#0d1547] to-[#0a0f2e] flex flex-col"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Visibility blur overlay — activates when user switches away */}
      {hidden && (
        <div className="fixed inset-0 z-50 bg-[#0a0f2e] flex items-center justify-center">
          <FaLock className="text-white text-4xl opacity-30" />
        </div>
      )}

      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0a0f2e]/90 backdrop-blur border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <Link
          href="/#about"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back
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

      {/* Canvas viewer */}
      <main className="flex-1 flex flex-col items-center px-4 py-8" ref={containerRef}>
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.15)] border border-white/10 bg-white relative">
          {/* Watermark */}
          <div
            className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <span
              className="text-gray-400 font-black opacity-[0.06] rotate-[-35deg] whitespace-nowrap select-none"
              style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "0.1em" }}
            >
              OGOLA SOSPETER © 2026
            </span>
          </div>

          {loading && (
            <div className="flex items-center justify-center h-[60vh]">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <canvas
            ref={canvasRef}
            className="w-full block"
            style={{
              display: loading ? "none" : "block",
              WebkitTouchCallout: "none",
              // @ts-expect-error non-standard
              WebkitUserSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Pagination */}
        {numPages > 1 && (
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition"
            >
              <FaChevronLeft />
            </button>
            <span className="text-gray-400 text-sm">
              Page {currentPage} of {numPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
              disabled={currentPage === numPages}
              className="p-2 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-600 italic text-center">
          © 2026 Ogola Sospeter. All rights reserved. Unauthorized reproduction prohibited.
        </p>
      </main>
    </div>
  );
}
