"use client";

import {
  Wrench,
  Zap,
  Droplets,
  Wind,
  ShieldCheck,
  CheckCircle,
  Settings,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function Index() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900" />

        <div className="absolute w-[700px] h-[300px] bg-blue-500/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <Wrench />
              <span className="uppercase tracking-widest text-sm">
                Skyscape Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Facility Management
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              SKYSCAPE Facilities and Property Management Ltd delivers
              comprehensive facility management solutions designed to ensure
              operational efficiency, safety, and optimal performance of your
              buildings and infrastructure.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our proactive approach ensures your facilities remain functional,
              safe, and efficient while reducing downtime and operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Complete Facility Operations Management
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in managing all technical and operational aspects of
              facilities, ensuring systems operate efficiently and reliably. Our
              team delivers preventive maintenance, rapid response, and expert
              supervision.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services cover commercial buildings, residential estates,
              industrial facilities, and institutional environments.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on safety, efficiency, and sustainability while ensuring
              uninterrupted operations.
            </p>
          </div>

          {/* GLASS CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>

            <Feature text="Ensure facility safety and compliance" />
            <Feature text="Reduce operational downtime" />
            <Feature text="Improve system efficiency" />
            <Feature text="Extend equipment lifespan" />
            <Feature text="Optimize maintenance costs" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Facility Services</h2>

            <p className="text-gray-600">
              Comprehensive technical and operational support services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap />}
              title="Electrical Systems"
              text="Installation, maintenance, and repair of electrical systems."
            />

            <ServiceCard
              icon={<Settings />}
              title="Preventive Maintenance"
              text="Routine maintenance to prevent breakdowns."
            />

            <ServiceCard
              icon={<Droplets />}
              title="Plumbing Systems"
              text="Water supply, drainage, and plumbing maintenance."
            />

            <ServiceCard
              icon={<Wind />}
              title="HVAC Systems"
              text="Heating, ventilation, and air conditioning management."
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Life Safety Systems"
              text="Fire safety and emergency response systems."
            />

            <ServiceCard
              icon={<Building />}
              title="Refurbishment & Fit-Out"
              text="Facility upgrades and interior improvements."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let SKYSCAPE Manage Your Facility
        </h2>

        <p className="text-gray-400 mb-8">
          We ensure safety, efficiency, and reliability.
        </p>

        <Link
          href="/contact-us"
          className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-lg font-semibold text-black transition"
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

      <div className="text-blue-600 mb-4">
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