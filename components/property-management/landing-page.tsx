"use client";

import {
  Building2,
  Users,
  TrendingUp,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function PropertyManagementLandingPage() {
  return (
    <main className="bg-white">
      {/* HERO - Split Layout */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* subtle glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/20 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <Building2 size={24} />
              <span className="uppercase tracking-widest text-sm">
                Property Management sdsdsd
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Modern Property
              <br />
              Management Solutions
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At SKYSCAPE Facilities and Property Management Ltd, we provide
              strategic property management services that protect your assets,
              maximize returns, and enhance tenant satisfaction.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition">
                Get Consultation
                <ArrowRight size={18} />
              </button>

              <button className="border border-gray-600 hover:border-white px-8 py-4 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT CARD PANEL */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">
              Why Clients Choose Us
            </h3>

            <Feature text="Maximize property ROI" />
            <Feature text="Reliable tenant management" />
            <Feature text="Transparent financial oversight" />
            <Feature text="Efficient maintenance coordination" />
            <Feature text="Professional supervision & reporting" />
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            End-to-End Asset Management
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Managing real estate assets requires expertise, structure, and
            proactive decision-making. SKYSCAPE ensures that every property
            under our management operates efficiently while increasing long-term
            value.
          </p>
        </div>
      </section>

      {/* SERVICES GRID - Modern Card Pattern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Users />}
              title="Leasing Management"
              text="Marketing, tenant screening, documentation, and contract management."
            />

            <ServiceCard
              icon={<Building2 />}
              title="Shortlet Operations"
              text="Full shortlet setup, booking coordination, and guest services."
            />

            <ServiceCard
              icon={<TrendingUp />}
              title="Revenue Optimization"
              text="Strategic pricing and vacancy reduction strategies."
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Tenant Relations"
              text="Professional communication and conflict resolution."
            />

            <ServiceCard
              icon={<Clock />}
              title="Routine Inspections"
              text="Scheduled property inspections and supervision."
            />

            <ServiceCard
              icon={<CheckCircle />}
              title="Maintenance Coordination"
              text="Efficient coordination of repairs and preventive services."
            />
          </div>
        </div>
      </section>

      {/* VALUE SECTION - Side Accent */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="bg-blue-600 text-white p-12 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">
              Our Commitment to Excellence
            </h3>

            <p className="text-blue-100 leading-relaxed mb-6">
              We treat every property as a long-term investment. Our team
              implements structured operational systems that ensure efficiency,
              compliance, and profitability.
            </p>

            <p className="text-blue-100 leading-relaxed">
              Whether residential, commercial, or mixed-use, we ensure your
              assets perform at peak level.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Built for Performance & Growth
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our data-driven approach allows us to monitor occupancy,
              maintenance trends, and financial performance — ensuring informed
              decisions and consistent growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus not only on managing properties but on elevating their
              long-term value and market competitiveness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Property?
        </h2>

        <p className="text-gray-400 mb-8">
          Partner with SKYSCAPE for reliable, modern property management.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold transition">
          Contact Our Team
        </button>
      </section>
    </main>
  );
}

/* Feature */
function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 text-gray-300">
      <CheckCircle size={18} />
      {text}
    </div>
  );
}

/* Service Card */
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
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-blue-600 mb-5">{icon}</div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-600">{text}</p>
    </div>
  );
}