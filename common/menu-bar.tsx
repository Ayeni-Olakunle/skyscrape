"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { Building2, Menu, X, ArrowDown } from "lucide-react";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full py-4 flex items-center justify-between z-50 fixed bg-[#ffffff54] backdrop-blur-sm"
      data-aos="slide-up"
    >
      <div className="w-[89%] max-w-6xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
              <Building2 className="inline-block mr-2 text-amber-400" />
              <span className="text-[#3d5495]">SKY</span>SCAPE
            </h1>
            {/* <Image src={logo} alt="logo" className="w-36 rounded" /> */}
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-[#474747] font-bold">
          <Link href="/" className="hover:opacity-80">
            Home
          </Link>
          <Link href="/services" className="hover:opacity-80 group relative">
            Our Services <ArrowDown className="inline-block ml-1 text-xs" />
            <ul className="absolute mt-0 bg-white shadow-lg rounded hidden group-hover:block p-0 w-44">
              <li className="text-xs text-gray-500 mt-1 block">
                <Link
                  href="/residential-facility-management"
                  className="hover:text-gray-700 w-full block text-center p-[0.6rem] hover:bg-gray-100"
                >
                  Property Management
                </Link>
              </li>
              <li className="text-xs text-gray-500 mt-1">
                <Link
                  href="/residential-facility-management"
                  className="hover:text-gray-700 w-full block text-center p-[0.6rem] hover:bg-gray-100"
                >
                  Facility Management
                </Link>
              </li>
              <li className="text-xs text-gray-500 mt-1">
                <Link
                  href="/residential-facility-management"
                  className="hover:text-gray-700 w-full block text-center p-[0.6rem] hover:bg-gray-100"
                >
                  Environment Service
                </Link>
              </li>
            </ul>
          </Link>
          <Link href="/about-us" className="hover:opacity-80 group relative">
            About us
            <ul className="absolute mt-0 bg-white shadow-lg rounded hidden group-hover:block p-0 w-44">
              <li className="text-xs text-gray-500 mt-1 block">
                <Link
                  href="/why-choose-us"
                  className="hover:text-gray-700 w-full block text-center p-[0.6rem] hover:bg-gray-100"
                >
                  Why Choose Us
                </Link>
              </li>
              <li className="text-xs text-gray-500 mt-1">
                <Link
                  href="/residential-facility-management"
                  className="hover:text-gray-700 w-full block text-center p-[0.6rem] hover:bg-gray-100"
                >
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </Link>
          <Link href="/contact-us" className="hover:opacity-80">
            Contact us
          </Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/+2347063454191"
            className="rounded-full shadow-md hover:opacity-90 px-8 py-4 bg-[#f0b100] text-white"
          >
            Message Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#474747] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col items-center gap-6 py-8 text-white text-lg">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Our Services
              </Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)}>
                About us
              </Link>
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                Contact us
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="rounded-full px-8 py-3 bg-[#f0b100] text-white"
              >
                Message Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
