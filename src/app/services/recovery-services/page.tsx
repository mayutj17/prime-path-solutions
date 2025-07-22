import RecoveryServices from "@/sections/services/outbound/RecoveryServices";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Recovery Services",
  description: "This this Recovery Services page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <RecoveryServices />
    </div>
  );
}
