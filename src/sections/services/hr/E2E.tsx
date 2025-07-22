"use client";

import React from "react";

const E2EHRServices = () => {
  const service = {
    title: "E2E HR Services",
    shortDescription:
      "Comprehensive end-to-end HR solutions to help your organization manage its workforce effectively and efficiently from recruitment to employee management.",
    image: "/img/manpower/img4.jpg",
    fullDescription: `Our E2E HR services offer a complete solution for all your human resource needs. From talent acquisition to employee engagement and performance management, we handle it all. We ensure compliance with all labor laws, manage payroll, benefits, and more, so you can focus on growing your business.

    Our dedicated team provides continuous support to streamline HR processes and improve your employee's work experience, boosting overall productivity and satisfaction.`,
    features: [
      "Recruitment & Onboarding",
      "Employee Engagement",
      "Payroll Management",
      "Compliance & Risk Management",
      "Performance & Training",
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
          We follow a structured and integrated approach to HR management:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              1
            </span>
            <span>Recruitment and Onboarding</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              2
            </span>
            <span>Employee Engagement and Retention</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              3
            </span>
            <span>Payroll and Benefits Management</span>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 bg-[#750000] rounded-full flex items-center justify-center text-white font-bold mr-4">
              4
            </span>
            <span>Performance and Training Management</span>
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
                Streamlining and enhancing {feature.toLowerCase()} for your
                organization.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default E2EHRServices;
