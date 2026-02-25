import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        
        {/* Animated Check */}
        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mb-6 animate-bounce">
          <span className="text-white text-3xl">✓</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Booking <span className="text-yellow-500">Confirmed!</span>
        </h1>

        <p className="text-gray-600 max-w-md mb-6">
          Thank you for booking with Ghoomo Cabs. Our driver will contact you soon.
          Have a safe and happy journey!
        </p>

        <Link href="/">
          <button className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
            Back to Home
          </button>
        </Link>
      </section>
    </>
  );
}
