import ITServices from "@/sections/services/ITServices";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | IT Services",
  description: "This this IT Services page",
};

export default function Home() {
  return (
    <div className="w-full mt-10">
      <ITServices />
    </div>
  );
}
