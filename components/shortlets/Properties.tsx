'use client'
import { useState } from 'react'
import pathment1 from "@/public/shortlets/lekki-avana1.jpg";
import pathment2 from "@/public/shortlets/lekki-avana2.jpg";
import pathment3 from "@/public/shortlets/lekki-avana3.jpg";
import pathment4 from "@/public/shortlets/lekki-avana4.jpg";
import pathment5 from "@/public/shortlets/lekki-avana5.jpg";
import pathment6 from "@/public/shortlets/lekki-avana6.jpg";


const properties = [
  {
    id: 1,
    name: "The Grand Penthouse",
    location: "Victoria Island, Lagos",
    price: "₦85,000",
    rating: 4.9,
    reviews: 142,
    beds: 3,
    baths: 2,
    sqft: 180,
    emoji: pathment1,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Garden View Studio",
    location: "Lekki Phase 1, Lagos",
    price: "₦45,000",
    rating: 4.8,
    reviews: 98,
    beds: 1,
    baths: 1,
    sqft: 60,
    emoji: pathment2,
    tag: "New",
  },
  {
    id: 3,
    name: "Luxury Executive Suite",
    location: "Ikoyi, Lagos",
    price: "₦120,000",
    rating: 5.0,
    reviews: 67,
    beds: 4,
    baths: 3,
    sqft: 250,
    emoji: pathment3,
    tag: "Premium",
  },
  {
    id: 4,
    name: "Cozy City Apartment",
    location: "Ikeja GRA, Lagos",
    price: "₦35,000",
    rating: 4.7,
    reviews: 203,
    beds: 2,
    baths: 1,
    sqft: 90,
    emoji: pathment4,
    tag: null,
  },
  {
    id: 5,
    name: "Beachfront Retreat",
    location: "Elegushi, Lagos",
    price: "₦95,000",
    rating: 4.9,
    reviews: 55,
    beds: 3,
    baths: 2,
    sqft: 160,
    emoji: pathment5,
    tag: "Trending",
  },
  {
    id: 6,
    name: "Corporate Residence",
    location: "Eko Atlantic, Lagos",
    price: "₦150,000",
    rating: 4.8,
    reviews: 34,
    beds: 5,
    baths: 4,
    sqft: 320,
    emoji: pathment6,
    tag: "Premium",
  },
  //   { id: 5, name: 'Beachfront Retreat', location: 'Elegushi, Lagos', price: '₦95,000', rating: 4.9, reviews: 55, beds: 3, baths: 2, sqft： 160, emoji: pathment5, tag： 'Trending' },
  //   { id： 6， name： 'Corporate Residence'， location： 'Eko Atlantic， Lagos'， price： '₦150，000'， rating： 4.8， reviews： 34， beds： 5， baths： 4， sqft： 320, emoji: pathment6, tag： 'Premium' }
];

export default function Properties() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="properties"
      className="py-24 px-6"
      style={{ background: "#fafaf8" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#f9cb01" }}
            >
              Featured Properties
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
            >
              Handpicked for You
            </h2>
            <p className="text-gray-500 mt-3 max-w-md text-sm">
              Every property is inspected, verified, and styled for your comfort
              and convenience.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: "#3d5496" }}
          >
            View All Properties →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                boxShadow:
                  hovered === p.id
                    ? "0 20px 60px rgba(61,84,150,0.15)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                transform:
                  hovered === p.id ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Image */}
              <div
                className="relative h-52 flex items-center justify-center text-6xl"
                style={{
                  background: "linear-gradient(135deg, #3d5496, #1e2d5a)",
                }}
              >
                <img
                  src={p.emoji.src}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                {p.tag && (
                  <span
                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "#f9cb01", color: "#3d5496" }}
                  >
                    {p.tag}
                  </span>
                )}
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  ♡
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "#1a1a2e" }}
                  >
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0 ml-2">
                    <span style={{ color: "#f9cb01" }}>★</span>
                    {p.rating}
                    <span>({p.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-4">📍 {p.location}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span>🛏 {p.beds} Beds</span>
                  <span>🚿 {p.baths} Baths</span>
                  <span>📐 {p.sqft} m²</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#3d5496" }}
                    >
                      {p.price}
                    </span>
                    <span className="text-gray-400 text-xs">/night</span>
                  </div>
                  <button
                    className="text-sm font-semibold px-4 py-2 rounded-xl text-white hover:opacity-90 transition-opacity"
                    style={{ background: "#3d5496" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}