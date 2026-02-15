"use client";
import React from "react";
// import Menu from "../common/menu-bar";
import Footer from "../common/footer";
import ServiceHero from "@/components/service/hero";
import ServiceDetails from "@/components/service/service-details";
import serviceImage from "@/public/service.webp";
import service1 from "@/public/service1.jpg";
import service2 from "@/public/service3.jpg";

export default function Services() {
  return (
    <div>
      {/* <Menu /> */}
      <ServiceHero
        title="Our Services"
        imageUrl={service2.src}
        description="We provide a wide range of construction services tailored to meet your specific needs."
      />
      <ServiceDetails />
      <Footer />
    </div>
  );
}
