"use client";

import {
  Leaf,
  Recycle,
  ShieldCheck,
  Trees,
  Trash2,
  CheckCircle,
  Globe,
  Factory,
} from "lucide-react";
import Link from "next/link";

export default function EnvironmentalServicesIndex() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-900 to-slate-900" />

        {/* glow */}
        <div className="absolute w-[700px] h-[350px] bg-green-500/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 text-green-400 mb-4">
              <Leaf />
              <span className="uppercase tracking-widest text-sm">
                Skyscape Environmental Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Environmental Services
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              SKYSCAPE Facilities and Property Management Ltd provides
              comprehensive environmental management solutions focused on
              sustainability, safety, and environmental responsibility.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our services help organizations maintain clean, safe, and
              environmentally compliant facilities while supporting long-term
              sustainability goals.
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Sustainable Environmental Management Solutions
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our environmental services are designed to ensure facilities remain
              clean, compliant, and environmentally responsible. We implement
              structured environmental programs that protect both people and the
              environment.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We work with commercial, residential, industrial, and institutional
              clients to implement sustainable environmental practices that
              improve operational efficiency and reduce environmental impact.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our proactive approach ensures compliance with environmental
              regulations while promoting sustainability and operational
              excellence.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-10 rounded-2xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6">
              Our Environmental Objectives
            </h3>

            <Feature text="Promote environmental sustainability" />
            <Feature text="Ensure environmental compliance" />
            <Feature text="Reduce environmental risks" />
            <Feature text="Improve workplace safety" />
            <Feature text="Support sustainable facility operations" />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Our Environmental Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive environmental services to ensure clean,
              safe, and sustainable environments.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard
              icon={<Trash2 />}
              title="Waste Management"
              text="Efficient waste collection, disposal, and recycling solutions."
            />

            <ServiceCard
              icon={<Recycle />}
              title="Recycling Services"
              text="Promoting recycling practices to reduce environmental impact."
            />

            <ServiceCard
              icon={<Trees />}
              title="Vegetation Control"
              text="Landscaping and vegetation management for safe environments."
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Health, Safety & Environment"
              text="Ensuring compliance with environmental and safety standards."
            />

            <ServiceCard
              icon={<Globe />}
              title="Sustainability Programs"
              text="Implementing eco-friendly sustainability initiatives."
            />

            <ServiceCard
              icon={<Factory />}
              title="Environmental Compliance"
              text="Ensuring facilities meet environmental regulations."
            />

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <StatCard
              number="100%"
              text="Environmental Compliance Focus"
            />

            <StatCard
              number="Eco"
              text="Friendly Sustainable Solutions"
            />

            <StatCard
              number="24/7"
              text="Environmental Support"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">

        <h2 className="text-4xl font-bold mb-4">
          Build a Sustainable Future with SKYSCAPE
        </h2>

        <p className="text-gray-400 mb-8">
          Let us help you maintain safe and sustainable environments.
        </p>

        <Link
          href="/contact-us"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-white transition"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}

/* FEATURE */
function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <CheckCircle size={18} />
      {text}
    </div>
  );
}

/* SERVICE CARD */
function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

      <div className="text-green-600 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {text}
      </p>

    </div>
  );
}

/* STAT CARD */
function StatCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="bg-green-900 text-white p-10 rounded-xl text-center">

      <div className="text-4xl font-bold mb-2">
        {number}
      </div>

      <div className="text-gray-300">
        {text}
      </div>

    </div>
  );
}