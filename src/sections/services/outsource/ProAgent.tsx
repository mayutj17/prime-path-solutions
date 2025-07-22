"use client";

import React from "react";

const ProAgent = () => {
  const service = {
    title: "Pro Agent Service",
    shortDescription:
      "Empower your business with highly skilled, professional agents delivering exceptional service and seamless communication across all channels.",
    image: "/img/qa/img3.jpg",
    fullDescription: `Our Pro Agent Service connects businesses with expert agents capable of providing outstanding customer support. Our agents are trained to handle a wide variety of tasks, from sales and support to technical assistance, ensuring that your customers receive timely and effective help.

    With top-tier professionals and tailored solutions, we guarantee a high level of customer satisfaction and operational efficiency.`,
    features: [
      "Skilled & Experienced Agents",
      "Multichannel Communication Support",
      "Flexible Shift Coverage",
      "Advanced CRM Integration",
      "24/7 Availability",
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
            "Agent Onboarding & Training",
            "Customized Script & Process Setup",
            "Flexible Scheduling & Coverage",
            "Continuous Monitoring & Feedback",
            "Reporting & Analytics",
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="h-10 w-10 flex items-center justify-center bg-[#750000] text-white font-bold rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#750000]">{step}</h3>
                <p className="text-gray-600">
                  We ensure high-quality performance at every step of the
                  process.
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
                Our agents excel in providing {feature.toLowerCase()} services.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProAgent;
