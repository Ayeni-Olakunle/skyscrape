"use client";
import React from "react";
import heroImage from "@/public/heroImage.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-60">
        <Image src={heroImage} alt="Hero Background" layout="fill" objectFit="cover" className="opacity-60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <p className="text-sm text-yellow-300 mb-4">Welcome Caspira</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Where Vision Meets
            <br /> Solid Foundations
          </h1>
          <p className="text-gray-200 max-w-lg mb-6">
            At Caspira, we bring expertise, precision, and innovation to every project. From concept to completion, we build with integrity, efficiency, and excellence.
          </p>

          <div className="flex items-center gap-4">
            <a className="inline-flex items-center bg-yellow-500 text-black px-5 py-3 rounded-full font-medium shadow" href="#">
              Explore Now
            </a>
            <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              ▶
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="bg-white rounded-2xl p-4 w-80 shadow-lg -mt-12 md:mt-0">
            <img src="/house.jpg" alt="project" className="rounded-lg w-full h-44 object-cover" />
            <div className="mt-3">
              <h3 className="text-black font-semibold">Elevating Lifestyles</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipscing elit.</p>
              <div className="mt-3">
                <a href="#" className="inline-block text-sm bg-slate-800 text-white px-4 py-2 rounded-md">Get Started →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </section>
  );
}
