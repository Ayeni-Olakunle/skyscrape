"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import PowerBody from "@/public/Power Body.jpg";
import OfficeInterior from "@/public/Office Interior.jpg";
import vila from "@/public/Vila.jpg";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "What services does Skyscape offer?",
    answer:
      "Skyscape provides comprehensive facility management services, including property maintenance, cleaning and janitorial services, security management, electrical and plumbing support, waste management, and day-to-day facility operations.",
  },
  {
    question: "How quickly do you respond to service requests?",
    answer:
      "Response time depends on the urgency of the request. Emergency issues are handled immediately, while routine maintenance is scheduled promptly to ensure minimal disruption.",
  },
  {
    question: "Is Skyscape licensed and insured?",
    answer:
      "Yes, we operate professionally and in compliance with industry standards, ensuring all services are delivered safely and responsibly.",
  },
  {
    question: "Do you provide service quotations?",
    answer:
      "Yes, we provide detailed quotations after assessing your property needs and service requirements to ensure transparent pricing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our inquiry form or call our team to schedule a consultation. We’ll assess your needs and recommend the right facility management solution for your property.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-20 bg-white"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="4000"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-yellow-500 font-medium mb-2">FAQ'S</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got Questions? We've got Answers
          </h2>
          <p className="text-gray-600 mt-4">
            We understand that choosing the right facility management partner is
            important. Here are answers to some common questions about
            Skyscape’s services and operations.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative row-span-2 h-[420px] rounded-xl overflow-hidden">
              <Image
                src={PowerBody}
                alt="Building"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src={OfficeInterior}
                alt="Building"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image src={vila} alt="Building" fill className="object-cover" />
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "bg-[#1e2a4a] text-white rounded-2xl"
                      : "bg-gray-100"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>

                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-40 px-6 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm opacity-90">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
