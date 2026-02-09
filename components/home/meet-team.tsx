import Image, { StaticImageData } from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import chairman from "@/public/chairman.png";
import CEO from "@/public/ceo.png";

type TeamProps = {
  name: string;
  role: string;
  image: string | StaticImageData;
  active?: boolean;
};

const TeamCard = ({ name, role, image, active }: TeamProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <Image
        src={image}
        alt={name}
        width={400}
        height={500}
        className="w-full h-[360px] object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm mb-3">{role}</p>

        <div className="flex gap-3">
          <Facebook size={18} />
          <Twitter size={18} />
          <Linkedin size={18} />
        </div>
      </div>
    </div>
  );
};

export default function MeetTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <p className="text-yellow-500 font-medium mb-2">Meet The Team</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Meet the Caspira Team
          </h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tellus luctus
            nec ullamcorper mattis pulvinar.
          </p>

          <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
            MEET THE TEAM →
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamCard
            name="Dr Oluwatosin Olatujoye"
            role="Group Chief Executive Officer"
            image={chairman}
          />

          <TeamCard
            name="Bukola Olatujoye"
            role="Chief Executive Officer"
            image={CEO}
          />

          <TeamCard
            name="Adewole Samuel"
            role="MD SkyScape Facility Management"
            image="/images/team3.jpg"
            active
          />
        </div>
      </div>
    </section>
  );
}
