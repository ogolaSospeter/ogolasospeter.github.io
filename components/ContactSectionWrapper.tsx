"use client";

import dynamic from "next/dynamic";

// Dynamically import the actual ContactSection, disabling SSR
const ContactSection = dynamic(() => import("./ContactSection"), {
  ssr: false,
});

export default function ContactSectionWrapper() {
  return <ContactSection />;
}
