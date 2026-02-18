"use client";

import {
  Wrench,
  Pipette,
  Zap,
  Home,
  Paintbrush,
  Hammer,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Renovation Services",
    description:
      "Once you decide to proceed with a renovation project, we provide a simple and convenient way to get started with us.",
    icon: <Wrench size={22} />,
    featured: true,
  },
  {
    title: "Plumbing Services",
    description:
      "Our goal is not just to provide a quick fix but to address the underlying issue to prevent future problems.",
    icon: <Pipette size={22} />,
  },
  {
    title: "Electrical Services",
    description:
      "We discuss available options, provide accurate estimates, and answer all your questions.",
    icon: <Zap size={22} />,
  },
  {
    title: "Home Maintenance",
    description:
      "We conduct detailed inspections and identify areas that require professional attention.",
    icon: <Home size={22} />,
  },
  {
    title: "Painting and Drywall",
    description:
      "Our team ensures smooth finishing and quality results that enhance your space.",
    icon: <Paintbrush size={22} />,
  },
  {
    title: "Wood & Flooring",
    description:
      "We provide expert guidance and detailed explanations for the best flooring solutions.",
    icon: <Hammer size={22} />,
  },
];

export default function ServicesRedesignSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0e253a]">
            Our Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We provide reliable solutions designed to improve comfort,
            functionality, and long-term value for your property.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  featured,
}: Service) {
  return (
    <div
      className={`group relative rounded-2xl p-8 transition-all duration-300
      ${
        featured
          ? "bg-gradient-to-br from-[#0e253a] to-[#163a59] text-white shadow-xl scale-[1.03] rotate-3"
          : "bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300
        ${
          featured
            ? "bg-white/15 text-white"
            : "bg-[#0e253a] text-white group-hover:bg-[#0e253a]"
        } group-hover:rotate-3 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed ${
          featured ? "text-white/80" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* subtle glow for featured */}
      {featured && (
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
      )}
    </div>
  );
}
