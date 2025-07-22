import PayrollProcess from "@/sections/services/hr/PayrollProcess";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Payroll Processing",
  description: "This this Payroll Processing page",
};

export default function Home() {
  return (
    <div className="w-full">
      <PayrollProcess />
    </div>
  );
}
