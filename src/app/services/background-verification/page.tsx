import Background from "@/sections/services/hr/Background";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Background Verification",
  description: "This this Background Verification page",
};

export default function Home() {
  return (
    <div className="w-full">
      <Background />
    </div>
  );
}
