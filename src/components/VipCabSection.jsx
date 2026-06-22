"use client";

import CabCard from "@/components/CabCard";

export default function VipCabSection() {
  const services = [
    {
      title: "JW Marriot Cab",
      subtitle: "5 Star Cabs for 5 Star Hotels",
      desc: "Premium cab service for hotel guests with professional drivers and smooth city travel experience.",
      price: "6,999 / trip",
      image: "/uploads/jw.jpg",
      badge: "VIP",
    },
    {
      title: "VIP Cab Service",
      subtitle: "High-End Travel",
      desc: "Spacious luxury SUVs for elite guests ensuring comfort, safety, and style in hill journeys.",
      price: "7,999 / trip",
      image: "/uploads/vip-suv.jpg",
      badge: "VIP",
    },
    {
      title: "Airport Pickup",
      subtitle: "Priority Pickup & Drop",
      desc: "Seamless airport transfers with on-time pickup, luggage assistance, and VIP treatment.",
      price: "6,499",
      image: "/uploads/airport-service.jpg",
      badge: "VIP",
    },
    {
      title: "Private Chauffeur",
      subtitle: "Personal Driver",
      desc: "Dedicated chauffeur for full-day service with complete flexibility and privacy.",
      price: "10,999 / day",
      image: "/uploads/private-chauffeur.jpg",
      badge: "VIP",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            VIP <span className="text-yellow-500">Cab Services</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Exclusive luxury cab services designed for 5-star hotel guests,
            offering comfort, privacy, and premium travel experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <CabCard
              key={index}
              {...item}
              buttonText="Book Ride"
            />
          ))}
        </div>
      </div>
    </section>
  );
}