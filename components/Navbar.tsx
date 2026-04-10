"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="Ahavor Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="font-bold text-[#8B1E1E]">AHAVOR FOODS</h1>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex space-x-8 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* ORDER BUTTON */}
        <a
          href="https://wa.me/233504984721"
          className="bg-[#8B1E1E] text-white px-4 py-2 rounded-full text-sm shadow"
        >
          Order
        </a>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/product" onClick={() => setOpen(false)}>
            Product
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
