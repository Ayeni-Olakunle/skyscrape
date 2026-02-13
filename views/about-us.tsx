"use client";
import React from "react";
// import MenuBar from "../common/menu-bar";
import Footer from "../common/footer";
import ServiceHero from "@/components/service/hero";
import ServiceDetails from "@/components/service/service-details";
import aboutsky from "@/public/aboutsky.webp";
import AboutSection from "@/components/about-us/about0section";

export default function AboutUs() {
  return (
    <div>
      {/* <Menu /> */}
      <ServiceHero
        title="About Us"
        imageUrl={aboutsky.src}
        description="Learn more about our company and our commitment to excellence in construction."
      />
      <AboutSection />
      <Footer />
    </div>
  );
}
