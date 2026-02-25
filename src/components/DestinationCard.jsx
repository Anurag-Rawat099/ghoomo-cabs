"use client";

import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ name, image }) {
  return (
    <Link
      href={{
        pathname: "/booking",
        query: { destination: name },
      }}
      className="group block p-4"
    >
      <div className="bg-white rounded-2xl  overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image || "/uploads/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            {name}
          </h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm">
            Explore the beauty of {name} with comfortable rides.
          </p>
        </div>
      </div>
    </Link>
  );
}