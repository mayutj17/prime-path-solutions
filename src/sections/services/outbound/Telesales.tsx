"use client";

import React from "react";

const Telesales = () => {
  const service = {
    title: "Telesales Outsourcing",
    shortDescription:
      "Prime Path Solutions offers professional telesales outsourcing services to help businesses increase sales, expand their customer base, and drive revenue growth through expertly managed telemarketing campaigns.",
    image: "/img/outbound/img3.jpg",
    fullDescription: `At Prime Path Solutions, we provide top-tier telesales outsourcing services that help businesses achieve their sales goals with ease. Our team of highly-trained telesales agents is skilled in engaging potential customers, promoting products or services, and closing sales over the phone.

    We handle every aspect of your telesales campaign, from lead generation to closing deals, ensuring that your business maximizes revenue while reducing operational costs. By outsourcing your telesales operations to us, you can focus on your core business while we work to grow your customer base and boost your sales figures.`,
    features: [
      "Lead Generation",
      "Appointment Scheduling",
      "Product Promotion",
      "Sales Closing",
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
            <li>Market Research and Targeting</li>
            <li>Customized Script Development</li>
            <li>Lead Qualification and Nurturing</li>
            <li>Performance Monitoring and Reporting</li>
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
                Maximizing sales through {feature.toLowerCase()} and expert
                telesales strategies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Telesales;
