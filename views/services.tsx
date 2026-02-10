"use client";
import React from "react";
import Menu from "../common/menu";
import Footer from "../common/footer";
import ServiceHero from "@/components/service/hero";
import ServiceDetails from "@/components/service/service-details";

export default function Services() {
  return (
    <div>
      {/* <Menu /> */}
      <ServiceHero />
      <ServiceDetails />
      <Footer />
    </div>
  );
}
