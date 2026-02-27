"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function BookingForm({ adminNumber }) {
  const searchParams = useSearchParams();
  const destFromQuery = searchParams.get("destination") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: destFromQuery, // pre-fill
    date: "",
    message: "",
  });

  // Update destination if query changes
  useEffect(() => {
    if (destFromQuery) {
      setForm((prev) => ({ ...prev, destination: destFromQuery }));
    }
  }, [destFromQuery]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const text = `Cab Booking Inquiry
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
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="pickup"
        placeholder="Pickup Location"
        required
        value={form.pickup}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        required
        value={form.destination}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="date"
        required
        value={form.date}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Additional Message"
        value={form.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button className="w-full bg-yellow-500 text-black py-2 rounded font-semibold hover:bg-black hover:text-yellow-400 transition">
        Send Booking on WhatsApp
      </button>
    </form>
  );
}