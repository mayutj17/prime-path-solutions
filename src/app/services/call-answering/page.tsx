import CallAnswering from "@/sections/services/CallAnswering";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Call Answering",
  description: "This this Call Answering page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <CallAnswering />
    </div>
  );
}
