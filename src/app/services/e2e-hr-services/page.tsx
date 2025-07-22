import E2E from "@/sections/services/hr/E2E";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | E2E HR Services",
  description: "This this E2E HR Services page",
};

export default function Home() {
  return (
    <div className="w-full">
      <E2E />
    </div>
  );
}
