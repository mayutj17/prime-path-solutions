import ProAgent from "@/sections/services/outsource/ProAgent";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Pro Agent",
  description: "This this Pro Agent page",
};

export default function Home() {
  return (
    <div className="w-full">
      <ProAgent />
    </div>
  );
}
