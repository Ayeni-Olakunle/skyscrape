"use client";
import React from "react";
import MenuBar from "../common/menu-bar";
import WhyChooseUsPage from "@/components/why-choose-us";
import Footer from "../common/footer";


export default function WhyChooseUsPageView() {
  return (
    <div>
      <MenuBar />
        <WhyChooseUsPage />
      <Footer />
    </div>
  );
}
