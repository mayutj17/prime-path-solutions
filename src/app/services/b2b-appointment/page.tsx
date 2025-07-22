import B2bAppointment from "@/sections/services/outbound/B2bAppointment";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | B2B Appointment",
  description: "This this B2B Appointment page",
};

export default function Home() {
  return (
    <div className="w-full mt-20">
      <B2bAppointment />
    </div>
  );
}
