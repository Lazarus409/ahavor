"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Leaf, Wheat, HeartPulse, Truck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [open, setOpen] = useState(false);

  // ✅ Hooks MUST be inside component
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="bg-[#F5E6D3] text-gray-800 relative overflow-hidden">
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#8B1E1E] origin-left z-50"
      />
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-100 bg-linear-to-r from-orange-200 to-red-200 blur-3xl opacity-30 -z-10"
      />
      <Navbar />
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center py-24 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#8B1E1E]">
          Eat Healthy. Live Better.
          <br />
          <span className="text-[#D97A2B]">Ahavor Tombrown</span>
        </h1>

        <p className="mt-6 text-lg max-w-xl mx-auto">
          Nutritious, delicious, and made from natural ingredients.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="bg-[#8B1E1E] text-white px-6 py-3 rounded-full shadow-lg"
          >
            Order Now
          </motion.button>

          <a href="tel:0504984721" className="border px-6 py-3 rounded-full">
            Call
          </a>
        </div>
      </motion.section>
      {/* INGREDIENTS */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#8B1E1E]">
          Made With Natural Ingredients
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: <Leaf />, text: "100% Natural" },
            { icon: <Wheat />, text: "Wheat & Rice Blend" },
            { icon: <HeartPulse />, text: "Healthy & Nutritious" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl"
            >
              <div className="mb-3">{item.icon}</div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#F5E6D3]"
      >
        <div className="max-w-6xl mx-auto space-y-20">
          {/* SECTION TITLE */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#8B1E1E]">
              Our Product Story
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              From carefully selected grains to a nourishing meal, here’s how
              Ahavor Tombrown comes to life.
            </p>
          </div>

          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/grains.jpg"
                alt="grains"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-semibold text-[#8B1E1E]">
                Carefully Selected Ingredients
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We source only the finest grains including maize, millet, and
                soybeans. Each ingredient is selected to ensure maximum
                nutrition and quality.
              </p>
            </motion.div>
          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-[#8B1E1E]">
                Hygienic Processing
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our production process follows strict hygiene standards. The
                grains are cleaned, roasted, and milled with precision to
                preserve nutrients.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2"
            >
              <img
                src="/images/process.jpg"
                alt="processing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/final.jpg"
                alt="final product"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-semibold text-[#8B1E1E]">
                Ready to Nourish You
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The final product is a delicious, easy-to-prepare Tombrown that
                provides energy and nourishment for both children and adults.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* BENEFITS */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#8B1E1E]">Why Choose Us?</h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="mt-10 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { icon: <Leaf />, text: "Natural" },
            { icon: <HeartPulse />, text: "Healthy" },
            { icon: <Truck />, text: "Fast Delivery" },
            { icon: <Wheat />, text: "Quality Ingredients" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl shadow-xl bg-white/70 backdrop-blur"
            >
              <div className="mb-2">{item.icon}</div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* TRUST */}
      <section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="py-16 bg-[#F5E6D3] text-center"
        >
          <h2 className="text-2xl font-bold text-[#8B1E1E]">
            Trusted & Certified
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            Approved by FDA and produced under strict quality standards.
          </p>
          <div className="mt-6 bg-white px-6 py-3 rounded-full shadow inline-block">
            FDA Certified
          </div>
        </motion.div>
        <div className="w-full h-20 bg-linear-to-b from-[#F5E6D3] to-white" />
      </section>
      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 text-center bg-[#D97A2B] text-white"
      >
        <h2 className="text-3xl font-bold">Ready to Order?</h2>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="mt-6 bg-[#8B1E1E] text-white px-6 py-3 rounded-full"
        >
          Place Order
        </motion.button>
      </motion.section>
      <OrderModal isOpen={open} onClose={() => setOpen(false)} />
      {/* FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/233504984721"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl z-50"
      >
        chat
      </motion.a>
      <Footer />
    </main>
  );
}
