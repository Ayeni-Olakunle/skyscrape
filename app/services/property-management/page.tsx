"use client";

import {
  Building2,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function PropertyManagementPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-yellow-950 to-slate-900" />

        {/* glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <Building2 size={28} />
              <span className="uppercase tracking-widest text-sm">
                Skyscape Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Property Management Solutions
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At SKYSCAPE Facilities and Property Management Ltd, we deliver
              comprehensive property management solutions designed to protect,
              enhance, and maximize the value of your real estate assets. Our
              services ensure operational efficiency, tenant satisfaction, and
              long-term profitability for residential, commercial, and mixed-use
              properties.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                End-to-End Property Management Excellence
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Managing properties requires expertise, attention to detail,
                and a proactive approach. At SKYSCAPE, we take full ownership
                of your property operations, ensuring smooth day-to-day
                management while improving long-term performance.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our experienced team handles leasing, tenant relations,
                maintenance coordination, financial management, and property
                supervision. We ensure your property remains attractive,
                functional, and profitable at all times.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you own a single property or a large portfolio, our
                solutions are tailored to meet your goals while delivering
                measurable value and peace of mind.
              </p>

            </div>

            {/* RIGHT - GLASS CARD */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-xl">

              <h3 className="text-2xl font-semibold mb-6">
                Our Core Objectives
              </h3>

              <div className="space-y-4">

                <Feature text="Maximize property value and ROI" />
                <Feature text="Ensure efficient property operations" />
                <Feature text="Deliver exceptional tenant satisfaction" />
                <Feature text="Protect and maintain property assets" />
                <Feature text="Reduce operational risks and costs" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Our Property Management Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions covering every aspect of
              property management to ensure your investment performs at its best.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard
              icon={<Users />}
              title="Leasing Management"
              text="We handle marketing, tenant screening, documentation, and leasing processes to ensure reliable tenants."
            />

            <ServiceCard
              icon={<Building2 />}
              title="Shortlet Management"
              text="Complete shortlet setup and management including bookings, guest services, and maintenance."
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Tenant Relations"
              text="We maintain positive relationships with tenants, ensuring satisfaction and retention."
            />

            <ServiceCard
              icon={<TrendingUp />}
              title="Revenue Optimization"
              text="Strategic pricing and operational improvements to increase income and profitability."
            />

            <ServiceCard
              icon={<Clock />}
              title="Property Supervision"
              text="Routine inspections and supervision to ensure optimal property condition."
            />

            <ServiceCard
              icon={<CheckCircle />}
              title="Maintenance Coordination"
              text="Fast and efficient coordination of maintenance and repair services."
            />

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            <StatCard
              number="5+"
              text="Years of Experience"
            />

            <StatCard
              number="100%"
              text="Client Satisfaction Focus"
            />

            <StatCard
              number="24/7"
              text="Operational Support"
            />

          </div>

        </div>

      </section>

    </main>
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

/* FEATURE */
function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle size={18} />
      {text}
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
    <div className="bg-slate-900 text-white p-10 rounded-xl text-center">

      <div className="text-4xl font-bold mb-2">
        {number}
      </div>

      <div className="text-gray-300">
        {text}
      </div>

    </div>
  );
}