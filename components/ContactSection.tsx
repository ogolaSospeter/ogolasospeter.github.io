"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaHeadset,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1000,
          reset: true,
        });
        sr.reveal(".contact .container", { delay: 400 });
        sr.reveal(".contact .container .form-group", { delay: 400 });
      }
    };
    initScrollReveal();
  }, []);

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowAlert(false);

    try {
      const phone = (e.target as HTMLFormElement).phone.value;
      const name = (e.target as HTMLFormElement).name;
      //check if phone is number
      if (phone && isNaN(Number(phone))) {
        setAlertType("error");
        setAlertMessage("Please enter a valid phone number.");
        setShowAlert(true);
        setIsSubmitting(false);
        return;
      }
      //check that phone is exactly 10 digits if provided
      if (phone && phone.length !== 10) {
        setAlertType("error");
        setAlertMessage("Phone number must be exactly 10 digits.");
        setShowAlert(true);
        setIsSubmitting(false);
        return;
      }
      //The name field should not contain numbers
      if (name && /\d/.test(name)) {
        setAlertType("error");
        setAlertMessage("Name should not contain numbers.");
        setShowAlert(true);
        setIsSubmitting(false);
        return;
      }
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget as HTMLFormElement,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      if (response.status === 200) {
        setAlertType("success");
        setAlertMessage("Thank you for your message. We will get back to you soon! Keep an eye on your inbox.");
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("FAILED...", error);
      setAlertType("error");
      setAlertMessage("Form submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setShowAlert(true);
    }
  };

  return (
    <section className="min-h-[60vh] bg-[#e5ecfb] py-16" id="contact">
      {/* Alert Message */}
{showAlert && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
    <div className={`w-[350px] rounded-lg shadow-lg overflow-hidden ${
      alertType === "success" 
        ? "bg-green-100 border border-green-400" 
        : "bg-red-100 border border-red-400"
    }`}>
      <div className="p-4">
        <div className="flex items-center gap-5">
          {alertType === "success" ? (
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5709/5709755.png"
              alt="Success"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
          ) : (
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2228/2228040.png"
              alt="Error"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
          )}
          <p className={`text-sm font-medium ${
            alertType === "success" ? "text-green-700" : "text-red-700"
          }`}>
            {alertMessage}
          </p>
        </div>
      </div>
    </div>
  </div>
)}
      {/* Section Heading */}
      <h2 className="text-center text-[#2506ad] text-[clamp(1.8rem, 2vw, 2.2rem)] font-bold mb-8">
        <FaHeadset className="inline-block mr-2" /> Get in{" "}
        <span className="text-[#ff7b00]">Touch</span>
      </h2>

      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-lg px-10 lg:px-14 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-x-16">
          {/* Image Section - Visible & Side by Side on Medium Screens & Above */}
          <div className="w-full md:w-[45%] flex justify-center">
            <div className="relative w-full max-w-[400px] h-[350px] lg:h-[380px]">
              <Image
                src="/contact1.png"
                alt="Contact"
                fill
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full md:w-[50%]"
          >
            <div className="flex flex-col justify-center">
              {/* Input Fields */}
              {[
                { name: "name", type: "text", placeholder: "Name", icon: <FaUser /> },
                { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope /> },
                { name: "phone", type: "tel", placeholder: "Phone", icon: <FaPhone /> },
              ].map((input, index) => (
                <div key={index} className="relative w-full m-4 flex items-center">
                  <span className="absolute left-4 text-gray-700 text-[clamp(0.9rem, 1vw, 1.1rem)]">
                    {input.icon}
                  </span>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    required={input.name !== "phone"}
                    className="w-full h-[50px] pl-12 pr-4 text-[clamp(0.9rem, 1vw, 1.1rem)] font-poppins rounded-md border border-gray-700 bg-[#e5ecfb] outline-none focus:border-2 focus:border-[rgb(115,3,167)]"
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="relative w-full m-4 flex items-center">
                <span className="absolute left-4 top-4 text-gray-700 text-[clamp(0.9rem, 1vw, 1.1rem)]">
                  <FaCommentDots />
                </span>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full min-h-[130px] max-h-[230px] pl-12 pr-4 pt-3 text-[clamp(0.9rem, 1vw, 1.1rem)] font-poppins rounded-md border border-gray-700 bg-[#e5ecfb] outline-none focus:border-2 focus:border-[rgb(115,3,167)]"
                />
              </div>
            </div>

            
                 {/* Submit Button */}
      <div className="flex justify-center md:justify-start mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 text-lg text-white bg-[#2506ad] rounded-lg hover:bg-[#421cecf5] shadow-lg shadow-blue-600/40 transition-all duration-300 font-nunito group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </>
          )}
        </button>
      </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
