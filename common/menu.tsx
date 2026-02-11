"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";

export default function Menu() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between absolute z-50">
      <div className="flex items-center gap-3">
        <div className="w-auto h-auto bg-amber-300 rounded-md flex items-center justify-center font-bold text-white overflow-hidden">
          <Image src={logo} alt="logo" className="w-36" />
        </div>
        {/* <span className="font-semibold text-lg">SkyScrape</span> */}
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm text-white">
        <Link href="/" className="hover:opacity-80">
          Home
        </Link>
        <Link href="/services" className="hover:opacity-80">
          Our Services
        </Link>
        <Link href="/about-us" className="hover:opacity-80">
          About us
        </Link>
        <Link href="/contact-us" className="hover:opacity-80">
          Contact us
        </Link>
      </nav>

      <div className="hidden md:block">
        <Link
          href="#"
          className="rounded-full shadow-md hover:opacity-90 px-8 py-4 bg-[#f0b100] text-[white]"
        >
          Message Us
        </Link>
      </div>
    </header>
  );
}
