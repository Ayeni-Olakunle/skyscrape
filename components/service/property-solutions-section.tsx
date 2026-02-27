import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  features: string[];
};

function PremiumCard({ title, description, features }: CardProps) {
  return (
    <div className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2">
      
      <h3 className="text-2xl font-semibold mb-5 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-slate-200">
            <span className="text-amber-400 mr-3 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PropertySolutionsSection() {
  return (
    <section className="relative w-full overflow-hidden text-white bg-slate-950">
      
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/property-bg.jpg"
          alt="Luxury Property"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs tracking-widest uppercase">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Integrated Real Estate Solutions
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            SKYSCAPE delivers strategic property solutions that protect assets,
            optimize returns, and elevate tenant experiences. Our integrated
            approach ensures every property operates at peak performance while
            preserving long-term value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          <PremiumCard
            title="Property Leasing"
            description="We provide structured leasing strategies designed to secure reliable tenants, reduce vacancy cycles, and enhance rental income performance across residential and commercial portfolios."
            features={[
              "Tenant sourcing & screening",
              "Lease negotiation & documentation",
              "Market rental analysis",
              "Occupancy optimization strategy"
            ]}
          />

          <PremiumCard
            title="Property Management"
            description="Comprehensive asset oversight ensuring operational efficiency, financial transparency, maintenance excellence, and long-term property sustainability."
            features={[
              "Rent collection & reporting",
              "Maintenance coordination",
              "Vendor & contractor supervision",
              "Compliance & risk management"
            ]}
          />

          <PremiumCard
            title="Shortlets & Rental Management"
            description="Premium short-term rental management services focused on maximizing occupancy rates, enhancing guest experience, and delivering superior ROI."
            features={[
              "Listing optimization & marketing",
              "Guest communication & concierge",
              "Housekeeping coordination",
              "Dynamic pricing strategy"
            ]}
          />

        </div>
      </div>
    </section>
  );
}