"use client";

import React from "react";

const CallCenter = () => {
  const service = {
    title: "Call Center Reporting",
    shortDescription:
      "Gain insightful, real-time data and analytics to optimize your call center performance and drive business growth.",
    image: "/img/qa/img4.jpg",
    fullDescription: `Our Call Center Reporting service provides comprehensive, real-time insights into your call center operations. From call volume and response times to agent performance, we deliver the data you need to make informed decisions that improve efficiency, enhance customer service, and boost overall performance.

    Leverage our customizable reporting solutions to track key metrics, identify trends, and optimize your call center’s productivity.`,
    features: [
      "Real-time Reporting",
      "Customizable Dashboards",
      "Agent Performance Analytics",
      "Call Volume & Trends Tracking",
      "Customer Satisfaction Metrics",
      "Historical Data Analysis",
    ],
  };

  return (
    <div className="container mx-auto px-10 py-12 space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#750000] to-[#431407] text-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">{service.title}</h1>
            <p className="text-lg mb-6">{service.shortDescription}</p>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-[#750000] text-center">
          Service Overview
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-[#750000] text-center mb-6">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "Data Collection & Integration",
            "Customizable Reporting Templates",
            "Real-Time Dashboard Setup",
            "Performance Metrics & KPIs",
            "Automated Reports & Alerts",
            "Continuous Optimization",
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="h-10 w-10 flex items-center justify-center bg-[#750000] text-white font-bold rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#750000]">{step}</h3>
                <p className="text-gray-600">
                  We provide actionable insights to enhance your call
                  center&apos;s efficiency.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-[#750000] text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-[#750000] mb-2">{feature}</h3>
              <p className="text-gray-600 text-sm">
                Empower your team with {feature.toLowerCase()} for better
                decision-making.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CallCenter;
