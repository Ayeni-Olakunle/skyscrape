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
      "Once you decide to proceed with a renovation project, offers a simple and convenient way to get in touch with us.",
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
      "They will discuss any available options, provide accurate cost estimates, and answer any questions you may have.",
    icon: <Zap size={22} />,
  },
  {
    title: "Home Maintenance",
    description:
      "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
    icon: <Home size={22} />,
  },
  {
    title: "Painting and Drywall",
    description:
      "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
    icon: <Paintbrush size={22} />,
  },
  {
    title: "Wood & Flooring",
    description:
      "We will provide you with a detailed explanation of the recommended wood or flooring services.",
    icon: <Hammer size={22} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-800 mb-14">
          Our Services
        </h2>

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
      className={`rounded-2xl p-8 transition duration-300 shadow-sm
        ${
          featured
            ? "bg-orange-500 text-white rotate-[-2deg]"
            : "bg-white hover:shadow-lg"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-6
          ${featured ? "bg-white text-orange-500" : "bg-orange-500 text-white"}
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed ${
          featured ? "text-orange-100" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
