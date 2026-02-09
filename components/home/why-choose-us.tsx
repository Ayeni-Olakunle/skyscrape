import Image from "next/image";
import { HardHat, ShoppingCart, Network } from "lucide-react";
import building1 from "@/public/building1.jpg";
import building2 from "@/public/building2.jpg";
import building3 from "@/public/building3.jpg";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
  stat,
  statLabel,
}: FeatureCardProps) => {
  return (
    <div className="border border-yellow-400 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="border-t pt-4">
        <p className="text-2xl font-bold text-gray-900">{stat}</p>
        <p className="text-sm text-gray-500">{statLabel}</p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-yellow-500 font-medium mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why We're Your Best Choice
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Tellus
            luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Top */}
          <FeatureCard
            icon={<HardHat className="w-6 h-6 text-gray-700" />}
            title="Expert Craftsmanship"
            description="We bring precision and quality to every project. Lorem ipsum dolor sit amet consectetur adipiscing elit."
            stat="800+"
            statLabel="Complete Project"
          />

          {/* Center Image */}
          <div className="relative rounded-xl overflow-hidden min-h-[320px]">
            <Image
              src={building1}
              alt="Building"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Top */}
          <FeatureCard
            icon={<ShoppingCart className="w-6 h-6 text-gray-700" />}
            title="Reliable & On-Time"
            description="We meet deadlines without compromising excellence. Lorem ipsum dolor sit amet consectetur."
            stat="950+"
            statLabel="Incoming Project"
          />

          {/* Left Bottom Image */}
          <div className="relative rounded-xl overflow-hidden min-h-[320px]">
            <Image
              src={building2}
              alt="Apartment"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Bottom */}
          <FeatureCard
            icon={<Network className="w-6 h-6 text-gray-700" />}
            title="Innovative Solutions"
            description="Modern designs and smart construction techniques. Lorem ipsum dolor sit amet consectetur."
            stat="600+"
            statLabel="Expert Team"
          />

          {/* Right Bottom Image */}
          <div className="relative rounded-xl overflow-hidden min-h-[320px]">
            <Image
              src={building3}
              alt="Highrise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
