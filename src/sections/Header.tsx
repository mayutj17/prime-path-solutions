"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isInboundDropdownOpen, setIsInboundDropdownOpen] = useState(false);
  const [isOutboundDropdownOpen, setIsOutboundDropdownOpen] = useState(false);
  const [isSocialMediaDropdownOpen, setIsSocialMediaDropdownOpen] =
    useState(false);
  const [isHrOutsourcingDropdownOpen, setIsHrOutsourcingDropdownOpen] =
    useState(false);
  const [isAdhocSupportDropdownOpen, setIsAdhocSupportDropdownOpen] =
    useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when menu is closed
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup: ensure scrolling is restored when component unmounts
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-50 md:px-8">
      <div className="py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between cursor-pointer">
            <div
              className="flex items-center gap-3 "
              onClick={() => router.push("/")}
            >
              <div className="transition-transform transform hover:scale-105 duration-500 ease-out">
                <Image
                  data-aos="fade-up"
                  data-aos-once="true"
                  src="/img/logosaas.png"
                  alt="Saas logo"
                  height={60}
                  width={60}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,<base64-placeholder>"
                />
              </div>
              <div className="text-sm sm:text-base md:text-sm lg:text-xl relative z-50 font-bold tracking-widest text-[#750000] rounded-lg cursor-pointer">
                <span className="hidden sm:inline">Prime Path Solutions</span>
                <span className="sm:hidden">PPS</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#750000] hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {/* Company Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1 hover:text-[#750000] transition-colors ${
                    ["/about-us", "/life-at-pps", "/careers"].includes(pathname)
                      ? "text-[#750000] font-bold"
                      : ""
                  }`}
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                >
                  Company
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isCompanyDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg py-2 min-w-[200px]"
                    onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                    onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  >
                    <a
                      href="/about-us"
                      className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                        isActive("/about-us") ? "text-[#750000] font-bold" : ""
                      }`}
                    >
                      About Us
                    </a>
                    <a
                      href="/life-at-pps"
                      className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                        isActive("/life-at-pps")
                          ? "text-[#750000] font-bold"
                          : ""
                      }`}
                    >
                      Life at PPS
                    </a>
                    <a
                      href="/careers"
                      className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                        isActive("/careers") ? "text-[#750000] font-bold" : ""
                      }`}
                    >
                      Careers
                    </a>
                  </div>
                )}
              </div>

              {/* Our Services Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1 hover:text-[#750000] transition-colors ${
                    [
                      "/services/tele-marketing",
                      "/services/inquiry-handling",
                      "/services/order-tracking",
                      "/services/hr-outsourcing",
                      "/services/outsourcing-adhoc-support",
                      "/services/call-answering",
                      "/services/it-services-for-call-center",
                      "/services/recovery-services",
                      "/services/lead-generation",
                      "/services/telesales-outsourcing",
                      "/services/product-information",
                      "/services/customer-retention",
                      "/services/b2b-appointment",
                      "/services/chat-support",
                      "/services/email-support",
                      "/services/manpower-solutions",
                      "/services/background-verification",
                      "/services/payroll-processing",
                      "/services/e2e-hr-services",
                      "/services/it-services-for-call-center",
                      "/services/quality-assurance",
                      "/services/contact-center-services",
                      "/services/pro-agent",
                      "/services/call-center-reporting",
                    ].includes(pathname)
                      ? "text-[#750000] font-bold"
                      : ""
                  }`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  Our Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg py-2 min-w-[200px]"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {/* Inbound Services Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsInboundDropdownOpen(true)}
                      onMouseLeave={() => setIsInboundDropdownOpen(false)}
                    >
                      <a
                        href="/services/tele-marketing"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          [
                            "/services/tele-marketing",
                            "/services/inquiry-handling",
                            "/services/order-tracking",
                            "/services/call-answering",
                            "/services/product-information",
                          ].includes(pathname)
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Inbound Services
                      </a>

                      {isInboundDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                          <a
                            href="/services/tele-marketing"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/tele-marketing")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Tele Marketing
                          </a>
                          <a
                            href="/services/inquiry-handling"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/inquiry-handling")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Inquiry Handling
                          </a>
                          <a
                            href="/services/order-tracking"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/order-tracking")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Order Tracking
                          </a>
                          <a
                            href="/services/call-answering"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/call-answering")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Call Answering
                          </a>
                          <a
                            href="/services/product-information"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/product-information")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Product Information Request
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Outbound Services Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsOutboundDropdownOpen(true)}
                      onMouseLeave={() => setIsOutboundDropdownOpen(false)}
                    >
                      <a
                        href="/services/recovery-services"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          [
                            "/services/recovery-services",
                            "/services/lead-generation",
                            "/services/telesales-outsourcing",
                            "/services/customer-retention",
                            "/services/b2b-appointment",
                          ].includes(pathname)
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Outbound Services
                      </a>

                      {isOutboundDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                          <a
                            href="/services/recovery-services"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/recovery-services")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Recovery Services
                          </a>
                          <a
                            href="/services/lead-generation"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/lead-generation")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Lead Generation
                          </a>
                          <a
                            href="/services/telesales-outsourcing"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/telesales-outsourcing")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Telesales Agent Outsourcing
                          </a>
                          <a
                            href="/services/customer-retention"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/customer-retention")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Customer Retention
                          </a>
                          <a
                            href="/services/b2b-appointment"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/b2b-appointment")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            B2B Appointment
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Social Media Services Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSocialMediaDropdownOpen(true)}
                      onMouseLeave={() => setIsSocialMediaDropdownOpen(false)}
                    >
                      <a
                        href="/services/chat-support"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          [
                            "/services/chat-support",
                            "/services/email-support",
                          ].includes(pathname)
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Social Media Services
                      </a>

                      {isSocialMediaDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                          <a
                            href="/services/chat-support"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/chat-support")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Chat Support Services
                          </a>
                          <a
                            href="/services/email-support"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/email-support")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Email Support Services
                          </a>
                        </div>
                      )}
                    </div>

                    {/* HR Outsourcing Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsHrOutsourcingDropdownOpen(true)}
                      onMouseLeave={() => setIsHrOutsourcingDropdownOpen(false)}
                    >
                      <a
                        href="/services/manpower-solutions"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          [
                            "/services/manpower-solutions",
                            "/services/background-verification",
                            "/services/payroll-processing",
                            "/services/e2e-hr-services",
                          ].includes(pathname)
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        HR Outsourcing
                      </a>

                      {isHrOutsourcingDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                          <a
                            href="/services/manpower-solutions"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/manpower-solutions")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Manpower Solutions
                          </a>
                          <a
                            href="/services/background-verification"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/background-verification")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Background Verification
                          </a>
                          <a
                            href="/services/payroll-processing"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/payroll-processing")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Payroll Processing
                          </a>
                          <a
                            href="/services/e2e-hr-services"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/e2e-hr-services")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            E2E HR Services
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Outsourcing Adhoc Support Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsAdhocSupportDropdownOpen(true)}
                      onMouseLeave={() => setIsAdhocSupportDropdownOpen(false)}
                    >
                      <a
                        href="/services/quality-assurance"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          [
                            "/services/quality-assurance",
                            "/services/contact-center-services",
                            "/services/pro-agent",
                            "/services/call-center-reporting",
                          ].includes(pathname)
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Outsourcing Adhoc Support
                      </a>

                      {isAdhocSupportDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                          <a
                            href="/services/quality-assurance"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/quality-assurance")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Quality Assurance
                          </a>
                          <a
                            href="/services/contact-center-services"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/contact-center-services")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Contact Center Services
                          </a>
                          <a
                            href="/services/pro-agent"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/pro-agent")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Pro Agent
                          </a>
                          <a
                            href="/services/call-center-reporting"
                            className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                              isActive("/services/call-center-reporting")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Call Center Reporting
                          </a>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative"
                      onMouseEnter={() => setIsHrOutsourcingDropdownOpen(true)}
                      onMouseLeave={() => setIsHrOutsourcingDropdownOpen(false)}
                    >
                      <a
                        href="/services/it-services-for-call-center"
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#750000] ${
                          isActive("/services/it-services-for-call-center")
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        IT Services for Call Center
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className={`${
                  isActive("/contact") ? "text-[#750000] font-bold" : ""
                } hover:text-[#750000] transition-colors`}
              >
                Contact
              </a>

              <button
                onClick={() => router.push("/contact")}
                className="bg-[#750000] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#600000] transition-colors"
              >
                Schedule a call
              </button>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50 md:hidden pt-20 pb-6">
                <div className="container mx-auto px-4 bg-white py-2">
                  <nav className="flex flex-col space-y-2">
                    {/* Company Dropdown */}
                    <div className="border-b pb-2">
                      <button
                        onClick={() =>
                          setIsCompanyDropdownOpen(!isCompanyDropdownOpen)
                        }
                        className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                          ["/about-us", "/life-at-pps", "/careers"].includes(
                            pathname
                          )
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Company
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isCompanyDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isCompanyDropdownOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          <a
                            href="/about-us"
                            className={`block py-2 text-black/60 hover:text-[#750000] ${
                              isActive("/about-us")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            About Us
                          </a>
                          <a
                            href="/life-at-pps"
                            className={`block py-2 text-black/60 hover:text-[#750000] ${
                              isActive("/life-at-pps")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Life at PPS
                          </a>
                          <a
                            href="/careers"
                            className={`block py-2 text-black/60 hover:text-[#750000] ${
                              isActive("/careers")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            Careers
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Services Dropdown */}
                    <div className="border-b pb-2">
                      <button
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                        className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                          pathname.includes("/services")
                            ? "text-[#750000] font-bold"
                            : ""
                        }`}
                      >
                        Our Services
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {/* Inbound Services */}
                          <div>
                            <button
                              onClick={() =>
                                setIsInboundDropdownOpen(!isInboundDropdownOpen)
                              }
                              className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                                [
                                  "/services/tele-marketing",
                                  "/services/inquiry-handling",
                                  "/services/order-tracking",
                                  "/services/call-answering",
                                  "/services/product-information",
                                ].includes(pathname)
                                  ? "text-[#750000] font-bold"
                                  : ""
                              }`}
                            >
                              Inbound Services
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isInboundDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isInboundDropdownOpen && (
                              <div className="pl-4 space-y-2 mt-2">
                                <a
                                  href="/services/tele-marketing"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/tele-marketing")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Tele Marketing
                                </a>
                                <a
                                  href="/services/inquiry-handling"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/inquiry-handling")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Inquiry Handling
                                </a>
                                <a
                                  href="/services/order-tracking"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/order-tracking")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Order Tracking
                                </a>
                                <a
                                  href="/services/call-answering"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/call-answering")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Call Answering
                                </a>
                                <a
                                  href="/services/product-information"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/product-information")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Product Information
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Outbound Services */}
                          <div>
                            <button
                              onClick={() =>
                                setIsOutboundDropdownOpen(
                                  !isOutboundDropdownOpen
                                )
                              }
                              className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                                [
                                  "/services/recovery-services",
                                  "/services/lead-generation",
                                  "/services/telesales-outsourcing",
                                  "/services/customer-retention",
                                  "/services/b2b-appointment",
                                ].includes(pathname)
                                  ? "text-[#750000] font-bold"
                                  : ""
                              }`}
                            >
                              Outbound Services
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isOutboundDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOutboundDropdownOpen && (
                              <div className="pl-4 space-y-2 mt-2">
                                <a
                                  href="/services/recovery-services"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/recovery-services")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Recovery Services
                                </a>
                                <a
                                  href="/services/lead-generation"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/lead-generation")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Lead Generation
                                </a>
                                <a
                                  href="/services/telesales-outsourcing"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/telesales-outsourcing")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Telesales Outsourcing
                                </a>
                                <a
                                  href="/services/customer-retention"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/customer-retention")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Customer Retention
                                </a>
                                <a
                                  href="/services/b2b-appointment"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/b2b-appointment")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  B2B Appointment
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Social Media Services */}
                          <div>
                            <button
                              onClick={() =>
                                setIsSocialMediaDropdownOpen(
                                  !isSocialMediaDropdownOpen
                                )
                              }
                              className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                                [
                                  "/services/chat-support",
                                  "/services/email-support",
                                ].includes(pathname)
                                  ? "text-[#750000] font-bold"
                                  : ""
                              }`}
                            >
                              Social Media Services
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isSocialMediaDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isSocialMediaDropdownOpen && (
                              <div className="pl-4 space-y-2 mt-2">
                                <a
                                  href="/services/chat-support"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/chat-support")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Chat Support
                                </a>
                                <a
                                  href="/services/email-support"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/email-support")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Email Support
                                </a>
                              </div>
                            )}
                          </div>

                          {/* HR                            <button
                              onClick={() => setIsHrOutsourcingDropdownOpen(!isHrOutsourcingDropdownOpen)}
                              className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                                [
                                  "/services/manpower-solutions",
                                  "/services/background-verification",
                                  "/services/payroll-processing",
                                  "/services/e2e-hr-services",
                                ].includes(pathname)
                                  ? "text-[#750000] font-bold"
                                  : ""
                              }`}
                            >
                              HR Outsourcing
                              <ChevronDown className={`w-4 h-4 transition-transform ${isHrOutsourcingDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isHrOutsourcingDropdownOpen && (
                              <div className="pl-4 space-y-2 mt-2">
                                <a
                                  href="/services/manpower-solutions"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/manpower-solutions") ? "text-[#750000] font-bold" : ""
                                  }`}
                                >
                                  Manpower Solutions
                                </a>
                                <a
                                  href="/services/background-verification"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/background-verification") ? "text-[#750000] font-bold" : ""
                                  }`}
                                >
                                  Background Verification
                                </a>
                                <a
                                  href="/services/payroll-processing"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/payroll-processing") ? "text-[#750000] font-bold" : ""
                                  }`}
                                >
                                  Payroll Processing
                                </a>
                                <a
                                  href="/services/e2e-hr-services"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/e2e-hr-services") ? "text-[#750000] font-bold" : ""
                                  }`}
                                >
                                  E2E HR Services
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Outsourcing Adhoc Support */}
                          <div>
                            <button
                              onClick={() =>
                                setIsAdhocSupportDropdownOpen(
                                  !isAdhocSupportDropdownOpen
                                )
                              }
                              className={`py-2 w-full text-left text-black/80 hover:text-[#750000] transition-colors flex items-center justify-between ${
                                [
                                  "/services/quality-assurance",
                                  "/services/contact-center-services",
                                  "/services/pro-agent",
                                  "/services/call-center-reporting",
                                ].includes(pathname)
                                  ? "text-[#750000] font-bold"
                                  : ""
                              }`}
                            >
                              Outsourcing Support
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isAdhocSupportDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isAdhocSupportDropdownOpen && (
                              <div className="pl-4 space-y-2 mt-2">
                                <a
                                  href="/services/quality-assurance"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/quality-assurance")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Quality Assurance
                                </a>
                                <a
                                  href="/services/contact-center-services"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive(
                                      "/services/contact-center-services"
                                    )
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Contact Center
                                </a>
                                <a
                                  href="/services/pro-agent"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/pro-agent")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Pro Agent
                                </a>
                                <a
                                  href="/services/call-center-reporting"
                                  className={`block py-2 text-black/60 hover:text-[#750000] ${
                                    isActive("/services/call-center-reporting")
                                      ? "text-[#750000] font-bold"
                                      : ""
                                  }`}
                                >
                                  Call Center Reporting
                                </a>
                              </div>
                            )}
                          </div>

                          {/* IT Services */}
                          <a
                            href="/services/it-services-for-call-center"
                            className={`block py-2 text-black/60 hover:text-[#750000] ${
                              isActive("/services/it-services-for-call-center")
                                ? "text-[#750000] font-bold"
                                : ""
                            }`}
                          >
                            IT Services
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <a
                      href="/contact"
                      className={`block py-2 text-black/80 hover:text-[#750000] transition-colors ${
                        isActive("/contact") ? "text-[#750000] font-bold" : ""
                      }`}
                    >
                      Contact
                    </a>

                    {/* Schedule a call button */}
                    <button
                      onClick={() => router.push("/contact")}
                      className="mt-4 bg-[#750000] text-white px-4 py-3 rounded-lg font-medium w-full text-center tracking-tight hover:bg-[#600000] transition-colors"
                    >
                      Schedule a call
                    </button>
                  </nav>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-black/60 hover:text-[#750000]"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
