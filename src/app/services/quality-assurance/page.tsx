import Quality from "@/sections/services/outsource/Quality";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Quality Assurance",
  description: "This this Quality Assurance page",
};

export default function Home() {
  return (
    <div className="w-full">
      <Quality />
    </div>
  );
}
