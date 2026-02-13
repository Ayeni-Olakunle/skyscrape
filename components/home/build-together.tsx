import Image from "next/image";

export default function BuildTogether() {
  return (
    <section className="relative w-full pb-20 bg-white">
      {/* Background */}
      <div className="relative h-[600px] md:h-[500px] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Construction"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-lg text-white pt-20 lg:pt-0 text-center lg:text-left">
            <p className="text-yellow-400 mb-3 font-medium">
              Get started today
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Let’s Build Something <br /> Great Together
            </h2>

            <p className="text-gray-200 mb-6">
              Ready to bring your vision to life? Caspira is here to deliver
              quality, efficiency, and excellence in every project. Contact us
              today.
            </p>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition">
              Call Us Now
            </button>
          </div>

          {/* DESKTOP FORM */}
          <div className="hidden lg:block bg-white rounded-xl shadow-xl p-6 mt-64 w-[30rem]">
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* MOBILE FORM (shows below hero) */}
      <div className="lg:hidden max-w-xl mx-auto px-6 md:-mt-16 -mt-56 relative">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

/* Extracted form for reuse */
function QuoteForm() {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Get a free Quote</h3>

      <form className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300 border-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            placeholder="Your Email Address"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300 border-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            placeholder="Your Phone Number"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300 border-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300 border-gray-500"
          />
        </div>

        <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-medium hover:bg-yellow-600 transition">
          SUBMIT
        </button>
      </form>
    </>
  );
}
