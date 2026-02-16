"use client";

import Image from "next/image";
import about from "@/public/aboutcom.jpeg";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <span className="text-yellow-600 font-medium flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-yellow-600 inline-block"></span>
              About
            </span>

            <h2 className="text-4xl font-semibold text-[#0b1c39] mb-6">
              About Skyscape
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At SKYSCAPE FACILITIES AND PROPERTY MANAGEMENT, where excellence
              meets reliability, innovation, and integrity.We are proud to be
              your trusted partner in delivering comprehensive and customized
              facility management solutions that ensure operational efficiency,
              safety, and comfort for your assets and environments.
              <br />
              <br />
              W e understand that every property is unique, a n d s o a r e t h
              e n e e d s of its occupants. That's why we are committed
              toproviding top-tier services ranging from maintenance a n d
              cleaning t o security, energy management, and technical support
              all tailored to suit your specific r e q u i r e m e n t s .
              <br />
              <br />
              Our team of dedicated professionals brings a wealth of experience,
              industry expertise, and a proactive approach to managing your
              facilities, allowing our clients focus o n w h a t matters most.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0b1c39] mb-4">
              Our Value
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To be the foremost facility and property management company, using
              technology a n d innovations i n t h e country, t o serve
              Nigerians better.
            </p>

            <br />
            <br />

            <h3 className="text-2xl font-semibold text-[#0b1c39] mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To bring a breath of fresh air to facility m a n a g e m e n t
              practices in t h e real e s t a t e s e c t o r
            </p>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHT */}
        <div className="relative grid lg:grid-cols-2 items-center">
          {/* TEXT CARD */}
          <div className="bg-yellow-600 text-white rounded-2xl p-10 relative z-10">
            <h3 className="text-2xl font-semibold mb-3">
              Building Timeless Structures with Innovation & Excellence.
            </h3>

            <p className="text-white/90 leading-relaxed">
              At Skyscape, we are dedicated to creating well-managed
              environments that support productivity, comfort, and a higher
              standard of living.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] lg:h-[380px] lg:-ml-20 mt-6 lg:mt-0">
            <Image
              src={about}
              alt="Construction Team"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
