"use client";

import MenuBar from "@/common/menu-bar";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
import serviceImage from "@/public/service.webp";
import { StaticImageData } from "next/image";

export default function ServiceHero(props: {
  title: string;
  imageUrl?: string | StaticImageData;
  description?: string;
}) {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${props.imageUrl}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000a6]" />

      {/* Navbar */}
      <MenuBar />
      {/* <header className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          Logo
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
              C
            </span>
            CASPIRA
          </div>

          Nav Links
          <nav className="hidden md:flex items-center gap-8 text-white text-sm">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#" className="text-yellow-400">
              Services
            </Link>
            <Link href="#">Projects</Link>
            <Link href="#">Pages</Link>
            <Link href="#">Contact</Link>
          </nav>

          CTA
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            GET A QUOTE
          </button>
        </div>
      </header> */}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <p
          className="text-gray-200 text-sm mb-3"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="4000"
        >
          Home <span className="mx-2">|</span> {props.title}
        </p>

        {/* Title */}
        <h1
          className="text-white text-3xl md:text-5xl font-semibold"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="4000"
        >
          {props.title}
        </h1>
        {/* Description */}
        {/* <p className="text-gray-200 mt-4 max-w-2xl">{props.description}</p> */}
      </div>
    </section>
  );
}
