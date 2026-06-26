import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import DisableRightClick from "@/components/DisableRightClick";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ogola Sospeter | Software Engineer & AI Researcher",
  description:
    "Portfolio of Ogola Sospeter — Software Engineer, Full-Stack Developer, Android Developer, and aspiring AI Researcher focused on Healthcare Innovation in Africa.",
  keywords: [
    "Ogola Sospeter",
    "portfolio",
    "software engineer",
    "AI researcher",
    "healthcare AI",
    "machine learning",
    "full stack developer",
    "Kenya",
    "Africa",
    "JKUAT",
    "Android developer",
  ],
  icons: {
    icon: "/favhand.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`
          ${poppins.variable}
          ${nunito.variable}
          bg-white
          text-gray-900
          min-h-screen
          flex
          flex-col
          overflow-x-hidden
          text-base
          selection:bg-blue-500/20
        `}
      >
        <DisableRightClick />
        <Navbar />
        {/* <FloatingContact /> */}
        <ScrollToTop />
        <main className="flex-grow pt-0 md:pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
