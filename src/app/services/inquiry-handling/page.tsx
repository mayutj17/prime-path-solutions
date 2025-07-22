import InquiryHandling from "@/sections/services/InquiryHandling";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Inquiry Handling",
  description: "This this Inquiry Handling page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <InquiryHandling />
    </div>
  );
}
