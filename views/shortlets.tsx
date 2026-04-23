import React from 'react'
import Navbar from "@/components/shortlets/Navbar";
import Hero from "@/components/shortlets/Hero";
import Properties from "@/components/shortlets/Properties";
import Features from "@/components/shortlets/Features";
import Stats from "@/components/shortlets/Stats";
import Testimonials from "@/components/shortlets/Testimonials";
// import CTA from "@/components/shortlets/CTA";
// import Footer from "@/components/shortlets/Footer";



// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
// import Properties from '@/components/Properties'
// import Features from '@/components/Features'
// import Stats from '@/components/Stats'
// import Testimonials from '@/components/Testimonials'
// import CTA from '@/components/CTA'
// import Footer from '@/components/Footer'


export default function Shortlets() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Properties />
      <Features />
      <Stats />
      <Testimonials />
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
