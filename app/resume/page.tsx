import type { Metadata } from "next";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume — Ogola Sospeter",
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  return <ResumeViewer />;
}
