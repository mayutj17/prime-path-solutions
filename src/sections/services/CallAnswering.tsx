import React from "react";
import { Card, CardContent } from "@/components/Cards/Services";

const CallAnswering = () => {
  const service = {
    title: "Call Answering Services",
    shortDescription:
      "Ensure your customers reach you at any time with our professional call answering services, providing timely, efficient, and reliable communication.",
    image: "/img/tele/img4.jpg",
    fullDescription: `Prime Path Solutions offers expert call answering services designed to manage inbound calls effectively. We ensure that every call is answered promptly by trained professionals who can provide accurate information or direct inquiries to the appropriate department. Whether you're running a small business or a large enterprise, our call answering service helps you maintain a professional image and offers your clients the support they need.

    Our team is equipped to handle a wide variety of customer calls, from simple inquiries to more complex issues, all while maintaining high standards of customer service. With our services, you can improve customer satisfaction, reduce call abandonment rates, and ensure your business never misses an important call.`,
    features: [
      "24/7 Call Availability",
      "Professional Call Handling",
      "Custom Scripts and Call Routing",
      "Message Taking and Call Forwarding",
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
                Our call answering services are designed to ensure that your
                business can handle all incoming calls efficiently and
                professionally:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  24/7 Call Availability
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Professional Call Handling
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Custom Scripts and Call Routing
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Message Taking and Call Forwarding
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
                    Ensuring efficient call answering services, from{" "}
                    {feature.toLowerCase()} to ensuring your business is always
                    connected.
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

export default CallAnswering;
