"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Cards/Services";
import Tag from "./Tag";

import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      title: "Outsourcing for Back Office Tasks",
      description:
        "Streamline administrative operations with efficient handling of data processing, payroll management, and document organization.",
      icon: "🚀",
    },
    {
      title: "Customer Service Management",
      description:
        "Enhance customer satisfaction with 24/7 support, multilingual service capabilities, and tailored client interaction solutions.",
      icon: "📞",
    },
    {
      title: "Technical Support and Management",
      description:
        "Deliver expert IT troubleshooting, software maintenance, and hardware support to ensure seamless technology operations.",
      icon: "🔧",
    },
    {
      title: "IT and Software Services",
      description:
        "Provide robust IT solutions, software development, and maintenance services to keep your business running smoothly.",
      icon: "💻",
    },
    {
      title: "Legal Process Outsourcing",
      description:
        "Support legal operations with document review, case management, and compliance monitoring to optimize efficiency.",
      icon: "⚖️",
    },
    {
      title: "Data Entry and Management",
      description:
        "Maintain accurate and up-to-date records with our reliable data entry, processing, and analysis services.",
      icon: "📋",
    },
  ];

  const duplicatedServices = [...services, ...services];
  return (
    <>
      {/* Content Section */}
      <div
        data-aos="flip-up"
        className="relative z-10 max-w-xl mx-auto text-center mt-60"
      >
        <div className="flex justify-center">
          <Tag>Services</Tag>
        </div>
        <h2 className="font-bold text-darken my-3 text-3xl text-black font-bold">
          Your Ultimate
          <span className="text-[#750000]"> BPO Management Platform.</span>
        </h2>
        <p className="leading-relaxed text-gray-500">
          Prime Path Solutions is a versatile and powerful cloud-based solution
          that brings together all the tools you need to efficiently manage and
          grow your business process outsourcing operations.
        </p>
      </div>

      {/* Scrolling Cards Section */}
      <div className="relative w-full overflow-hidden mt-10">
        {/* Cards Container with Blur Effects */}
        <div>
          {/* Left Blur Gradient */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r  to-transparent z-10" />
          {/* Right Blur Gradient */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div key={index} className="flex-none w-80 py-10">
                <div
                  className="h-full flex flex-col justify-between rounded-lg "
                  style={{
                    boxShadow: "0 1px 1px rgba(69, 26, 3, 0.5)", // Adjust shadow offsets, blur, and opacity as needed
                  }}
                >
                  <CardHeader>
                    <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-semibold text-[#750000]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
