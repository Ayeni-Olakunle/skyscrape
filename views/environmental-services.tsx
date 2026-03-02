"use client";
import React from "react";
import MenuBar from "../common/menu-bar";
import Index from "@/components/environmental-services";
import Footer from "../common/footer";
import { i } from "framer-motion/client";


export default function EnvironmentalServicesPage() {
  return (
    <div>
      <MenuBar />
        <Index />
      <Footer />
    </div>
  );
}
