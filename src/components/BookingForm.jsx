"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function BookingForm({ adminNumber }) {
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    message: "",
    cabType: "",
    cabPrice: "",
  });

  // render date only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // get cab details + destination safely
  useEffect(() => {
    const cabType = searchParams.get("cabType");
    const cabPrice = searchParams.get("cabPrice");
    const destination = searchParams.get("destination");

    setForm((prev) => ({
      ...prev,
      cabType: cabType || prev.cabType,
      cabPrice: cabPrice || prev.cabPrice,
      destination: destination || prev.destination,
    }));
  }, [searchParams]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const text = `Cab Booking Inquiry
Cab: ${form.cabType}
Price: ₹${form.cabPrice}

Name: ${form.name}
Phone: ${form.phone}
Pickup Location: ${form.pickup}
Destination: ${form.destination}
Date: ${form.date}

Message: ${form.message}`;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={sendToWhatsApp} className="space-y-4">

      {/* Selected Cab Info */}
      {form.cabType && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
          <p className="font-semibold text-gray-800">{form.cabType}</p>
          <p className="text-gray-600">₹{form.cabPrice}</p>
        </div>
      )}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="text"
        name="pickup"
        placeholder="Pickup Location"
        required
        value={form.pickup}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        required
        value={form.destination}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md focus:ring-2 focus:ring-yellow-400"
      />

      {/* Date */}
      <div className="relative">
        {mounted && (
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="peer w-full border border-gray-300 pt-5 pb-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 bg-white"
          />
        )}
        <label className="absolute left-3 top-1 text-xs text-gray-500 peer-focus:text-yellow-500 transition">
          Pickup Date
        </label>
      </div>

      <textarea
        name="message"
        placeholder="Additional Message"
        rows={1}
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-md focus:ring-2 focus:ring-yellow-400"
      />

      <button className="w-full bg-yellow-500 text-black py-2.5 text-sm rounded-md font-semibold hover:bg-black hover:text-yellow-400 transition">
        Send Booking on WhatsApp
      </button>
    </form>
  );
}