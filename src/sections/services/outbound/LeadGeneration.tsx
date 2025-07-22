"use client";

import React from "react";

const LeadGeneration = () => {
  const service = {
    title: "Lead Generation",
    shortDescription:
      "Our lead generation services help businesses attract and convert high-quality leads, increasing sales and expanding customer bases through targeted strategies and advanced tools.",
    image: "/img/outbound/img2.jpg",
    fullDescription: `Prime Path Solutions offers effective lead generation services to help businesses grow by attracting, nurturing, and converting potential clients. Through a combination of innovative strategies, targeted campaigns, and data-driven insights, we ensure you capture leads that are most likely to convert into loyal customers.

    Our services include inbound marketing, SEO, email campaigns, and social media advertising, all designed to deliver highly-qualified leads that align with your business goals. We create personalized lead funnels to maximize engagement and help your sales team close more deals, fast.`,
    features: [
      "Targeted Campaigns",
      "SEO Optimization",
      "Lead Nurturing",
      "Data-Driven Insights",
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
            <li>Research and Audience Segmentation</li>
            <li>Customized Campaign Development</li>
            <li>Lead Capture and Conversion Strategy</li>
            <li>Continuous Optimization and Reporting</li>
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
                Implementing {feature.toLowerCase()} to boost lead conversion
                and sales.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
