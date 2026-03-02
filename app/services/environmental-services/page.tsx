"use client";
import Loader from "@/components/loader/loader";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/views/environmental-services"), {
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
