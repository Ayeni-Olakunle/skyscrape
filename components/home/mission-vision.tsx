import React from "react";
import { Target, Lightbulb } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Mission, Our Vision
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm">
          We at SKYSCAPE FACILITIES AND PROPERTY MANAGEMENT LTD are dedicated to
          the protection of our environment. We are committed to sustainable
          practices in our work being careful to reuse, reduce, recycle, and
          remanufacture with the aim to reduce carbon, methane emission, and
          adverse effects to climate change.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div>
            <div className="flex justify-center mb-6">
              <Target className="text-white w-10 h-10" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center relative">
            <div className="flex justify-center mb-6">
              <Target className="text-yellow-500 w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">MISSION</h3>

            <p className="text-gray-600 leading-relaxed">
              To bring a breath of fresh air to facility management practices in
              the real estate sector, by providing innovative, efficient, and
              reliable solutions that enhance the value of properties and
              improve the quality of life for our clients.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-yellow-500 rounded-b-xl" />

            <div className="flex justify-center mb-6">
              <Lightbulb className="text-yellow-500 w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">VISION</h3>

            <p className="text-gray-600 leading-relaxed">
              To be the foremost facility and property management company, using
              technology and innovations in the country, to serve Nigerians
              better. We envision a future where our services set the standard
              for excellence, reliability, and customer satisfaction in the
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
