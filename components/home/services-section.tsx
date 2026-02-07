"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Aspen Heights",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service1.jpg",
  },
  {
    title: "Forest Hill Towers",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service2.jpg",
  },
  {
    title: "Bayside Residences",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service3.jpg",
  },
  {
    title: "Custom Construction",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service4.jpg",
  },
  {
    title: "Sustainable Building",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service5.jpg",
  },
  {
    title: "Commercial Build",
    description: "Lorem ipsum dolor sit amet conse ctetur adip scing",
    image: "/services/service6.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-amber-600 font-medium mb-2">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Construction Services
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet conse ctetur adipiscing elit
              tellus luctus nec ullam corper mattis pulvinar.
            </p>

            <button className="bg-amber-600 hover:bg-amber-700 transition text-white px-6 py-3 rounded-full font-medium">
              EXPLORE ALL SERVICES →
            </button>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={600}
                className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white w-full">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-white/80 mb-4">
                  {service.description}
                </p>

                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
