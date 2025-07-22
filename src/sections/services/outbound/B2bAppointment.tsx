"use client";

import React from "react";

const B2bAppointment = () => {
  const service = {
    title: "B2B Appointment Service",
    shortDescription:
      "Prime Path Solutions offers professional B2B appointment setting services that help businesses connect with key decision-makers, schedule meetings, and drive new business opportunities.",
    image: "/img/outbound/img5.jpg",
    fullDescription: `At Prime Path Solutions, we specialize in B2B appointment setting that helps businesses engage with high-level decision-makers and schedule valuable meetings. Our experienced team of appointment setters ensures that your sales team connects with the right prospects at the right time, increasing the likelihood of successful conversions.

    With our data-driven approach and personalized strategies, we identify and qualify the best leads, ensuring your sales efforts are focused on prospects with the highest potential. By outsourcing appointment setting to us, your team can concentrate on closing deals while we handle the crucial task of securing meetings and building relationships with potential clients.`,
    features: [
      "Lead Qualification",
      "Targeted Outreach",
      "Appointment Scheduling",
      "Sales Funnel Optimization",
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
            <li>Prospect Research and Targeting</li>
            <li>Tailored Outreach and Messaging</li>
            <li>Lead Qualification and Nurturing</li>
            <li>Seamless Appointment Scheduling</li>
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
                Enhancing your B2B sales process through {feature.toLowerCase()}
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default B2bAppointment;
