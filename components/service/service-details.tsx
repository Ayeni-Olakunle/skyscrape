"use client";

import { Check, ChevronRight } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div
          className="lg:col-span-2 space-y-12"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="4000"
        >
          {/* WHAT WE OFFER */}
          <div>
            <h2
              className="text-3xl font-semibold text-[#0b1c39] mb-4"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="4000"
            >
              What We Offer
            </h2>

            <p
              className="text-gray-600 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="4000"
            >
              SKYSCAPE FACILITIES AND PROPERTY MANAGEMENT LTD is a
              forwardthinking facility management firm committed to creating a n
              d maintaining safe, efficient, a n d sustainable environments. We
              specialize in the comprehensive management of facilities across
              various sectors commercial, residential, industrial, a n d
              institutional ensuring that t h e spaces our clients d e p e n d o
              n function seamlessly, every single day.
              <br />
              <br />
              With our t e a m of highly skilled professionals a n d a strong
              focus o n quality, reliability, a n d innovation, w e offer
              integrated solutions t h a t span from maintenance a n d
              operations t o cleaning, security, landscaping, and energy
              management. Our approach is proactive and client-focused, aiming
              not just t o maintain buildings, b u t t o e n h a n c e their
              performance a n d value over time.
              <br />
              <br />
              We understand t h a t every facility is unique. That's why w e
              tailor our services t o m e e t t h e specific n e e d s of e a c
              h client, using data-driven insights and industry best practices t
              o deliver measurable results.
              <br />
              <br />
              Whether w e r e managing a single site or a n extensive property
              portfolio, our goal remains the same: to provide peace of mind,
              optimize resources, a n d h e l p our clients focus o n w h a t
              matters m o s t
            </p>

            <ul
              className="space-y-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="4000"
            >
              <h2 className="text-3xl font-semibold text-[#0b1c39] mb-4">
                Our Core Services
              </h2>
              {[
                "Property Maintenance – Preventive and corrective maintenance to keep facilities operating smoothly and efficiently.",
                "Cleaning & Janitorial Services – Professional cleaning solutions that promote hygiene, comfort, and a healthy environment.",
                "Security Management – Access control, monitoring, and security personnel coordination to ensure safe and secure premises.",
                "Technical Services (Electrical & Plumbing) – Reliable system inspections, repairs, and maintenance to prevent downtime.",
                "Facility Operations & Management – End-to-end coordination of daily building operations for seamless service delivery.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="text-blue-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* TESTIMONIAL */}
          <div
            className="bg-gray-100 rounded-2xl p-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="4000"
          >
            <p className="text-gray-600 italic mb-4">
              “Skyscape has consistently delivered professional and dependable
              facility management services. Their team is responsive, efficient,
              and committed to maintaining high standards across our property.”
            </p>

            <h4 className="font-semibold text-[#0b1c39]">John Carter</h4>
            <span className="text-sm text-yellow-600">Client</span>
          </div>

          {/* WHY CHOOSE */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="4000"
          >
            <h2 className="text-3xl font-semibold text-[#0b1c39] mb-4">
              Why Choose Skyscape?
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Experienced Professionals – A skilled team dedicated to
                maintaining high service standards.
              </li>
              <li>
                Reliable & Proactive Service – We prevent issues before they
                become costly problems.
              </li>
              <li>
                Efficient & Transparent Processes – Clear communication,
                structured timelines, and dependable execution.
              </li>
              <li>
                Client-Focused Approach – Your property’s performance and
                occupant satisfaction are our top priorities.
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Skyscape delivers reliable facility management solutions focused
              on efficiency, safety, and long-term property value. Our team
              ensures every space is properly maintained to provide comfort and
              seamless daily operations.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          className="space-y-8"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-duration="4000"
        >
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
