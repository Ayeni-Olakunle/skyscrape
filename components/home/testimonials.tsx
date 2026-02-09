import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import contrustion from "@/public/Contractor.jpg";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden h-screen">
      <div className="grid lg:grid-cols-2 h-screen">
        {/* LEFT SIDE */}
        <div className="relative bg-[#1e2a4a] text-white py-24 px-6 lg:px-16">
          {/* Circle Background Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-[600px] h-[600px] border border-blue-400 rounded-full left-10 top-20"></div>
            <div className="absolute w-[450px] h-[450px] border border-blue-400 rounded-full left-20 top-32"></div>
            <div className="absolute w-[300px] h-[300px] border border-blue-400 rounded-full left-32 top-44"></div>
          </div>

          <div className="relative max-w-lg">
            <p className="text-yellow-400 font-medium mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              What People are <br /> Saying About Us
            </h2>

            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              tellus luctus nec ullamcorper mattis pulvinar dapibus
              leo.
            </p>

            {/* <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-full font-medium">
              WRITE A REVIEW NOW →
            </button> */}
          </div>

          {/* Testimonial Card */}
          <div className="relative mt-5 lg:absolute">
            <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 max-w-xl">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/client.jpg"
                  alt="client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">John Carter</p>
                  <p className="text-sm text-gray-500">Client</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing
                elit. Ut elit tellus Lorem ipsum dolor sit amet
                consectetur adipiscing elit. Ut elit tellus luctus
                nec ullamcorper mattis pulvinar dapibus leo luctus
                nec ullam.
              </p>

              {/* Navigation */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                  <ChevronLeft size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative min-h-[500px]">
          <Image
            src={contrustion}
            alt="Construction worker"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
