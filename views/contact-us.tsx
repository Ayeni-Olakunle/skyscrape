"use client";
import React from "react";
import Menu from "../common/menu";
import Footer from "../common/footer";
import ServiceHero from "@/components/service/hero";
import ServiceDetails from "@/components/service/service-details";
import serviceImage from "@/public/service.webp";
import ContactSection from "@/components/contact-us/contact-section";

export default function ContactUs() {
  return (
    <div>
      {/* <Menu /> */}
      <ServiceHero
        title="Contact Us"
        imageUrl={serviceImage.src}
        description="We provide a wide range of construction services tailored to meet your specific needs."
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
