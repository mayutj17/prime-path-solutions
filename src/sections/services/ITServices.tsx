"use client";

import React from "react";

const ITServices = () => {
  const service = {
    title: "Call Center Solutions",
    shortDescription:
      "Prime Path Solutions provides top-tier call center services, enhancing customer experience through efficient, reliable, and cost-effective solutions.",
    image: "/img/qa/img5.jpeg",
    fullDescription: `At Prime Path Solutions, we specialize in providing world-class call center services that boost customer engagement and streamline operations. Our team is dedicated to delivering outstanding support tailored to meet the unique needs of your business.

    We ensure 24/7 availability with a focus on delivering the highest quality of service, managing customer inquiries, and creating memorable experiences for your clients.`,
    features: [
      "24/7 Customer Support",
      "Multi-channel Communication",
      "Expert Call Handling",
      "Scalable Solutions",
    ],
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-[#750000] mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-600">{service.shortDescription}</p>
      </header>

      {/* New Hero Section with Image on the Right */}
      <section className="relative bg-[#f7f7f7] rounded-lg shadow-md p-8">
        {/* Top Image */}
        <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg mb-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transform transition-all hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-[#750000] mb-4">
            Empowering Your Business with Call Center Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore tailored call center solutions that improve customer
            interactions and drive business growth. Our experts are committed to
            providing exceptional support every step of the way.
          </p>
          <a
            href="#services"
            className="inline-block bg-[#750000] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5e0000] transform transition-all hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="space-y-8">
        <h2 className="text-3xl font-bold text-[#750000] text-center">
          Our Call Center Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg text-[#750000] mb-2">
                {feature}
              </h3>
              <p className="text-gray-600 text-sm">
                We provide best-in-class solutions for {feature.toLowerCase()}{" "}
                to ensure your business thrives.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[#f7f7f7] py-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-[#750000] text-center mb-6">
          Our Approach to Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Consultation and Analysis",
            "Custom Call Center Solutions",
            "Implementation and Testing",
            "Continuous Support",
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-[#750000] text-white rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-[#750000] mb-2">{step}</h3>
              <p className="text-gray-600 text-sm">
                We ensure outstanding service at every step to meet your call
                center needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#750000]">
            Why Choose Prime Path Solutions?
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes us the trusted partner for call center services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Professionals",
              description:
                "Our team has years of experience handling diverse call center operations.",
            },
            {
              title: "Tailored Solutions",
              description:
                "We provide custom solutions that fit your unique business requirements.",
            },
            {
              title: "24/7 Availability",
              description:
                "Our support team is available around the clock to assist you anytime.",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[#750000] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ITServices;
