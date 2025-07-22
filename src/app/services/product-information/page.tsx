import ProductInfo from "@/sections/services/ProductInfo";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Product Info",
  description: "This this Product Info page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <ProductInfo />
    </div>
  );
}
