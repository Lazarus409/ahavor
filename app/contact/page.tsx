"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#F5E6D3] text-gray-800">
      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center py-24 px-6"
      >
        <h1 className="text-5xl font-extrabold text-[#8B1E1E]">Contact Us</h1>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          We’d love to hear from you. Reach out for orders, inquiries, or
          support.
        </p>
      </motion.section>

      {/* CONTACT CONTENT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#8B1E1E]">
              Send a Message
            </h2>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
              />

              <button className="w-full bg-[#8B1E1E] text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                Send Message
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <Phone className="text-[#8B1E1E]" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">050 498 4721</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <MapPin className="text-[#8B1E1E]" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Kumasi, Ghana</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <Mail className="text-[#8B1E1E]" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@ahavor.com</p>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/233504984721"
              className="block text-center bg-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.section>

      {/* MAP (OPTIONAL) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=kumasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-100 border-0"
            loading="lazy"
          />
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
