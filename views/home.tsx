"use client";
import React from "react";
import Menu from "../common/menu";
import Hero from "../components/home/Hero";
import AboutSkyscape from "../components/home/about-skyscape";
import ServicesSection from "../components/home/services-section";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <AboutSkyscape />
      <ServicesSection />
    </div>
  );
}
