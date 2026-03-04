"use client";
import React from "react";
import Menu from "../common/menu-bar";
import Footer from "../common/footer";
import MeetOurTeamPage from "@/components/meet-our-team";

export default function MeetOurTeam() {
  return (
    <div>
      <Menu />
      {/* <ServiceHero
        title="Our Services"
        imageUrl={service2.src}
        description="We provide a wide range of construction services tailored to meet your specific needs."
      /> */}
      {/* <ServicesPage /> */}
      <MeetOurTeamPage />
      <Footer />
    </div>
  );
}
