"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlider } from "@/data/image";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!heroSlider.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[45vh] md:h-screen flex items-center justify-center overflow-hidden">

      {heroSlider.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`hero-${index}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Explore <span className="text-yellow-500">Mussoorie</span> with Comfort
        </h1>

        <p className="text-white text-lg md:text-xl mb-6">
          Reliable cab services for tourists in Mussoorie, Dehradun, and nearby hill destinations.
        </p>

        <Link href="/booking">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-yellow-400 transition">
            Book Your Ride
          </button>
        </Link>
      </div>
    </section>
  );
}