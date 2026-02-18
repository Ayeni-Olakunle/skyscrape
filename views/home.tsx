"use client";
import React from "react";
import MenuBar from "../common/menu-bar";
import Hero from "../components/home/Hero";
import AboutSkyscape from "../components/home/about-skyscape";
import ServicesSection from "../components/home/services-section";
import WhyChooseUs from "../components/home/why-choose-us";
import BuildTogether from "../components/home/build-together";
import MeetTeam from "@/components/home/meet-team";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/FAQSection";
import Footer from "../common/footer";
import MissionVision from "@/components/home/mission-vision";
import AboutSection from "@/components/home/about-section";
import ServicesRedesignSection from "@/components/home/sercive-redesign";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";


export default function Home() {
  return (
    <div>
      <MenuBar />
      <Hero />
      <AboutSection />
      <ServicesRedesignSection />
      <WhyChooseUsSection />
      {/* <MissionVision /> */}
      {/* <AboutSkyscape /> */}
      {/* <ServicesSection /> */}
      {/* <WhyChooseUs /> */}
      <BuildTogether />
      <MeetTeam />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}
