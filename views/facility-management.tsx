"use client";
import React from "react";
import MenuBar from "../common/menu-bar";
import Index from "@/components/facility-management";
import Footer from "../common/footer";


export default function FacilityManagementPage() {
  return (
    <div>
      <MenuBar />
        <Index />
      <Footer />
    </div>
  );
}
