"use client";
import React from "react";
import MenuBar from "../common/menu-bar";
import Hero from "../components/home/Hero";
import FAQSection from "@/components/home/FAQSection";
import Footer from "../common/footer";
import AboutSection from "@/components/home/about-section";
import ServicesRedesignSection from "@/components/home/sercive-redesign";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";
import Testimonial from "@/components/home/testimonial";


export default function Home() {
  return (
    <div>
      <MenuBar />
      <Hero />
      <AboutSection />
      <ServicesRedesignSection />
      <WhyChooseUsSection />
      <Testimonial />
      {/* <MissionVision /> */}
      {/* <AboutSkyscape /> */}
      {/* <ServicesSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <BuildTogether /> */}
      {/* <MeetTeam /> */}
      {/* <Testimonials /> */}
      <FAQSection />
      <Footer />
    </div>
  );
}
