"use client";
import React from "react";
import Menu from "../common/menu";
import Hero from "../components/home/Hero";
import AboutSkyscape from "../components/home/about-skyscape";
import ServicesSection from "../components/home/services-section";
import WhyChooseUs from "../components/home/why-choose-us";
import BuildTogether from "../components/home/build-together";
import MeetTeam from "@/components/home/meet-team";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/FAQSection";
import Footer from "../common/footer";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <AboutSkyscape />
      <ServicesSection />
      <WhyChooseUs />
      <BuildTogether />
      <MeetTeam />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}
