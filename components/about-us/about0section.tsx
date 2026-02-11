"use client";

import Image from "next/image";

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
              About Caspira
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Caspira, we are dedicated to building excellence with precision,
              innovation, and integrity. With years of industry expertise, we
              deliver high-quality construction solutions that stand the test of
              time. Whether it’s residential, commercial, or industrial projects,
              our skilled team ensures every detail is executed flawlessly.
            </p>

            <h3 className="text-2xl font-semibold text-[#0b1c39] mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit
              tellus luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet consectetur adipisicing elit tellus luctus
              nec ullamcorper mattis pulvinar dapibus leo.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0b1c39] mb-4">
              Our Value
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit tellus
              luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit tellus luctus nec ullamcorper mattis
              pulvinar dapibus leo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit tellus luctus nec ullamcorper mattis.
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
              Caspira creates timeless, high-quality structures that combine
              innovative design, sustainable practices, and unmatched
              craftsmanship, shaping spaces built to last.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] lg:h-[380px] lg:-ml-20 mt-6 lg:mt-0">
            <Image
              src="/images/about-workers.jpg"
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
