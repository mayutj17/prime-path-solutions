import Careers from "@/sections/Careers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers",
  description: "This this career page",
};

export default function Home() {
  return (
    <div className="w-full">
      <Careers />
    </div>
  );
}
