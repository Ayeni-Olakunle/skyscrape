"use client";
import whyme from "@/public/whyme.png";

import Image from "next/image";
import {
  Timer,
  Sparkles,
  ShieldCheck,
  Smile,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
};

const features: Feature[] = [
  {
    title: "Less Time, Better Results",
    description:
      "Our proactive maintenance approach minimizes disruptions and keeps your facilities running smoothly, saving time and preventing costly delays.",
    icon: <Timer size={20} />,
    bg: "bg-blue-100 text-blue-600",
  },
  {
    title: "More Efficient Operations",
    description:
      "We use skilled professionals and smart management systems to improve efficiency, reduce operational costs, and ensure seamless daily operations.",
    icon: <Sparkles size={20} />,
    bg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Longer Lasting Facilities",
    description:
      "Through preventive maintenance and quality service delivery, we help extend the lifespan of your assets while preserving property value.",
    icon: <ShieldCheck size={20} />,
    bg: "bg-red-100 text-red-600",
  },
  {
    title: "More Comfortable Experience",
    description:
      "We create clean, safe, and well-managed environments that enhance comfort, productivity, and satisfaction for occupants and visitors.",
    icon: <Smile size={20} />,
    bg: "bg-green-100 text-green-600",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0e253a]">
            Why Choose Us?
          </h2>
          <div className="w-14 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 grid lg:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>

          {/* Right Image */}
          {/* <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src={whyme}
                alt="Dental Experience"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            Decorative Shape
            <div className="absolute -right-4 top-6 bottom-6 w-6 bg-blue-400 rounded-full hidden lg:block" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  bg,
}: Feature) {
  return (
    <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <div
        className={`w-40 md:w-25 h-12 flex items-center justify-center rounded-xl ${bg}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[#0e253a] mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
