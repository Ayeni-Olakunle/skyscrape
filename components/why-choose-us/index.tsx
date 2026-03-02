import Image from "next/image";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  FileText,
  Leaf,
  Settings
} from "lucide-react";
import Link from "next/link";
import bored from "@/public/borad.jpeg";
import whyme from "@/public/whyme.png";

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={bored}
          alt="Why Choose SKYSCAPE"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
          <p className="text-sm text-slate-200 mb-6">
            Home <span className="mx-2">|</span> Why Choose Us
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why Choose SKYSCAPE
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Excellence. Transparency. Performance.
          </h2>

          <p className="text-slate-600 leading-relaxed text-lg">
            We combine industry expertise with structured operational systems
            to deliver measurable value. Our mission is to protect assets,
            optimize efficiency, and create sustainable property environments
            built for long-term success.
          </p>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-4">
                  {item.title}
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Structured Systems. Measurable Results.
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our management framework ensures preventive maintenance,
              financial clarity, and regulatory compliance across every asset.
              We implement performance-driven strategies that minimize risk
              and maximize long-term growth.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-slate-700">
                <ShieldCheck className="w-5 h-5 text-amber-500 mr-3" />
                Risk & Compliance Management
              </li>

              <li className="flex items-center text-slate-700">
                <TrendingUp className="w-5 h-5 text-amber-500 mr-3" />
                Asset Value Optimization
              </li>

              <li className="flex items-center text-slate-700">
                <Users className="w-5 h-5 text-amber-500 mr-3" />
                Tenant Satisfaction Focus
              </li>
            </ul>
          </div>

          <div className="relative h-full">
            <Image
              src={whyme}
              alt="Operational Excellence"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-semibold mb-6">
            Partner With a Team You Can Trust
          </h3>

          <p className="text-slate-300 mb-10">
            Experience structured management, professional oversight,
            and performance-driven property solutions.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-amber-500 hover:bg-amber-600 transition px-8 py-4 rounded-full font-medium shadow-lg"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </div>
  );
}

/* ================= FEATURES DATA ================= */

const features = [
  {
    title: "Industry Expertise",
    description:
      "Extensive experience across property, facility, and environmental management sectors.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Operational Efficiency",
    description:
      "Streamlined systems that reduce downtime and improve long-term performance.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Financial Transparency",
    description:
      "Clear reporting structures and accountable financial administration.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Client-Centered Approach",
    description:
      "Tailored management strategies aligned with each client’s objectives.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Compliance & Risk Control",
    description:
      "Strict adherence to safety regulations and operational standards.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Sustainable Solutions",
    description:
      "Environmentally responsible systems for long-term resilience.",
    icon: <Leaf className="w-6 h-6" />
  }
];