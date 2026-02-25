"use client";

import { useState } from "react";
import Image from "next/image";

// 👉 Admin WhatsApp Number (no +, no spaces)
const ADMIN_WHATSAPP_NUMBER = "918171325155";

export default function BookingInquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hotel Booking Inquiry
Name: ${form.name}
Phone: ${form.phone}
Check-in: ${form.checkin}
Check-out: ${form.checkout}
Guests: ${form.guests}
Message: ${form.message}`;

    const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-2 py-4 md:py-10">
      
      {/* Heading */}
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Room <span className="text-yellow-500">Booking</span>
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">
          Send your stay inquiry and we’ll confirm availability
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* Image Section */}
          <div className="relative h-48 sm:h-64 md:h-auto">
            <Image
              src="/uploads/hero2.jpg"
              alt="Room-image"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white text-sm sm:text-base font-semibold">
                Comfortable stays in Mussoorie 🏨
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-2 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Stay Details
            </h2>

            <form onSubmit={sendToWhatsApp} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div className="flex gap-3">
                <input
                  type="date"
                  name="checkin"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                  type="date"
                  name="checkout"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                name="message"
                placeholder="Additional Message"
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Send Inquiry on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}