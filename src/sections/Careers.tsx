"use client";

import JobItem from "./services/JobItem";

const Careers = () => {
  const jobs = [
    {
      title: "Customer Support Representative",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Join our dynamic BPO team to provide exceptional customer service and support to our clients.",
    },
    {
      title: "Call Center Supervisor",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Lead a team of customer support agents, ensuring high-quality service and performance.",
    },
    {
      title: "BPO Quality Analyst",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Monitor and evaluate call center performance to ensure adherence to quality standards.",
    },
    {
      title: "Training and Development Manager",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Design and implement training programs to enhance employee skills and performance.",
    },
    {
      title: "HR Specialist",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Support employee relations, recruitment, and other HR functions within the BPO environment.",
    },
    {
      title: "Operations Manager",
      location: "Colombo, Sri Lanka",
      jobType: "Full Time",
      description:
        "Oversee daily operations, ensure service level targets are met, and maintain a positive working environment.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 mt-10 sm:mt-16 md:mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Current Job <span className="text-[#750000]">Open Positions</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Join Prime Path Solutions, a leading BPO company. Explore
            opportunities to enhance your career in customer service and
            operations.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <JobItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
