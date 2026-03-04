"use client";
import Loader from "@/components/loader/loader";
import dynamic from "next/dynamic";
import MeetOurTeam from "@/views/meet-our-team";

const HeavyComponent = dynamic(() => import("@/views/meet-our-team"), {
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
