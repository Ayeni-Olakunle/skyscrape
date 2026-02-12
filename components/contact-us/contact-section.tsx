"use client";

export default function ContactSection() {
  return (
    <section className="bg-[#0f2238] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-400 mb-3">Contact Us</p>

          <h2 className="text-4xl font-semibold mb-4">
            We’re Here To Help You.
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl">
            Whether you are planning to buy, sell, or build a property, our
            expert team is ready to guide you every step of the way.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-4 bg-[#132a44] rounded-xl px-6 py-4 flex-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
                📞
              </div>
              <div>
                <p className="text-yellow-400 font-medium">Call Us Now</p>
                <p className="text-sm text-gray-300">+ (123) 456 78910</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#132a44] rounded-xl px-6 py-4 flex-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
                ✉️
              </div>
              <div>
                <p className="text-yellow-400 font-medium">Email Address</p>
                <p className="text-sm text-gray-300">support@domain.com</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-[320px] rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=london%20eye&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#132a44] rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold mb-3">Get In Touch With Us.</h3>

          <p className="text-gray-300 mb-6">
            Have questions about property, construction, or investment? Fill out
            the form and our team will contact you shortly.
          </p>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              />
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              />
            </div>

            <select className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none">
              <option>Select Your Requirement</option>
              <option>Residential Construction</option>
              <option>Commercial Construction</option>
              <option>Renovation</option>
              <option>Property Investment</option>
            </select>

            <textarea
              rows={5}
              placeholder="Message / Project Details"
              className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-medium px-8 py-3 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

