"use client";

import { useState } from "react";

// 👉 Admin WhatsApp Number (without + or spaces for wa.me link)
const ADMIN_WHATSAPP_NUMBER = "918171325155";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Booking Inquiry",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const text = `📩 *Contact Inquiry*
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}
Message: ${form.message}`;

    const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 text-center text-white">
        <div className="absolute inset-0 bg-[url('/uploads/hero1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Plan Your Next Journey
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Contact Ghoomo Cabs for instant bookings, travel guidance, or custom
            tour packages across Uttarakhand.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">

          {/* GLASS CONTACT CARDS */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "📞", title: "Call Us", text: "+91 98765 43210" },
              { icon: "💬", title: "WhatsApp", text: "+91 81713 25155" },
              { icon: "✉️", title: "Email", text: "support@ghoomo-cabs.in" },
              { icon: "📍", title: "Office", text: "Mall Road, Mussoorie" },
            ].map((item) => (
              <div
                key={item.title}
                className="backdrop-blur bg-white/70 border border-white/40 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>

          {/* FORM + BENEFITS */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={sendToWhatsApp} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-yellow-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-yellow-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-yellow-500"
                />

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-yellow-500"
                >
                  <option>Booking Inquiry</option>
                  <option>Tour Package</option>
                  <option>Support</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-yellow-500"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition"
                >
                  Send on WhatsApp
                </button>
              </form>
            </div>

            {/* BENEFITS */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold">
                Why Reach Out to Ghoomo Cabs?
              </h2>

              <p className="text-gray-600">
                Our travel experts are ready to help you with bookings,
                destination advice, and custom travel plans.
              </p>

              <div className="space-y-3">
                {[
                  "Instant cab availability",
                  "Local travel experts",
                  "Custom tour packages",
                  "24/7 emergency support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-yellow-500">✔</span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Quick Help
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How quickly can I get a cab?",
                  a: "Usually within 10–20 minutes depending on availability.",
                },
                {
                  q: "Do you provide outstation trips?",
                  a: "Yes, we offer trips across Uttarakhand and nearby states.",
                },
                {
                  q: "Are your drivers verified?",
                  a: "All drivers are trained, verified, and experienced.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white p-4 rounded-lg shadow cursor-pointer"
                >
                  <summary className="font-semibold">{faq.q}</summary>
                  <p className="text-gray-600 mt-2 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="mb-20">
            <iframe
              title="Mussoorie Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7860944250195!2d78.07186631503825!3d30.45975848178687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093a3a43e7e1a5%3A0xe84f2a2d3281f7f3!2sMall%20Road%2C%20Mussoorie!5e0!3m2!1sen!2sin!4v1706150000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              className="rounded-2xl shadow-lg border-0"
              loading="lazy"
            />
          </div>

          {/* CTA */}
          <div className="text-center py-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-black shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Ready to Book Your Ride?
            </h2>
            <p className="mb-6">
              Experience safe, comfortable, and reliable travel with Ghoomo Cabs.
            </p>

            <a
              href="/booking"
              className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Book Now
            </a>
          </div>

        </div>
      </section>
    </>
  );
}