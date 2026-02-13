import React from 'react'
import Image from "next/image";
import { Phone } from "lucide-react";
import union from "@/public/Union.png";
import Link from "next/link";

export default function AboutSkyscape() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={union}
              alt="Construction team"
              width={600}
              height={700}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* Small Label */}
          <p className="text-yellow-500 font-medium mb-3">About SkyScape</p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {/* Crafting Tomorrow’s <br /> Landmarks Today */}
            Managing Spaces for <br />a Better Tomorrow
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            At Skyscape, we are committed to delivering excellence in facility
            management through expertise, innovation, and integrity. With years
            of industry experience, we provide reliable solutions that ensure
            residential and commercial spaces operate efficiently, safely, and
            comfortably. Our dedicated team focuses on maintaining high
            standards while enhancing the value and performance of every
            property we manage.
          </p>

          {/* Highlight Card */}
          <div className="bg-yellow-500 text-white rounded-xl p-6 mb-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Creating Well-Managed Spaces with Innovation & Excellence
            </h3>
            <p className="text-sm text-white/90">
              Skyscape delivers dependable facility management solutions that
              combine smart systems, proactive maintenance, and professional
              service. We focus on sustainability, efficiency, and long-term
              value, helping property owners and occupants enjoy spaces that are
              well maintained and built for everyday comfort.
            </p>
          </div>

          {/* Bottom Text */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether managing residential apartments, commercial facilities, or
            mixed-use properties, our experienced team ensures every detail is
            handled with precision. We prioritize safety, operational
            efficiency, and seamless service delivery — turning complex facility
            needs into simple, reliable solutions.
          </p>

          {/* CTA + Contact */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/about-us"
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-3 rounded-full font-medium"
            >
              MORE ABOUT US →
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us Anytime</p>
                <p className="font-semibold text-gray-900">
                  (+234) 0706 345 4191
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
