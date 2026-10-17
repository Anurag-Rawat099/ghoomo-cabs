import Image from "next/image";
import Link from "next/link";

export default function CabCard({ title, price, image }) {
  return (
    <div className="w-full  h-full">
      <div className="relative mx-auto flex h-full w-full max-w-[350px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2">

        {/* Image */}
        <div className="relative h-48 w-full sm:h-56 lg:h-64">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            className="object-cover"
          />

         
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
            <button className="mt-auto w-full rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black hover:text-yellow-400 sm:w-auto sm:text-base">
              Book Ride
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}