import React from "react";
import { Card, CardContent } from "@/components/Cards/Services";

const OrderTracking = () => {
  const service = {
    title: "Order Tracking Services",
    shortDescription:
      "Provide your customers with real-time updates and seamless tracking of their orders with our reliable order tracking services at Prime Path Solutions.",
    image: "/img/tele/img3.jpg",
    fullDescription: `At Prime Path Solutions, we offer comprehensive order tracking services that give your customers the ability to track their orders with ease and accuracy. Our platform ensures that every customer receives timely updates, providing transparency and enhancing their overall experience.

    From order placement to delivery, we offer real-time tracking information that helps customers stay informed about the status of their purchases. Our team is dedicated to ensuring that all inquiries related to order tracking are handled promptly, providing assistance when needed and resolving any issues that may arise during the shipping process.`,
    features: [
      "Real-Time Order Updates",
      "Delivery Status Notifications",
      "Order History and Tracking",
      "Customer Support for Tracking Inquiries",
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
                Our order tracking services are designed to provide your
                customers with the best experience by offering real-time,
                detailed updates throughout the order lifecycle:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Order Confirmation and Processing
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Real-Time Tracking Updates
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Delivery Notifications and Status Alerts
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Customer Support for Order Tracking Inquiries
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
                    Offering {feature.toLowerCase()} to ensure complete order
                    visibility
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

export default OrderTracking;
