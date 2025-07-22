import React from "react";
import { Card, CardContent } from "@/components/Cards/Services";

const TeleMarketing = () => {
  const service = {
    title: "Telemarketing Services",
    shortDescription:
      "Boost your sales and enhance customer relationships with our expert telemarketing solutions at Prime Path Solutions.",
    image: "/img/tele/img1.jpg",
    fullDescription: `At Prime Path Solutions, we specialize in providing top-tier telemarketing services that help businesses drive revenue and build lasting relationships with their clients. Our team of skilled professionals is trained to effectively communicate your brand's value, handle customer inquiries, and close sales with a personal touch.

    Whether you're looking to expand your reach, qualify leads, or nurture existing clients, we are equipped with the tools and expertise to deliver results that meet your business objectives. Our services include inbound and outbound calling, lead generation, and customer support, ensuring your business stands out in a competitive market.`,
    features: [
      "Lead Generation",
      "Sales Support",
      "Customer Retention",
      "Market Research",
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
                Our telemarketing services follow a customer-centric approach to
                ensure that every interaction is impactful and productive.
                Here&apos;s how we approach each campaign:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Target Audience Identification
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Script Development and Training
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Outbound Calling and Lead Qualification
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Reporting and Continuous Optimization
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
                    Helping your business grow through excellent{" "}
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

export default TeleMarketing;
