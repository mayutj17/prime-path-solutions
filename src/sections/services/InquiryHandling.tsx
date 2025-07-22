import React from "react";
import { Card, CardContent } from "@/components/Cards/Services";

const InquiryHandling = () => {
  const service = {
    title: "Inquiry Handling Services",
    shortDescription:
      "Enhance your customer support and improve satisfaction with our professional inquiry handling services at Prime Path Solutions.",
    image: "/img/tele/img2.jpg",
    fullDescription: `At Prime Path Solutions, we specialize in providing efficient and customer-focused inquiry handling services that ensure prompt and accurate responses to your clients' questions. Our experienced team is trained to handle inquiries across multiple channels, including phone, email, and live chat, ensuring that your customers receive timely and relevant information.

    We aim to improve your customer satisfaction and retention by providing seamless inquiry resolution that meets the unique needs of each customer. Whether your inquiries are related to products, services, or general support, our team is ready to offer consistent and high-quality service every time.`,
    features: [
      "Multi-Channel Support",
      "Timely Response Handling",
      "Customer Satisfaction Focus",
      "Issue Resolution and Follow-up",
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
                Our inquiry handling services are designed to provide efficient,
                personalized, and accurate responses. Here&apos;s how we manage
                every inquiry:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Inquiry Reception and Acknowledgment
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Thorough Inquiry Understanding and Analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Accurate Information Delivery and Clarifications
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-[#750000] mr-3"></div>
                  Follow-up and Continuous Support
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
                    Ensuring effective handling and resolution of every inquiry
                    with {feature.toLowerCase()}
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

export default InquiryHandling;
