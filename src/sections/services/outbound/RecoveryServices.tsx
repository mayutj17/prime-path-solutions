"use client";

import React from "react";

const RecoveryServices = () => {
  const service = {
    title: "Recovery Services",
    shortDescription:
      "Our recovery services are designed to help businesses recover from data loss, system failures, and other unforeseen challenges, ensuring minimal downtime and business continuity.",
    image: "/img/outbound/img1.jpg",
    fullDescription: `Prime Path Solutions offers comprehensive recovery services tailored to businesses facing disruptions such as data loss, system failures, or cyberattacks. Our expert team is equipped to handle data recovery, disaster recovery planning, and system restorations to ensure your business gets back on track quickly and securely.

    We focus on minimizing downtime and protecting your critical data and systems, so your operations continue running smoothly, even in the face of unexpected challenges. Whether you need data restoration, backup systems, or full system recovery, we provide reliable solutions to safeguard your business's continuity.`,
    features: [
      "Data Recovery",
      "Disaster Recovery Planning",
      "System Restoration",
      "Business Continuity Solutions",
    ],
  };

  return (
    <div className="container mx-auto px-10 py-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-6 mb-10">
        {/* Image */}
        <div className="overflow-hidden rounded-md shadow-sm">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover md:h-80"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-3xl font-bold text-[#750000] mb-4">
            {service.title}
          </h1>
          <p className="text-gray-600 text-base">{service.shortDescription}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        {/* Overview */}
        <div>
          <h2 className="text-2xl font-semibold text-[#750000] mb-4">
            Overview
          </h2>
          <p className="text-gray-600 text-base">{service.fullDescription}</p>
        </div>

        {/* Our Approach */}
        <div>
          <h2 className="text-2xl font-semibold text-[#750000] mb-4">
            Our Approach
          </h2>
          <ul className="space-y-2 text-gray-600 text-base list-disc pl-5">
            <li>Assessment of Recovery Needs</li>
            <li>Tailored Recovery Plan Creation</li>
            <li>Implementation and Testing</li>
            <li>Ongoing Monitoring and Support</li>
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-[#750000] mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-md border border-gray-200"
            >
              <h3 className="font-medium text-[#750000] mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">
                Expert solutions for {feature.toLowerCase()} to ensure business
                continuity.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecoveryServices;
