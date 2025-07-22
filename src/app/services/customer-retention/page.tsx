import CustomerRetention from "@/sections/services/outbound/CustomerRetention";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Customer Retention",
  description: "This this Customer Retention page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <CustomerRetention />
    </div>
  );
}
