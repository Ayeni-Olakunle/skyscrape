import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import heroImage from "@/public/meet.jpeg";

export default function MeetOurTeamPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[380px] flex items-center justify-start text-center">
        <Image
          src={heroImage}
          alt="Our Team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-white px-6 w-full max-w-6xl">
          <p className="text-sm mb-4">
            Home <span className="mx-2">|</span> Meet Our Team
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Meet Our Team
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Experienced Professionals Driving Excellence
          </h2>

          <p className="text-slate-600 leading-relaxed text-lg">
            Our leadership team combines industry expertise, operational
            discipline, and strategic vision to deliver world-class property and
            facility management solutions. We are committed to integrity,
            performance, and long-term value creation.
          </p>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>

                  <p className="text-amber-600 text-sm font-medium mb-4">
                    {member.role}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white transition"
                    >
                      <Mail size={16} />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white transition"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">
            Work With Industry Experts
          </h3>
          <p className="text-slate-300 mb-8">
            Partner with a team committed to delivering excellence,
            transparency, and measurable performance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

/* ================= TEAM DATA ================= */

const teamMembers = [
  {
    name: "John A. Williams",
    role: "Managing Director",
    description:
      "Leads strategic direction and operational oversight with over 15 years of experience in property and facility management.",
    image: "/images/team/member1.jpg",
    email: "john@skyscape.com",
    linkedin: "#"
  },
  {
    name: "Sarah Thompson",
    role: "Head of Property Management",
    description:
      "Oversees leasing, asset performance, and tenant relations ensuring maximum occupancy and financial transparency.",
    image: "/images/team/member2.jpg",
    email: "sarah@skyscape.com",
    linkedin: "#"
  },
  {
    name: "Michael Roberts",
    role: "Facility Operations Manager",
    description:
      "Ensures operational efficiency, preventive maintenance, and compliance across all managed facilities.",
    image: "/images/team/member3.jpg",
    email: "michael@skyscape.com",
    linkedin: "#"
  }
];