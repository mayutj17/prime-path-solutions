"use client";

import React from "react";

const PayrollProcess = () => {
  const service = {
    title: "Payroll Processing",
    shortDescription:
      "Efficient payroll processing solutions to ensure timely and accurate compensation for your employees while maintaining compliance.",
    image: "/img/manpower/img3.jpeg",
    fullDescription: `Payroll processing is a crucial aspect of business operations. We offer comprehensive payroll solutions to ensure your employees are paid on time, and all legal and regulatory requirements are met. Our service includes tax calculations, deductions, payslip generation, and compliance with labor laws.

    Our experienced team takes care of all aspects of payroll management, freeing up your time to focus on growing your business while ensuring your workforce remains satisfied and compliant.`,
    features: [
      "Salary Calculations",
      "Tax Calculations and Deductions",
      "Payslip Generation",
      "Compliance with Labor Laws",
    ],
  };

  return (
    <div className="container mx-auto px-10 py-10">
      {/* Hero Section */}
      <div className="relative bg-[#f5f5f5] p-10 rounded-lg shadow-lg mb-12">
        <div className="absolute inset-0 opacity-30">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-[#750000] mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-700">{service.shortDescription}</p>
        </div>
      </div>

      {/* Service Overview Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#750000] mb-4">
              Service Overview
            </h2>
            <p className="text-gray-700 text-base">{service.fullDescription}</p>
          </div>
          <div>
            <img
              src={service.image}
              alt="Overview Visual"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#f5f5f5] p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-[#750000] mb-4">
          Our Process
        </h2>
        <p className="text-gray-700 mb-6">
          Our payroll processing service follows a structured approach to ensure
          accuracy and timeliness:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              1
            </span>
            <span>Employee Data Collection</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              2
            </span>
            <span>Tax and Deduction Calculations</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              3
            </span>
            <span>Payslip Generation</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              4
            </span>
            <span>Payroll Disbursement and Reporting</span>
          </li>
        </ul>
      </section>

      {/* Service Features Section */}
      <section>
        <h2 className="text-3xl font-semibold text-[#750000] mb-6">
          Service Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-[#750000] mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">
                Ensuring accuracy and compliance in {feature.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PayrollProcess;
