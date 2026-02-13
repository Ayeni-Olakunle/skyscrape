"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { Menu, X } from "lucide-react";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between absolute z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" className="w-36" />
      </div>

      {/* DESKTOP NAV */}
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

      {/* DESKTOP BUTTON */}
      <div className="hidden md:block">
        <Link
          href="#"
          className="rounded-full shadow-md hover:opacity-90 px-8 py-4 bg-[#f0b100] text-white"
        >
          Message Us
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
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
    </header>
  );
}
