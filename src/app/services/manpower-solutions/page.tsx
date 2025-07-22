import Manpower from "@/sections/services/hr/Manpower";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Manpower Solutions",
  description: "This this Manpower Solutions page",
};

export default function Home() {
  return (
    <div className="w-full">
      <Manpower />
    </div>
  );
}
