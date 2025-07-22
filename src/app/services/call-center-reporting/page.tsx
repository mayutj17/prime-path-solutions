import CallCenter from "@/sections/services/outsource/CallCenter";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Call Center Reporting",
  description: "This this Call Center Reporting page",
};

export default function Home() {
  return (
    <div className="w-full">
      <CallCenter />
    </div>
  );
}
