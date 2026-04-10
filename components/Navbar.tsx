// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="Ahavor Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="font-bold text-[#8B1E1E] ">AHAVOR FOODS</h1>
      </div>

      <div className="hidden md:flex space-x-8 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <a
        href="https://wa.me/233504984721"
        className="bg-[#8B1E1E] text-white px-5 py-2 rounded-full text-sm shadow hover:scale-105 transition"
      >
        Order Now
      </a>
    </nav>
  );
}
