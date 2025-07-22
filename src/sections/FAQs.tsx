"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "@/components/Tag";
const items = [
  {
    question: "What industries does your BPO service cater to?",
    answer:
      "We serve a wide range of industries, including healthcare, e-commerce, finance, telecommunications, and more. Our customizable solutions are designed to meet the unique needs of each sector.",
  },
  {
    question: "How is pricing structured for BPO services?",
    answer:
      "Our pricing is flexible and tailored to your specific needs. It can be based on a per-agent, per-hour, or per-project model. Contact us for a detailed quote based on your requirements.",
  },
  {
    question: "Can we scale up or down based on business needs?",
    answer:
      "Absolutely. We offer scalable solutions that allow you to adjust the size of your team or services as your business evolves. Our goal is to support your growth seamlessly.",
  },
  {
    question: "How do you ensure data security in BPO operations?",
    answer:
      "Data security is at the core of our operations. We adhere to strict compliance standards, utilize advanced encryption technologies, and follow robust protocols to safeguard your data at every step.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const MinusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-minus"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-medium">{question}</span>
        <div className="cursor-pointer">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="text-black py-[72px] sm:py-24 mt-20">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-3xl mx-auto text-center text-black font-bold">
          Questions? We&apos;ve got{" "}
          <span className="text-[#750000]">answers</span>
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
