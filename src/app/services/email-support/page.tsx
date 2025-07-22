import EmailSupport from "@/sections/services/chat/EmailSupport";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Email Support",
  description: "This this Email Support page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <EmailSupport />
    </div>
  );
}
