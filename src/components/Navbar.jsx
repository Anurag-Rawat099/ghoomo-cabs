"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Background Blur Layer */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-lg shadow-sm"></div>

      {/* Navbar Content */}
      <div className="relative px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-yellow-500">
            Ghoomo Cabs
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-black">
          <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
          <li><Link href="/destinations" className="hover:text-yellow-500 transition">Destinations</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500 transition">About</Link></li>
          <li><Link href="/booking-inquiry" className="hover:text-yellow-500 transition">Rooms</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
        </ul>

        {/* Desktop Button */}
        <Link href="/booking" className="hidden md:block">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-yellow-400 transition">
            Book Cab
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-red-500"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full right-0  bg-white/50 backdrop-blur-lg shadow-lg rounded-b-2xl ">
          <ul className="flex flex-col gap-3 px-6  py-5 text-black font-medium text-lg">

            {[
              { name: "Home", path: "/" },
              { name: "Destinations", path: "/destinations" },
              { name: "About", path: "/about" },
              { name: "Rooms", path: "/booking-inquiry" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-3 rounded-lg border-1 border-gray-50 hover:bg-yellow-100 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/booking" onClick={() => setOpen(false)}>
                <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition">
                  Book Cab
                </button>
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}