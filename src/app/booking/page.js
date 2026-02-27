"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

const ADMIN_WHATSAPP_NUMBER = "+918171325155";

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-2 py-4 md:py-10">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Cab <span className="text-yellow-500">Booking</span>
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">
          Reserve your ride quickly and easily
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-48 sm:h-64 md:h-auto">
            <Image
              src="/uploads/sedan.jpg"
              alt="Cab Booking"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white text-sm sm:text-base font-semibold">
                Safe & Comfortable Travel 🚖
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-2 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Ride Details
            </h2>
            <BookingForm adminNumber={ADMIN_WHATSAPP_NUMBER} />
          </div>
        </div>
      </div>
    </section>
  );
}