"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "What services does Caspira offer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
  },
  {
    question: "How long does a construction project take?",
    answer:
      "Project duration depends on scope, location, and design complexity. Most residential projects range between 3 to 12 months.",
  },
  {
    question: "Is Caspira licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured to handle residential, commercial, and industrial construction projects.",
  },
  {
    question: "Do you provide cost estimates?",
    answer:
      "Yes, we provide detailed cost estimates after reviewing your project requirements and specifications.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our consultation form or call our team to schedule an initial discussion.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-yellow-500 font-medium mb-2">FAQ'S</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got Questions? We've got Answers
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative row-span-2 h-[420px] rounded-xl overflow-hidden">
              <Image
                src="/images/faq1.jpg"
                alt="Building"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/images/faq2.jpg"
                alt="Building"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/images/faq3.jpg"
                alt="Building"
                fill
                className="object-cover"
              />
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
                    <span className="font-medium">
                      {faq.question}
                    </span>

                    {isActive ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-40 px-6 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm opacity-90">
                      {faq.answer}
                    </p>
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
