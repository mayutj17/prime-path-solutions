import LifeAtPbs from "@/sections/LifeAtPbs";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Life at PPS",
  description: "This this life at prime path solutions page",
};

export default function Home() {
  return (
    <div className="w-full">
      <LifeAtPbs />
    </div>
  );
}
