"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProductPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#F5E6D3] text-gray-800">
      <Navbar />

      {/* HERO PRODUCT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="py-24 px-6 text-center"
      >
        <h1 className="text-5xl font-extrabold text-[#8B1E1E]">
          Ahavor Tombrown
        </h1>

        <p className="mt-4 text-lg max-w-xl mx-auto">
          A nutritious blend designed for healthy living.
        </p>

        <div className="mt-10 max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/product2.png"
            alt="product"
            width={300}
            height={350}
            className="mx-auto transition duration-300 hover:scale-105"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="mt-8 bg-[#8B1E1E] text-white px-8 py-3 rounded-full shadow-lg"
        >
          Order Now
        </motion.button>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="bg-white py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#8B1E1E]">
          Why You’ll Love It
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Rich in nutrients",
            "Easy to prepare",
            "Suitable for all ages",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* HOW TO PREPARE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#8B1E1E]">How to Prepare</h2>

        <div className="mt-10 max-w-3xl mx-auto space-y-4 text-gray-700">
          <p>1. Mix with water into a smooth paste</p>
          <p>2. Add hot water while stirring continuously</p>
          <p>3. Cook for 5–10 minutes</p>
          <p>4. Serve warm and enjoy</p>
        </div>
      </motion.section>

      {/* PRICING */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="bg-white py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-[#8B1E1E]">
          Affordable Pricing
        </h2>

        <p className="mt-4 text-gray-600">
          High quality nutrition at a price you’ll love.
        </p>

        <div className="mt-6 text-4xl font-bold text-[#8B1E1E]">GHS XX.XX</div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(true)}
          className="mt-6 bg-[#8B1E1E] text-white px-6 py-3 rounded-full"
        >
          Buy Now
        </motion.button>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 text-center bg-[#D97A2B] text-white"
      >
        <h2 className="text-3xl font-bold">Start Eating Healthy Today</h2>

        <p className="mt-4">
          Order your Ahavor Tombrown now and enjoy quality nutrition.
        </p>
      </motion.section>

      <OrderModal isOpen={open} onClose={() => setOpen(false)} />

      <Footer />
    </main>
  );
}
