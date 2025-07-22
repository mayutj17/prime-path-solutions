"use client";

import React from "react";
import { Card, CardContent } from "@/components/Cards/Services";

const Outbound = () => {
  const service = {
    title: "Outbound Services",
    shortDescription:
      "Transform your digital presence with our cutting-edge web development solutions that drive results and enhance user engagement.",
    image: "/img/Rectangle 19.png",
    fullDescription: `Our comprehensive web development service combines technical expertise with creative innovation to deliver outstanding results. We focus on creating scalable, performant, and user-friendly websites that help businesses thrive in the digital space.

    Every project is handled with meticulous attention to detail, ensuring that your website not only looks great but also performs exceptionally well across all devices and platforms.`,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Security Best Practices",
    ],
  };

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Hero Section with Text-Image Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-10">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-[#750000]">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg">{service.shortDescription}</p>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-64 md:h-full min-h-[320px] rounded-lg overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Full Width Content Below */}
      <Card className="w-full">
        <CardContent className="p-8">
          {/* Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-[#750000]">
                Overview
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-[#750000]">
                Our Approach
              </h2>
              <p className="text-gray-600">
                We follow a structured and collaborative approach to ensure your
                web development project succeeds:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Discovery and Planning
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Design and Prototyping
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Development and Testing
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Launch and Support
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#750000]">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="h-2 w-2 rounded-full bg-[#750000] mb-4"></div>
                  <h3 className="font-medium mb-2">{feature}</h3>
                  <p className="text-sm text-gray-600">
                    Delivering excellence in every aspect of{" "}
                    {feature.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Outbound;
