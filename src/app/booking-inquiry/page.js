"use client";

import { useState } from "react";
import Image from "next/image";

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

    window.open(
      `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-gray-50 py-8 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Room <span className="text-yellow-500">Booking</span>
        </h1>
        <p className="text-gray-600 text-xs mt-1">
          Send your stay inquiry and we’ll confirm availability
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden grid lg:grid-cols-2">
        
        {/* Image */}
        <div className="relative h-[220px] lg:h-auto">
          <Image
            src="/uploads/hero2.jpg"
            alt="Room"
            fill
            className="object-cover"
          />
        </div>

        {/* Form */}
        <div className="p-4 md:p-5">
          <h2 className="text-lg font-semibold mb-4">Stay Details</h2>

          <form onSubmit={sendToWhatsApp} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
            />

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                {!form.checkin && (
                  <span className="absolute left-3 top-1 text-gray-400 text-[10px] pointer-events-none">
                    Check-in
                  </span>
                )}
                <input
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 pt-4 pb-1 px-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="relative">
                {!form.checkout && (
                  <span className="absolute left-3 top-1 text-gray-400 text-[10px] pointer-events-none">
                    Check-out
                  </span>
                )}
                <input
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 pt-4 pb-1 px-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              required
              value={form.guests}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={2}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 py-2 rounded-md text-sm font-semibold hover:bg-yellow-400 transition"
            >
              Send Inquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}