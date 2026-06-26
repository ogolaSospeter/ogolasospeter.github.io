"use client";

import Link from "next/link";
import {
  FaChevronCircleRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[rgb(0,1,43)] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-base text-white pb-4 font-semibold">
            Developer Ogola Portfolio
          </h3>
          <p className="text-sm text-gray-300">
            Thank you for visiting my personal portfolio website. Let&apos;s connect!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base text-white pb-4 font-semibold">
            Quick Links
          </h3>
          <div className="grid grid-cols-3 gap-y-6">
            {[
              { href: "/#home", text: "Me" },
              { href: "/#about", text: "Profile" },
              { href: "/#skills", text: "Skills" },
              { href: "/#education", text: "Education" },
              { href: "/#work", text: "Projects" },
              { href: "/#experience", text: "Experiences" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-300 hover:text-[#ffae00] transition-all flex items-center justify-center md:justify-start"
              >
                <FaChevronCircleRight className="mr-2" />
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-base text-white pb-4 font-semibold">
            Contact Info
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2 text-[#ffae00]" /> +254 7XX-XXX-XXX
            </p>
            <p className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-[#ffae00]" />{" "}
              ogolasospeter62@gmail.com
            </p>
            <p className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2 text-[#ffae00]" /> Nairobi,
              Kenya-00200
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
            {[
              {
                href: "https://www.linkedin.com/in/ogola-sospeter-5611a41b3/",
                icon: FaLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/ogolasospeter",
                icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "mailto:ogolasospeter62@gmail.com",
                icon: FaEnvelope,
                label: "Mail",
              },
              {
                href: "https://api.whatsapp.com/send/?phone=254795398253",
                icon: MdWhatsapp,
                label: "WhatsApp",
                hoverBg: "hover:bg-[#ea4335]",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-12 w-12 p-3 flex items-center justify-center text-white rounded-full bg-gray-700 hover:bg-[#ffae00] transition-all"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400">
        <p className="text-xs">
          Ogola Sospeter Portfolio
        </p>
        <p className="text-xs italic">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
