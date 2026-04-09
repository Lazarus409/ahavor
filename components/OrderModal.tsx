"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, Package, X } from "lucide-react";

export default function OrderModal({ isOpen, onClose }: any) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOrder = () => {
    if (!name || !location || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const message = `Hello Ahavor,%0A
Name: ${name}%0A
Location: ${location}%0A
Quantity: ${quantity}`;

    window.open(`https://wa.me/233504984721?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* HEADER */}
            <h2 className="text-2xl font-bold text-[#8B1E1E] text-center">
              Place Your Order
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Fast delivery. Fresh quality.
            </p>

            {/* FORM */}
            <div className="mt-6 space-y-4">
              {/* NAME */}
              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#8B1E1E]">
                <User className="text-gray-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none bg-transparent"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* LOCATION */}
              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#8B1E1E]">
                <MapPin className="text-gray-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Delivery Location"
                  className="w-full outline-none bg-transparent"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              {/* QUANTITY */}
              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#8B1E1E]">
                <Package className="text-gray-400 mr-2" size={18} />
                <input
                  type="number"
                  placeholder="Quantity (packs)"
                  className="w-full outline-none bg-transparent"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 space-y-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOrder}
                className="w-full bg-[#8B1E1E] text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                Submit Order
              </motion.button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
