import AboutUs from "@/sections/AboutUs";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "This this about us page",
};

export default function Home() {
  return <AboutUs />;
}
