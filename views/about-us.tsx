"use client";
import React from "react";
import Menu from "../common/menu";
import Footer from "../common/footer";
import ServiceHero from "@/components/service/hero";
import ServiceDetails from "@/components/service/service-details";
import aboutsky from "@/public/aboutsky.webp";

export default function AboutUs() {
  return (
    <div>
      {/* <Menu /> */}
      <ServiceHero
        title="About Us"
        imageUrl={aboutsky.src}
        description="Learn more about our company and our commitment to excellence in construction."
      />
      <ServiceDetails />
      <Footer />
    </div>
  );
}
