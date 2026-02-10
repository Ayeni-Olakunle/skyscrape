"use client";

import { Check, ChevronRight } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">
          {/* WHAT WE OFFER */}
          <div>
            <h2 className="text-3xl font-semibold text-[#0b1c39] mb-4">
              What We Offer
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Caspira, we specialize in high-quality residential construction
              that blends style, functionality, and durability. Whether you're
              building your dream home from the ground up or renovating an
              existing space, we bring expert craftsmanship and innovative
              solutions to every project.
            </p>

            <ul className="space-y-3">
              {[
                "Custom Home Construction – We design and build homes tailored to your unique vision and lifestyle.",
                "Home Renovations & Additions – Upgrade your space with seamless renovations and expansions.",
                "Luxury Home Builds – High-end designs with premium materials and superior finishes.",
                "Sustainable & Smart Homes – Energy-efficient and technology-integrated homes for modern living.",
                "Project Management – From permits to final finishes, we handle every detail with precision.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="text-green-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* TESTIMONIAL */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <p className="text-gray-600 italic mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit
              tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <h4 className="font-semibold text-[#0b1c39]">John Doe</h4>
            <span className="text-sm text-yellow-600">Designer</span>
          </div>

          {/* WHY CHOOSE */}
          <div>
            <h2 className="text-3xl font-semibold text-[#0b1c39] mb-4">
              Why Choose Caspira?
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Experienced Team – Skilled professionals dedicated to
                excellence.
              </li>
              <li>
                Quality Materials – Durable, high-quality materials that stand
                the test of time.
              </li>
              <li>
                On-Time & On-Budget – Transparent timelines and cost-effective
                solutions.
              </li>
              <li>
                Client-Centered Approach – Your satisfaction is our priority.
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit
              tellus luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          {/* EXPLORE MORE */}
          <div className="bg-[#0b1c39] text-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More</h3>

            <ul className="space-y-3">
              {[
                "Commercial Construction",
                "Renovations & Remodeling",
                "Custom Construction Solutions",
                "Sustainable & Smart Building",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-white/10 pb-2"
                >
                  <span>{item}</span>
                  <ChevronRight size={16} />
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#0b1c39] mb-4">
              Contact us today
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="email"
                placeholder="Type your email address"
                className="w-full border rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-full font-medium transition"
              >
                Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
