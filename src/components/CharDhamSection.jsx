"use client";

import CabCard from "@/components/CabCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CharDhamSection() {
  const dhams = [
    {
      title: "Yamunotri",
      subtitle: "Origin of River Yamuna",
      desc: "The sacred source of River Yamuna surrounded by beautiful Himalayan landscapes.",
      image: "/uploads/yamunotri.jpg",
      link: "/booking?service=Yamunotri",
      price: "5,999 / trip",
    },
    {
      title: "Gangotri",
      subtitle: "Origin of River Ganga",
      desc: "One of the holiest pilgrimage sites and the origin of the sacred River Ganga.",
      image: "/uploads/gangotri.jpg",
      link: "/booking?service=Gangotri",
      price: "8,499 / trip",
    },
    {
      title: "Kedarnath",
      subtitle: "Lord Shiva Temple",
      desc: "A revered Jyotirlinga dedicated to Lord Shiva amidst the majestic Himalayas.",
      image: "/uploads/kedarnath.jpg",
      link: "/booking?service=Kedarnath",
      price: "15,499 / trip",
    },
    {
      title: "Badrinath",
      subtitle: "Lord Vishnu Temple",
      desc: "The sacred abode of Lord Vishnu and one of India's most important pilgrimage destinations.",
      image: "/uploads/badrinath.jpg",
      link: "/booking?service=Badrinath",
      price: "18,999 / trip",
    },
    {
      title: "Char Dham Package",
      subtitle: "Complete Spiritual Journey",
      desc: "Experience Yamunotri, Gangotri, Kedarnath, and Badrinath in one divine pilgrimage package.",
      image: "/uploads/chardham.jpg",
      link: "/booking?service=CharDham",
      price: "30,999 / trip",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[ Autoplay]}
         
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
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
          {dhams.map((dham, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              <div className="py-4">
                <CabCard
                  {...dham}
                  buttonText="Book Yatra"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}