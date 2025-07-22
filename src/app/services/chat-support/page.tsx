import ChatSupport from "@/sections/services/chat/ChatSupport";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Chat Support",
  description: "This this Chat Support page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <ChatSupport />
    </div>
  );
}
