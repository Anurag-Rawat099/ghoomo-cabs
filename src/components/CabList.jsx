"use client";

import CabCard from "./CabCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CabList() {
  const cabs = [
    { id: 1, title: "Sedan (City Ride)", price: "100/km", image: "/uploads/Sedan.jpg" },
    { id: 2, title: "SUV (Hill Ride)", price: "150/km", image: "/uploads/suv.jpg" },
    { id: 3, title: "Luxury (Premium)", price: "220/km", image: "/uploads/luxary.jpg" },
    { id: 4, title: "TempoTraveller (Group)", price: "350/km", image: "/uploads/tempo.jpg" },
    { id: 5, title: "Scooty", price: "1200/day", image: "/uploads/scooty.jpg" },
    { id: 6, title: "Bike", price: "1500/day", image: "/uploads/bike.jpg" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Pick Your <span className="text-yellow-500">Perfect Ride</span>
      </h2>

      {/* IMPORTANT: outer padding so shadows don’t cut */}
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cabs.map((cab) => (
            <SwiperSlide key={cab.id} className="!overflow-visible">
              <div className="py-4"> {/* vertical breathing space for shadow */}
                <CabCard {...cab} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}