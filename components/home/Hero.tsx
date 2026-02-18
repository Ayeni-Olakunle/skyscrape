"use client";
import React from "react";
import heroImage from "@/public/heroImage.jpg";
import Image from "next/image";
import heroCleaning from "@/public/heroCleaning.jpg";
import building from "@/public/building.jpg";
import avana from "@/public/lekki-avana.png";
import ade from "@/public/ade.jpeg";
import arizonlogo from "@/public/Arizonlogo.png";
import lekki from "@/public/Lekki-Pride2.jpg";
import tiwa from "@/public/TIWA-1.png";
import hero from "@/public/hore2.png";
import bolton from "@/public/The-Bolton.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white text-black">
      {/* <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-60">
        <Image
          src={heroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div> */}
      <div
        className="relative max-w-7xl mx-auto px-6 py-28 pb-16 flex flex-col md:flex-row items-center gap-8"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="4000"
      >
        <div className="md:w-1/2">
          <p className="text-shadow-md text-yellow-500 mb-4 font-bold flex items-center gap-2 text-lg">
            <span className="bg-yellow-500 w-32 h-1 block rounded"></span>
            Welcome SkyScape
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[#1e2a4a]">
            Where Vision Meets Reliable Facility Management
            {/* <br />  */}
          </h1>
          <p className="text-gray-700 max-w-lg mb-6">
            At Skyscape, we deliver expertise, precision, and innovation in
            every facility we manage. From planning to daily operations, we
            ensure efficiency, reliability, and excellence at every stage.
          </p>

          <div className="flex items-center gap-7">
            <Link
              className="inline-flex items-center text-white bg-yellow-500 text-shadow-2xs px-10 py-4 rounded-full shadow font-bold hover:opacity-90 hover:text-white hover:bg-yellow-600 transition hover:shadow-lg hover:scale-105 hover:-translate-y-1 hover:shadow-gray-300 hover:animate-bounce"
              href="/services"
            >
              Explore Now
            </Link>
            <Link
              className="inline-flex items-center px-10 py-4 rounded-full shadow bg-gray-800 text-white font-bold hover:opacity-90 hover:text-white hover:bg-gray-800 transition hover:shadow-lg hover:scale-105 hover:-translate-y-1 hover:shadow-gray-300 hover:animate-bounce"
              href="/contact-us"
            >
              Contact us
            </Link>
          </div>

          {/* <div className="flex mt-8 gap-4 bg-[white] rounded-2xl overflow-hidden">
            <img
              src={building.src}
              alt="Hero Image"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-black font-semibold mt-4 mb-3">
                1,578+ Homes & Apartments Managed
              </h3>
              <p className="text-sm text-gray-600">
                We provide reliable facility management services across
                residential properties, ensuring comfort, safety, and efficient
                daily operations for residents and property owners.
              </p>
            </div>
          </div> */}
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="bg-white rounded-2xl p-4 w-full h-auto">
            <Image
              src={hero}
              alt="Hero Image"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          {/* <div className="bg-white rounded-2xl p-4 shadow-lg -mt-12 md:mt-0 md:w-[70%] md:h-[30rem] h-auto w-full">
            <img
              src={heroCleaning.src}
              alt="project"
              className="rounded-lg w-full object-cover h-80"
            />
            <div className="mt-3">
              <h3 className="text-black font-semibold">
                Elevating Everyday Experiences
              </h3>
              <p className="text-sm text-gray-600">
                At Skyscape, we create well-managed environments that support
                productivity, comfort, and a higher standard of living.
              </p>
              <div className="mt-3">
                <Link
                  href="/contact-us"
                  className="inline-block text-sm bg-slate-800 text-white px-4 py-2 rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
