import FounderSection from "@/components/FounderSection";
import AboutHero from "@/components/AboutHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Ghoomo Cabs",
  description:
    "Learn about Ghoomo Cabs — premium cab service offering safe, reliable and comfortable travel across Uttarakhand.",
};

/* ---------------- DATA ---------------- */

const stats = [
  { value: "5+ Years", label: "Experience" },
  { value: "10K+", label: "Happy Tourists" },
  { value: "50+", label: "Destinations Covered" },
];

const mission = [
  {
    icon: "🚖",
    title: "Reliable Rides",
    text: "On-time pickups and experienced drivers who know every route.",
  },
  {
    icon: "🛡️",
    title: "Safe Travel",
    text: "Verified drivers and well-maintained vehicles.",
  },
  {
    icon: "🌄",
    title: "Local Expertise",
    text: "Discover hidden gems with local guidance.",
  },
];

const whyChoose = [
  {
    icon: "🚗",
    title: "Comfortable Vehicles",
    text: "Clean and well-maintained cabs.",
  },
  {
    icon: "🧑‍✈️",
    title: "Experienced Drivers",
    text: "Local professionals with deep knowledge.",
  },
  {
    icon: "⏰",
    title: "Punctual Service",
    text: "Always on time for your convenience.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    text: "No hidden charges ever.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Amazing experience! Clean car and very polite driver.",
  },
  {
    name: "Priya Verma",
    text: "Best cab service. Highly recommended!",
  },
  {
    name: "Amit Singh",
    text: "Smooth booking and safe ride throughout the trip.",
  },
];

const serviceAreas = [
  "Mussoorie",
  "Dehradun",
  "Dhanaulti",
  "Kanatal",
  "Rishikesh",
  "Tehri Lake",
];

/* ---------------- PAGE ---------------- */

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <AboutHero stats={stats} />

      {/* BRAND STATEMENT */}
      <section className="py-14 text-center max-w-4xl mx-auto px-6">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At <span className="font-semibold text-gray-900">Ghoomo Cabs</span>, we
          combine local expertise with professional service to deliver seamless
          travel experiences across Uttarakhand’s most beautiful destinations.
        </p>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-yellow-500">Story</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Ghoomo Cabs started with a simple vision — to make hill travel easy,
              safe, and memorable.
            </p>
            <p className="text-gray-600">
              From scenic drives to comfortable journeys, we ensure every trip
              feels effortless and enjoyable.
            </p>
          </div>

          <Image
            src="/uploads/hero1.jpg"
            alt="Travel"
            width={700}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CREATIVE SPLIT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/uploads/sedan.jpg"
            alt="Journey"
            width={650}
            height={420}
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Crafted for Comfortable Journeys
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We believe travel should be smooth, safe, and memorable. Our
              services are designed to provide peace of mind so you can focus on
              enjoying the journey.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
              “Travel is not just about reaching a destination — it’s about the
              experience along the way.”
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-yellow-500">Mission</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {mission.map((m) => (
            <div
              key={m.title}
              className="bg-white border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{m.icon}</div>
              <h3 className="font-bold text-lg mb-2">{m.title}</h3>
              <p className="text-gray-600 text-sm">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why <span className="text-yellow-500">Choose Us</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {whyChoose.map((item) => (
            <div
              key={item.title}
              className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          We <span className="text-yellow-500">Serve</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Our services cover major tourist destinations across Uttarakhand.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-yellow-100 rounded-full text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-yellow-500">Customers Say</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">“{t.text}”</p>
              <h4 className="font-bold text-yellow-500">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Plan Your Journey?
        </h2>
        <p className="text-gray-300 mb-6">
          Book your ride today and experience safe, comfortable travel.
        </p>

        <Link
          href="/booking"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Book Your Ride
        </Link>
      </section>

      {/* FOUNDER */}
      <FounderSection />
    </>
  );
}