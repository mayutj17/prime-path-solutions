"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined }); // Clear error on change
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (validate()) {
      // Simulate form submission
      toast.success("Your message has been sent successfully!", {
        // icon: "✅",
        style: {
          padding: "16px",
          background: "#750000", // Soft background color for better contrast
          color: "#FFFFFF",
          borderRadius: "8px",
          fontWeight: "500",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: "#FFFFFF",
          secondary: "#16a34a",
        },
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Please fill out all fields correctly.", {
        style: {
          padding: "16px",
          background: "#750000", // Soft background color for better contrast
          color: "#FFFFFF",
          borderRadius: "8px",
          fontWeight: "500",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: "#FFFFFF",
          secondary: "#750000",
        },
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Contact <span className="text-[#750000]">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reach out to Prime Path Solutions, where we are committed to
            providing top-notch call center and BPO services to enhance your
            customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <p className="text-gray-600">
                Connect with us at Prime Path Solutions to explore how our
                customer support and BPO solutions can help your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#750000] mr-4" />
                <div>
                  <h4 className="font-medium">PHONE:</h4>
                  <span className="text-gray-600">+94 112 718 564</span>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#750000] mr-4" />
                <div>
                  <h4 className="font-medium">EMAIL:</h4>
                  <span className="text-gray-600">
                    contact@primepath-solutions.com
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#750000] mr-4" />
                <div>
                  <h4 className="font-medium">ADDRESS:</h4>
                  <span className="text-gray-600">
                    291-3/1 Galle Road, Mount Lavania, Colombo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-6 py-4 bg-gray-50 text-sm rounded-lg focus:outline-none ${
                      errors.name
                        ? "border-2 border-red-500"
                        : "focus:ring-2 focus:ring-[#750000]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-6 py-4 bg-gray-50 text-sm rounded-lg focus:outline-none ${
                      errors.email
                        ? "border-2 border-red-500"
                        : "focus:ring-2 focus:ring-[#750000]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-6 py-4 bg-gray-50 text-sm rounded-lg focus:outline-none ${
                    errors.subject
                      ? "border-2 border-red-500"
                      : "focus:ring-2 focus:ring-[#750000]"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className={`w-full px-6 py-4 bg-gray-50 text-sm rounded-lg focus:outline-none ${
                    errors.message
                      ? "border-2 border-red-500"
                      : "focus:ring-2 focus:ring-[#750000]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <a href="mailto:mayutj17@gmail.com">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#750000] text-white rounded-lg hover:bg-[#600000] transition-colors duration-200"
              >
                Send Now!
              </button>
            </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
