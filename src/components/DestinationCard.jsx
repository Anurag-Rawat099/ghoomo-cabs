
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
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image || "/uploads/placeholder.jpg"}
            alt={name}
            fill
            sizes="(max-width: 479px) 100vw, (max-width: 639px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
            {name}
          </h3>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-600">
            Explore the beauty of {name} with comfortable rides.
          </p>
        </div>
      </div>
    </Link>
  );
}
