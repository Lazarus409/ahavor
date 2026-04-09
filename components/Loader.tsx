"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed inset-0 bg-[#8B1E1E] flex items-center justify-center z-9999"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-bold"
      >
        AHAVOR
      </motion.h1>
    </motion.div>
  );
}
