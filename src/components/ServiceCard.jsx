"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, subtitle, desc, image, link }) {
  return (
    <div className="service-card">
      
      <div className="service-card-image">
        <Image src={image} alt={title} fill />
        <div className="service-card-overlay" />
      </div>

      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-subtitle">{subtitle}</p>
        <p className="service-card-desc">{desc}</p>

        <Link href={link}>
          <button className="service-btn">Book Now</button>
        </Link>
      </div>

    </div>
  );
}