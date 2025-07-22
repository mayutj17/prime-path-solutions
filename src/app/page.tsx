import type { Metadata } from "next";

import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FAQs } from "@/sections/FAQs";

import Introduction from "@/sections/Introduction";
import { Testimonials } from "@/sections/Testimonials";

export const metadata: Metadata = {
  title: "Prime Path Solutions",
  description: "This this Prime Path Solutions home page",
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="px-4 lg:px-8 mx-auto max-w-screen-xl ">
        <Introduction />
      </div>

      <div className="relative">
        <div className="w-full absolute top-40 bg-gradient-to-r from-[#750000] opacity-90 dark:opacity-50 left-0 h-[500px] -skew-y-12 z-0" />

        <div className="px-3 md:px-20">
          <OurServices />
        </div>
      </div>

      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <WhyChooseUs />
        <Testimonials />
        <FAQs />
      </div>
    </div>
  );
}
