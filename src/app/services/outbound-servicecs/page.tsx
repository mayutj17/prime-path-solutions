import Outbound from "@/sections/services/Outbound";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Outbound Services",
  description: "This this Outbound Services page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <Outbound />
    </div>
  );
}
