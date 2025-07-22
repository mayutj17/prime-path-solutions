import OrderTracking from "@/sections/services/OrderTracking";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Order Tracking",
  description: "This this Order Tracking page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <OrderTracking />
    </div>
  );
}
