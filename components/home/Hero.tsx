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
          <p className="text-sm text-yellow-300 mb-4">Welcome SkyScape</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Where Vision Meets Reliable Facility Management
            {/* <br />  */}
          </h1>
          <p className="text-gray-200 max-w-lg mb-6">
            At Skyscape, we deliver expertise, precision, and innovation in
            every facility we manage. From planning to daily operations, we
            ensure efficiency, reliability, and excellence at every stage.
          </p>

          <div className="flex items-center gap-7">
            <Link
              className="inline-flex items-center bg-yellow-500 text-white px-10 py-4 rounded-full shadow font-bold"
              href="/services"
            >
              Explore Now
            </Link>
            <Link
              className="inline-flex items-center px-10 py-4 rounded-full shadow bg-[white] text-[#f0b100] font-bold"
              href="/contact-us"
            >
              Contact us
            </Link>
          </div>

          <div className="flex mt-8 gap-4 bg-[white] rounded-2xl overflow-hidden">
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
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="bg-white rounded-2xl p-4 shadow-lg -mt-12 md:mt-0 md:w-[70%] md:h-[30rem] h-auto w-full">
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
          </div>
        </div>
      </div>
      {/* <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-around items-center px-4 py-7 mb-5 rounded-[100px] bg-[#8080808f]">
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={avana.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={tiwa.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={bolton.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={arizonlogo.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={lekki.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
        <div className="grayscale bg-contain bg-center bg-no-repeat w-[10%] h-[10%]">
          <img
            src={ade.src}
            alt="Hero Image"
            className="grayscale w-full h-full"
          />
        </div>
      </div> */}
    </section>
  );
}
