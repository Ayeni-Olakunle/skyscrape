"use client";
import Loader from "@/components/loader/loader";
import dynamic from "next/dynamic";
// import ContactUs from "@/views/contact-us";

const HeavyComponent = dynamic(() => import("@/views/contact-us"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Page() {
  return (
    <main>
      <HeavyComponent />
    </main>
  );
}
