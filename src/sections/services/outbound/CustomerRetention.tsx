"use client";

import React from "react";

const CustomerRetention = () => {
  const service = {
    title: "Customer Retention",
    shortDescription:
      "Prime Path Solutions provides comprehensive customer retention strategies to help businesses maintain long-term relationships with their clients, enhance satisfaction, and boost repeat sales.",
    image: "/img/outbound/img4.jpeg",
    fullDescription: `At Prime Path Solutions, we specialize in creating tailored customer retention strategies that keep your customers coming back. Through personalized engagement, loyalty programs, and proactive support, we help businesses reduce churn and increase customer lifetime value.

    Our team focuses on understanding your customer base, addressing their pain points, and delivering exceptional experiences that foster loyalty. Whether it's through regular check-ins, tailored offers, or proactive customer service, our goal is to build long-lasting relationships that drive sustained business growth.`,
    features: [
      "Loyalty Programs",
      "Personalized Engagement",
      "Proactive Customer Support",
      "Feedback and Improvement Loops",
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
            <li>Customer Segmentation and Analysis</li>
            <li>Tailored Retention Campaigns</li>
            <li>Personalized Communication Strategies</li>
            <li>Continuous Feedback and Service Enhancement</li>
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
                Fostering customer loyalty through {feature.toLowerCase()} to
                enhance retention and lifetime value.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerRetention;
