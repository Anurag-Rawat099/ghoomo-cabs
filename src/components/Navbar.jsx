"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-lg shadow-sm"></div>
      <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/">
          <span className="text-xl font-extrabold text-yellow-500 sm:text-3xl">
            Ghoomo Cabs
          </span>
        </Link>

        <ul className="hidden items-center gap-4 font-medium text-black lg:flex xl:gap-8">
          <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
          <li><Link href="/destinations" className="hover:text-yellow-500 transition">Destinations</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500 transition">About</Link></li>
          <li><Link href="/booking-inquiry" className="hover:text-yellow-500 transition">Rooms</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
          <li><Link href="/ratelist" className="hover:text-yellow-500 transition">Rate  list</Link></li>
        </ul>

        <Link
          href="/booking"
          className="hidden rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black transition hover:bg-black hover:text-yellow-400 lg:block"
        >
          Book Cab
        </Link>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-lg text-2xl text-gray-900 hover:bg-yellow-50 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto rounded-b-2xl border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-lg lg:hidden"
        >
          <ul className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-black sm:px-6">
            {[
              { name: "Home", path: "/" },
              { name: "Destinations", path: "/destinations" },
              { name: "About", path: "/about" },
              { name: "Rooms", path: "/booking-inquiry" },
              { name: "Contact", path: "/contact" },
              { name: "Rate list", path: "/ratelist" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 rounded-lg border border-amber-400 bg-yellow-50 px-3 py-3 text-center transition hover:bg-yellow-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block min-h-11 w-full rounded-lg bg-yellow-400 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-yellow-400"
              >
                Book Cab
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}