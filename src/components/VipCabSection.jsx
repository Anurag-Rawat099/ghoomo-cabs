"use client";

export default function VipCabSection() {
  const services = [
    {
      title: "JW Marriot Cab Service",
      subtitle: "5 star Cabs for 5 star Hotels",
      desc: "Premium Cab service for hotel guests with professional drivers and smooth city travel experience.",
      price: "₹6,999 / trip",
      image: "/uploads/jw.jpg",
      link: "/booking?service=VIP Sedan Service",
    },
    {
      title: "VIP Cab Service",
      subtitle: "High-End Travel",
      desc: "Spacious luxury SUVs for elite guests ensuring comfort, safety, and style in hill journeys.",
      price: "₹4,999 / trip",
      image: "/uploads/vip-suv.jpg",
      link: "/booking?service=VVIP SUV Service",
    },
    {
      title: "Airport Pickup",
      subtitle: "Priority Pickup & Drop",
      desc: "Seamless airport transfers with on-time pickup, luggage assistance, and VIP treatment.",
      price: "₹3,499",
      image: "/uploads/airport-service.jpg",
      link: "/booking?service=Airport Pickup VIP",
    },
    {
      title: "Private Chauffeur",
      subtitle: "Personal Driver",
      desc: "Dedicated chauffeur for full-day service with complete flexibility and privacy.",
      price: "₹6,999 / day",
      image: "/uploads/private-chauffeur.jpg",
      link: "/booking?service=Private Chauffeur",
    },
  ];

  return (
    <section className="py-24 text-black px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            VIP <span className="text-yellow-500">Cab Services</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Exclusive luxury cab services designed for 5-star hotel guests, offering comfort, privacy, and premium travel experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <div key={item.title} className="service-card bg-white text-black h-full flex flex-col">

              {/* Image */}
              <div className="service-card-image">
                <img src={item.image} alt={item.title} />
                <div className="service-card-overlay" />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>

                {/* VIP Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  VIP
                </div>
              </div>

              {/* Content */}
              <div className="service-card-content flex flex-col flex-grow">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-subtitle">{item.subtitle}</p>
                <p className="service-card-desc">{item.desc}</p>

                <div className="mt-auto">
                  <a href={item.link} className="service-btn">
                    Book Now
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}