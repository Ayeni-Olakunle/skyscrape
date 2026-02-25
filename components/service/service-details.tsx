"use client";

import { Check, ChevronRight, Phone, Mail, User } from "lucide-react";
import { useState } from "react";

export default function ServiceDetails() {
  const [currentTab, setCurrentTab] = useState("Property Management");
  const services = [
    "Property Maintenance – Preventive and corrective maintenance.",
    "Cleaning & Janitorial Services – Professional hygiene solutions.",
    "Security Management – Access control and monitoring.",
    "Technical Services – Electrical and plumbing maintenance.",
    "Facility Operations – Complete building operations management.",
  ];

  const explore = [
    "Property Management",
    "Facility Management",
    "Environmental Services",
  ];

  const explore2 = [
    {
      name: "Property Management",
      description: [
        "Leasing and Property Management",
        "Shortlets and Rental Management",
      ],
    },
    {
      name: "Facility Management",
      description: [
        "Electrical Systems",
        "Maintenance Services",
        "Planned Preventive Maintenance",
        "Plumbing Systems",
        "Refurbishments and Fit Outs",
        "Life Safety Systems",
        "HVAC Systems",
        "Lighting Systems",
      ],
    },
    {
      name: "Environmental Services",
      description: [
        "Waste MManagement",
        "Litter CControl",
        "Vegetation Control",
        "Health, Safety and Environment Services",
        "Sustainability",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-16">
          {/* HEADER */}
          <div>
            <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
              What We Offer
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 leading-tight">
              Smart Facility Management Solutions
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
              SKYSCAPE Facilities and Property Management delivers reliable,
              efficient, and sustainable facility solutions. We ensure your
              buildings operate seamlessly while enhancing performance, safety,
              and long-term value.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Core Services
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-yellow-500 hover:shadow-md transition group"
                >
                  <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-500 group-hover:text-white transition h-fit">
                    <Check size={18} />
                  </div>

                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />

            <p className="text-lg italic text-slate-300">
              “Skyscape has consistently delivered professional and dependable
              facility management services. Their team is responsive and highly
              reliable.”
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-yellow-400">John Carter</h4>
              <span className="text-sm text-slate-400">Property Owner</span>
            </div>
          </div>

          {/* WHY CHOOSE */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Why Choose Skyscape?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Experienced and professional team",
                "Reliable and proactive maintenance",
                "Transparent and efficient processes",
                "Client-focused service approach",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-50 border hover:shadow-md transition"
                >
                  <Check className="text-yellow-600 mb-2" size={20} />
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8 lg:sticky top-24 h-fit">
          {/* EXPLORE CARD */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Explore Services</h3>

            <div className="space-y-3">
              {/* {explore.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-white/10 cursor-pointer transition"
                >
                  <span>{item}</span>
                  <ChevronRight size={18} />
                </div>
              ))} */}
              {explore2.map((item, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition w-full justify-between"
                      onClick={() => setCurrentTab(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                  {currentTab === item.name && (
                    <div className="mt-2 text-sm text-gray-400">
                      {item.description.length > 0 && (
                        <ul className="mt-2 text-sm text-gray-400">
                          {item.description.map((desc, idx) => (
                            <li key={idx} className="ml-4 list-none py-2">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {/* <ul className="mt-2 text-sm text-gray-400">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="ml-4 list-disc">
                        {desc}
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Request Consultation
            </h3>

            <form className="space-y-4">
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-4 top-4 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-4 text-slate-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>

              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-4 top-4 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Facility?
          </h2>

          <p className="text-white/90 mb-6">
            Partner with Skyscape for professional, efficient, and reliable
            facility management solutions.
          </p>

          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}