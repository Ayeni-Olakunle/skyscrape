// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Building2,
//   Users,
//   TrendingUp,
//   ShieldCheck,
//   Clock,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";
// import { useRef } from "react";

// export default function PropertyManagementPage() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // subtle parallax

//   return (
//     <main className="bg-white overflow-hidden">
//       {/* HERO SECTION */}
//       <section
//         ref={ref}
//         className="relative h-screen flex items-center text-white"
//       >
//         {/* Parallax Background Image */}
//         <motion.div style={{ y }} className="absolute inset-0 scale-110">
//           <img
//             src="/property-hero.jpg" // place image in public folder
//             alt="Luxury Property"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-slate-900/80" />

//         {/* Glow */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[150px]" />

//         {/* Content */}
//         <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center gap-3 text-blue-400 mb-6">
//               <Building2 size={22} />
//               <span className="uppercase tracking-[0.3em] text-xs">
//                 Property Management
//               </span>
//             </div>

//             <h1 className="text-6xl font-bold leading-tight mb-6">
//               Enterprise-Level
//               <br />
//               Property Management
//             </h1>

//             <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
//               Strategic asset management solutions designed to maximize
//               long-term property value, improve tenant satisfaction, and
//               optimize operational efficiency.
//             </p>

//             <div className="flex gap-6">
//               <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
//                 Schedule Consultation
//                 <ArrowRight size={18} />
//               </button>

//               <button className="border border-white/30 hover:border-white px-10 py-4 rounded-xl transition">
//                 View Portfolio
//               </button>
//             </div>
//           </motion.div>

//           {/* Glass Panel */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-3xl shadow-2xl"
//           >
//             <h3 className="text-2xl font-semibold mb-8">Why SKYSCAPE</h3>

//             <Feature text="Data-driven asset optimization" />
//             <Feature text="Premium tenant experience" />
//             <Feature text="Full financial transparency" />
//             <Feature text="Proactive maintenance systems" />
//             <Feature text="Strategic growth planning" />
//           </motion.div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold mb-6">
//               Comprehensive Management Services
//             </h2>

//             <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//               We provide integrated property management services covering
//               operational, financial, and strategic aspects of real estate
//               assets.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <ServiceCard icon={<Users />} title="Leasing Strategy" />
//             <ServiceCard icon={<TrendingUp />} title="Revenue Optimization" />
//             <ServiceCard icon={<ShieldCheck />} title="Tenant Management" />
//             <ServiceCard icon={<Clock />} title="Routine Inspections" />
//             <ServiceCard icon={<Building2 />} title="Shortlet Operations" />
//             <ServiceCard icon={<CheckCircle />} title="Maintenance Oversight" />
//           </div>
//         </div>
//       </section>

//       {/* ENTERPRISE VALUE BLOCK */}
//       <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-blue-600/10 blur-[120px]" />

//         <div className="relative max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-bold mb-8">
//             Built for Long-Term Growth
//           </h2>

//           <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
//             Our enterprise framework ensures operational excellence, risk
//             reduction, and sustainable profitability across your entire property
//             portfolio.
//           </p>

//           <div className="grid md:grid-cols-3 gap-10">
//             <Stat number="5+" label="Years Experience" />
//             <Stat number="24/7" label="Operational Support" />
//             <Stat number="100%" label="Client-Focused Approach" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* Components */

// function Feature({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-3 mb-5 text-gray-200">
//       <CheckCircle size={18} />
//       {text}
//     </div>
//   );
// }

// function ServiceCard({
//   icon,
//   title,
// }: {
//   icon: React.ReactNode;
//   title: string;
// }) {
//   return (
//     <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-gray-100">
//       <div className="text-blue-600 mb-6">{icon}</div>

//       <h3 className="text-2xl font-semibold">{title}</h3>
//     </div>
//   );
// }

// function Stat({ number, label }: { number: string; label: string }) {
//   return (
//     <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
//       <div className="text-4xl font-bold mb-3">{number}</div>
//       <div className="text-gray-400">{label}</div>
//     </div>
//   );
// }

"use client";
import Loader from "@/components/loader/loader";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/views/property-management"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Page() {
  return (
    <main>
      <HeavyComponent />
    </main>
  );
}
