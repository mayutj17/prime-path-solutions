"use client";

import React from "react";

const EmailSupport = () => {
  const service = {
    title: "Email Support Service",
    shortDescription:
      "Our Email Support Service provides professional, timely responses to customer inquiries, ensuring effective communication and enhanced customer satisfaction.",
    image: "/img/chat/img2.jpg",
    fullDescription: `Our Email Support Service is designed to offer prompt and efficient assistance through email, ensuring that your customers' queries are addressed with professionalism and accuracy. Our team of experts is dedicated to handling a wide range of inquiries, from troubleshooting and product queries to billing and technical support. 

    With our Email Support Service, businesses can ensure they provide timely and clear communication to customers, which helps in improving customer satisfaction, trust, and loyalty. Our support is structured to handle high volumes of inquiries while maintaining personalized responses and resolving issues effectively.`,
    features: [
      "Fast Response Time",
      "Personalized Email Responses",
      "24/7 Availability",
      "Issue Resolution and Follow-up",
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
            <li>Efficient Email Management</li>
            <li>Timely and Professional Responses</li>
            <li>Thorough Issue Resolution</li>
            <li>Personalized Follow-ups</li>
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

export default EmailSupport;
