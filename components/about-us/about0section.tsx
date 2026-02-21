"use client";

import Image from "next/image";
import { ShieldCheck, Target, Building2 } from "lucide-react";
import about from "@/public/aboutcom.jpeg";
import pic5 from "@/public/hero.png";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-yellow-600 font-semibold uppercase tracking-wider text-sm">
              About Skyscape
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
              Excellence in Facility &
              <span className="block text-yellow-600">Property Management</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SKYSCAPE Facilities and Property Management delivers reliable,
              innovative, and customized facility management solutions. We help
              businesses and property owners maintain efficient, secure, and
              comfortable environments.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our experienced professionals ensure seamless operations through
              proactive maintenance, technical expertise, and client-focused
              service delivery, allowing you to focus on what matters most.
            </p>

            {/* FEATURE POINTS */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-yellow-600 mt-1" size={22} />
                <p className="text-slate-700">
                  Trusted and reliable facility management professionals
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <Building2 className="text-yellow-600 mt-1" size={22} />
                <p className="text-slate-700">
                  Customized solutions for residential and commercial properties
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <Target className="text-yellow-600 mt-1" size={22} />
                <p className="text-slate-700">
                  Focused on efficiency, safety, and long-term property value
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={pic5}
                alt="Facility management"
                fill
                className="object-contain w-full h-full"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border max-w-xs">
              <p className="text-3xl font-bold text-yellow-600">2+</p>

              <p className="text-slate-600 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* MISSION / VISION / VALUE */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* VALUE */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
            <div className="bg-yellow-100 w-fit p-3 rounded-xl mb-4">
              <Building2 className="text-yellow-600" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Our Vision
            </h3>

            <p className="text-slate-600">
              To be Nigeria’s leading facility and property management company,
              delivering excellence through innovation and technology.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
            <div className="bg-yellow-100 w-fit p-3 rounded-xl mb-4">
              <Target className="text-yellow-600" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Our Mission
            </h3>

            <p className="text-slate-600">
              To redefine facility management through professional service,
              innovation, and client-focused solutions.
            </p>
          </div>

          {/* VALUE */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
            <div className="bg-yellow-100 w-fit p-3 rounded-xl mb-4">
              <ShieldCheck className="text-yellow-600" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Our Values
            </h3>

            <p className="text-slate-600">
              Integrity, reliability, innovation, and excellence drive
              everything we do for our clients.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA CARD */}
        {/* <div className="relative">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-12 text-white shadow-xl grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Building Better Managed Environments
              </h3>

              <p className="text-white/90 text-lg">
                We create efficient, safe, and productive environments that
                enhance property value and client satisfaction.
              </p>

              <button className="mt-6 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                Learn More
              </button>
            </div>

            <div className="relative h-[250px] rounded-2xl overflow-hidden">
              <Image src={about} alt="Facility" fill className="object-cover" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}