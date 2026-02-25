"use client";

import { motion } from "framer-motion";

export default function AboutHero({ stats }) {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white to-gray-50 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        About <span className="text-yellow-500">Ghoomo Cabs</span>
      </motion.h1>

      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
        Premium cab service helping tourists explore Mussoorie and nearby hill
        destinations with safe, reliable, and comfortable rides.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {stats.map((s) => (
          <div key={s.label}>
            <h3 className="text-3xl font-bold text-yellow-500">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}