import Image from "next/image";

export default function BuildTogether() {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Construction"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-lg text-white">
            <p className="text-yellow-400 mb-3 font-medium">
              Get started today
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Let’s Build Something <br /> Great Together
            </h2>

            <p className="text-gray-200 mb-6">
              Ready to bring your vision to life? Caspira is here to
              deliver quality, efficiency, and excellence in every
              project. Contact us today.
            </p>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition">
              (566)-456-7890
            </button>
          </div>

          {/* Quote Form */}
          <div className="hidden lg:block bg-white rounded-xl shadow-xl p-6 w-[360px]">
            <h3 className="text-lg font-semibold mb-4">
              Get a free Quote
            </h3>

            <form className="space-y-3">
              <input
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                placeholder="Type your email address"
                className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-medium hover:bg-yellow-600 transition">
                Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
