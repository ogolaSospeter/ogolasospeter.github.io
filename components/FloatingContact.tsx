"use client";

import { useState } from "react";
import { FaEnvelope, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Form
  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={toggleForm}
        className="fixed bottom-8 left-6 bg-yellow-500 text-purple-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open Contact Form"
      >
        <FaEnvelope className="text-2xl" />
      </button>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition-all"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Form Header */}
            <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
              Get in Touch
            </h3>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
