import Telesales from "@/sections/services/outbound/Telesales";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Tele Sales",
  description: "This this Tele Sales page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <Telesales />
    </div>
  );
}
