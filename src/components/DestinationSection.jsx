"use client";

import DestinationCard from "./DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DestinationSection({ variant = "slider" }) {
  const destinations = [
    { name: "Kempty Falls", image: "/uploads/kempty-fall.jpg" },
    { name: "Gun Hill Point", image: "/uploads/gun-hill.jpg" },
    { name: "Company Garden", image: "/uploads/company-garden.jpg" },
    { name: "Mall Road Mussoorie", image: "/uploads/mall-road.jpg" },
    { name: "Lal Tibba", image: "/uploads/lal-tibba.jpg" },
    { name: "Camel Back Road", image: "/uploads/camel-back.jpg" },
    { name: "Cloud’s End", image: "/uploads/clouds-end.jpg" },
    { name: "George Everest", image: "/uploads/george-everest.jpg" },
    { name: "Bhatta Falls", image: "/uploads/bhatta-falls.jpg" },
    { name: "Mussoorie Lake", image: "/uploads/mussoorie-lake.jpg" },
    { name: "Jharipani Falls", image: "/uploads/jharipani.jpg" },
    { name: "Nag Tibba", image: "/uploads/nag-tibba.jpg" },
    { name: "Dhanaulti", image: "/uploads/dhanaulti.jpg" },
    { name: "Tehri Lake", image: "/uploads/tehri-lake.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Top <span className="text-yellow-500">Destinations</span>
      </h2>

      {variant === "slider" && (
        <div className="max-w-7xl mx-auto px-6 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={4}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {destinations.map((place, index) => (
              <SwiperSlide key={index}>
                <DestinationCard {...place} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {variant === "grid" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {destinations.map((place, index) => (
            <DestinationCard key={index} {...place} />
          ))}
        </div>
      )}
    </section>
  );
}