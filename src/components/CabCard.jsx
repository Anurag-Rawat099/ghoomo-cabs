import Link from "next/link";

export default function CabCard({ title, price, image }) {
  return (
    <div className="w-full h-full">
      <div className="relative bg-white rounded-2xl  overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 h-full flex flex-col">

        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-48 sm:h-54 md:h-62 w-full object-cover"
          />

          {/* Price */}
          <div className="absolute top-3 right-3 bg-black text-yellow-400 px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow">
            ₹{price}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 text-center flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>

          <p className="text-gray-600 mb-4 text-xs sm:text-sm flex-grow">
            Comfortable & Safe Ride for Tourists
          </p>

          <Link
            href={{
              pathname: "/booking",
              query: { cabType: title, cabPrice: price },
            }}
          >
            <button className="mt-auto bg-yellow-500 text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-black hover:text-yellow-400 transition w-full">
              Book Ride
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}