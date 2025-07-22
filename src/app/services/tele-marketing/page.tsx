import TeleMarketing from "@/sections/services/TeleMarketing";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Tele Marketing",
  description: "This this Tele Marketing page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <TeleMarketing />
    </div>
  );
}
