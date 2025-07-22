"use client";

import React from "react";

const ContactCenter = () => {
  const service = {
    title: "Contact Center Service",
    shortDescription:
      "Enhance customer satisfaction and drive engagement with our fully managed Contact Center services, offering round-the-clock support and seamless communication.",
    image: "/img/qa/img2.jpeg",
    fullDescription: `Our Contact Center service is designed to help businesses provide exceptional customer support. Whether through phone, email, chat, or social media, we ensure that every customer interaction is handled professionally and efficiently.

    We offer 24/7 support, skilled agents, and advanced technology to meet the needs of businesses and deliver a seamless customer experience, boosting satisfaction and loyalty.`,
    features: [
      "Inbound & Outbound Call Handling",
      "24/7 Availability",
      "Multichannel Support",
      "Customer Feedback Collection",
      "Advanced Reporting & Analytics",
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
            "Client Needs Assessment",
            "Customized Script & Training",
            "Agent Allocation & Setup",
            "Live Monitoring & Quality Assurance",
            "Reporting & Feedback",
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="h-10 w-10 flex items-center justify-center bg-[#750000] text-white font-bold rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#750000]">{step}</h3>
                <p className="text-gray-600">
                  We ensure smooth and efficient communication at every step.
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
                We provide expert services in {feature.toLowerCase()} for
                seamless customer experiences.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactCenter;
