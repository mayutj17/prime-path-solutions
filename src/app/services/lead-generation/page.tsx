import LeadGeneration from "@/sections/services/outbound/LeadGeneration";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Lead Generation",
  description: "This this Lead Generation page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <LeadGeneration />
    </div>
  );
}
