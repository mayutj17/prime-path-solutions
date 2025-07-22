"use client";

import React from "react";

const ChatSupport = () => {
  const service = {
    title: "Chat Support Service",
    shortDescription:
      "Our Chat Support Service helps businesses offer real-time assistance to customers, ensuring seamless interactions and timely responses that drive customer satisfaction.",
    image: "/img/chat/img1.jpg",
    fullDescription: `Our Chat Support Service is designed to deliver fast, efficient, and personalized customer interactions in real-time. With our team of skilled agents, we provide 24/7 support to address customer inquiries, resolve issues, and enhance their overall experience. By integrating live chat functionality on your website, your business can offer immediate assistance and increase conversion rates.

    With our service, customers feel valued and heard, leading to higher customer retention and satisfaction. We handle all aspects of chat support, from greeting customers to answering questions, troubleshooting, and assisting with sales inquiries, ensuring a professional and responsive service every time.`,
    features: [
      "24/7 Availability",
      "Instant Response Times",
      "Customer Issue Resolution",
      "Sales and Support Assistance",
    ],
  };

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        {/* Image */}
        <div className="w-full max-w-3xl mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Title and Description */}
        <h1 className="text-3xl font-bold text-[#750000] mb-4">
          {service.title}
        </h1>
        <p className="text-gray-600 text-base">{service.shortDescription}</p>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#750000] mb-4">
            Overview
          </h2>
          <p className="text-gray-600 text-base">{service.fullDescription}</p>
        </div>

        {/* Our Approach */}
        <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#750000] mb-4">
            Our Approach
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-base">
            <li>Active Chat Monitoring</li>
            <li>Fast Response Time</li>
            <li>Personalized Customer Support</li>
            <li>Seamless Integration with Sales</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#750000] mb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium text-[#750000] mb-2">{feature}</h3>
                <p className="text-sm text-gray-600">
                  Excellence in {feature.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
