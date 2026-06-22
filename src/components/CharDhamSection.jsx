"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CharDhamSection() {
    const dhams = [
        {
            title: "Yamunotri",
            subtitle: "Origin of River Yamuna",
            desc: "Scenic spiritual start surrounded by mountains.",
            price: "₹8,999",
            image: "/uploads/yamunotri.jpg",
            link: "/booking?service=Yamunotri Yatra",
        },
        {
            title: "Gangotri",
            subtitle: "Origin of River Ganga",
            desc: "Sacred temple and origin of holy Ganga from the Himalayas.",
            price: "₹9,499",
            image: "/uploads/gangotri.jpg",
            link: "/booking?service=Gangotri Yatra",
        },
        {
            title: "Kedarnath",
            subtitle: "Lord Shiva Temple",
            desc: "Divine Jyotirlinga in the Majestic Himalayas.",
            price: "₹12,999",
            image: "/uploads/kedarnath.jpg",
            link: "/booking?service=Kedarnath Yatra",
        },
        {
            title: "Badrinath",
            subtitle: "Lord Vishnu Temple",
            desc: "Sacred dham surrounded by majestic peaks.",
            price: "₹10,999",
            image: "/uploads/badrinath.jpg",
            link: "/booking?service=Badrinath Yatra",
        },
        {
            title: "Char Dham Package",
            subtitle: "All Four Dhams",
            desc: "Complete spiritual journey covering all four sacred dhams",
            price: "₹37,999",
            image: "/uploads/chardham.jpg",
            link: "/booking?service=Char Dham Package",
        }
    ];

    return (
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        Char Dham <span className="text-yellow-500">Yatra</span>
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Choose your sacred journey with transparent pricing and premium travel experience.
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop
                    breakpoints={{
                        480: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                >
                    {dhams.map((dham) => (
                        <SwiperSlide key={dham.title} className="h-auto">

                            <div className="service-card m-4 h-full  flex flex-col">

                                {/* Image */}
                                <div className="service-card-image">
                                    <img src={dham.image} alt={dham.title} />

                                    {/* Overlay */}
                                    <div className="service-card-overlay" />

                                    {/* Price */}
                                    <div className="absolute top-4 right-4 bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                                        {dham.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="service-card-content flex flex-col flex-grow">
                                    <h3 className="service-card-title">{dham.title}</h3>
                                    <p className="service-card-subtitle">{dham.subtitle}</p>
                                    <p className="service-card-desc">{dham.desc}</p>

                                    {/* Button aligned bottom */}
                                    <div className="mt-auto">
                                        <a href={dham.link} className="service-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}