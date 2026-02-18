"use client";

import Image from "next/image";
import {
  DoorOpen,
  Lightbulb,
  ShieldCheck,
  Volume2,
  Sun,
  Leaf,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import hero1 from "@/public/hero1.png";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#ffffff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE SIDE */}
          <div className="relative flex justify-center">
            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
              ))}
            </div>

            {/* Circle Image */}
            <div className="relative w-[400px] h-[580px] rounded-full overflow-hidden shadow-xl">
              <Image
                src={hero1}
                alt="Window Installation"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-[#1e2938] text-white w-44 h-44 rounded-t-full rounded-b-2xl flex flex-col items-center justify-center shadow-2xl">
              <h3 className="text-4xl font-bold">70%</h3>
              <p className="text-sm mt-2">Happy</p>
              <p className="text-sm">Customer</p>
            </div>
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div>
            <p className="text-sm text-yellow-500 font-semibold uppercase tracking-wider flex items-center gap-2">
              <div>
                <div className="w-16 h-1 bg-yellow-500 mb-1 rounded-full" />
              </div>{" "}
              About Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#1d2340] mt-4 leading-tight">
              Expertise in windows & door for every style
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              At Skyscape, we are committed to delivering excellence in facility
              management through expertise, innovation, and integrity. With
              years of industry experience, we provide reliable solutions that
              ensure residential and commercial spaces operate efficiently,
              safely, and comfortably. Our dedicated team focuses on maintaining
              high standards while enhancing the value and performance of every
              property we manage.
            </p>

            {/* Mission */}
            <div className="flex gap-4 mt-8">
              <div className="w-13 h-12 bg-yellow-100 flex items-center justify-center rounded-lg">
                <DoorOpen className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#1d2340]">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  To bring a breath of fresh air to facility management
                  practices in the real estate sector.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4 mt-6">
              <div className="w-20 h-12 bg-yellow-100 flex items-center justify-center rounded-lg">
                <Lightbulb className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#1d2340]">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  To be the foremost facility and property management company,
                  using technology and innovations in the country, to serve
                  Nigerians better.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition">
              <Link href="/about-us">Read More</Link>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16" />

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          <Feature icon={<Sun />} text="Energy Saving Technologies" />
          <Feature icon={<Volume2 />} text="Excellent Sound Insulation" />
          <Feature icon={<LayoutGrid />} text="High Light Transmissions" />
          <Feature icon={<ShieldCheck />} text="Durability 10 Years Warranty" />
          <Feature icon={<Leaf />} text="Eco - Friendly Materials" />
          <Feature icon={<DoorOpen />} text="Modern Thoughtful Design" />
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center text-[#1d2340]">
        {icon}
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}
