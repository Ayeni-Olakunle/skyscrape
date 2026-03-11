"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    help: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          help: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0f2238] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}{" "}
        <div
          className="space-y-8"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="4000"
        >
          {" "}
          <p className="text-yellow-400 mb-3">Contact Us</p>{" "}
          <h2 className="text-4xl font-semibold mb-4">
            {" "}
            We’re Here To Help You.{" "}
          </h2>{" "}
          <p className="text-gray-300 mb-8 max-w-xl">
            {" "}
            Whether you are planning to buy, sell, or build a property, our
            expert team is ready to guide you every step of the way.{" "}
          </p>{" "}
          {/* Contact Cards */}{" "}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            {" "}
            <div className="flex items-center gap-4 bg-[#132a44] rounded-xl px-6 py-4 flex-1">
              {" "}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
                {" "}
                📞{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 font-medium">Call Us Now</p>{" "}
                <p className="text-sm text-gray-300">
                  + (123) 0901 991 0747
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4 bg-[#132a44] rounded-xl px-6 py-4 flex-1">
              {" "}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
                {" "}
                ✉️{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 font-medium">
                  Email Address
                </p>{" "}
                <p className="text-sm text-gray-300">Info@skyscape.com</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* MAP */}{" "}
          <div className="w-full h-[320px] rounded-xl overflow-hidden">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.591526926177!2d3.4719413750512444!3d6.446458493544882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5339cbe4d37%3A0xb0635ac40d91ea5d!2sThe%20Zylus%20Place!5e0!3m2!1sen!2sng!4v1771143625702!5m2!1sen!2sng"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>{" "}
          </div>{" "}
        </div>
        {/* RIGHT SIDE FORM */}
        <div className="bg-[#132a44] rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold mb-3">Get In Touch With Us.</h3>

          {isSubmitted && (
            <div className="bg-green-500 text-white p-3 rounded mb-4">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
                required
              />

              <input
                type="text"
                name="help"
                value={formData.help}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
            />

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message / Project Details"
              className="w-full rounded-lg px-4 py-3 bg-white text-black outline-none"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}