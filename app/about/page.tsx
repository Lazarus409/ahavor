"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#8B1E1E]">
          About Ahavor
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg">
          We are committed to delivering nutritious, high-quality Tombrown made
          from natural ingredients to support healthy living.
        </p>
      </motion.section>

      {/* STORY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B1E1E]">Our Story</h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Ahavor was founded with a simple mission: to provide healthy,
            affordable, and delicious food options for families. Our Tombrown is
            carefully prepared using a blend of natural grains to ensure maximum
            nutrition and taste.
          </p>
        </div>
      </motion.section>
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
              From carefully selected grains to a nourishing meal. here’s how
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
      {/* MISSION + VISION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 px-6 text-center"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-white shadow-xl">
            <h3 className="text-xl font-bold text-[#8B1E1E]">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To promote healthy living by providing nutritious and affordable
              food products for everyone.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-xl">
            <h3 className="text-xl font-bold text-[#8B1E1E]">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To become a leading brand in nutritious food products across Ghana
              and beyond.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 text-center bg-[#D97A2B] text-white"
      >
        <h2 className="text-3xl font-bold">Join the Healthy Movement</h2>

        <p className="mt-4">
          Experience the taste of nutrition with Ahavor Tombrown.
        </p>
      </motion.section>

      <Footer />
    </main>
  );
}
