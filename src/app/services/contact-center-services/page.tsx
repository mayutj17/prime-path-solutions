import ContactCenter from "@/sections/services/outsource/ContactCenter";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Contact Center Services",
  description: "This this Contact Center Services page",
};

export default function Home() {
  return (
    <div className="w-full">
      <ContactCenter />
    </div>
  );
}
