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
              Ready to bring your vision to life? Caspira is here to deliver
              quality, efficiency, and excellence in every project. Contact us
              today.
            </p>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition">
              09155063486
            </button>
          </div>

          {/* Quote Form */}
          <div className="hidden lg:block bg-white rounded-xl shadow-xl p-6 mt-64 min-w-96">
            <h3 className="text-lg font-semibold mb-4">Get a free Quote</h3>

            <form className="space-y-3">
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  placeholder="Your Message"
                  rows={3}
                  className="w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400 mt-1"
                />
              </div>

              <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-medium hover:bg-yellow-600 transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
