"use client";
import { ChevronRight, Award, Users, Globe, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 md:pt-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-[#750000]">Prime Path Solutions</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Delivering exceptional BPO services and innovative solutions since
              2019
            </p>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#750000] opacity-10 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
                Our <span className="text-[#750000]">Story</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Prime Path Solutions is a leading provider of customer support
                and BPO services based in Colombo, Sri Lanka. We are dedicated
                to delivering high-quality, tailored solutions to meet the needs
                of businesses worldwide. Our team of skilled professionals is
                committed to enhancing the customer experience and driving
                operational efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience in the industry, Prime Path Solutions
                has built a reputation for providing exceptional service and
                support. Whether you need inbound call center services,
                technical support, or any other BPO solutions, we ensure that
                your customers receive the best care and attention.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#750000] opacity-5 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
              <img
                src="/img/company/img1.jpg"
                alt="Prime Path Solutions Team"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#750000] opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#750000] text-center transform transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#750000] bg-opacity-10 mb-4">
              <Users className="h-6 w-6 text-[#750000]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Skilled Professionals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#750000] text-center transform transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#750000] bg-opacity-10 mb-4">
              <Globe className="h-6 w-6 text-[#750000]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">20+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#750000] text-center transform transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#750000] bg-opacity-10 mb-4">
              <Award className="h-6 w-6 text-[#750000]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-gray-600">Industry Awards</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#750000] text-center transform transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#750000] bg-opacity-10 mb-4">
              <Zap className="h-6 w-6 text-[#750000]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="my-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-[#750000]">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming a global leader in BPO
              services, our journey has been defined by innovation, growth, and
              excellence.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#750000] to-transparent transform md:translate-x-px"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex md:flex-col items-center md:items-end order-1 md:w-1/2 md:pr-8 pb-5 md:pb-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow border-4 border-[#750000] z-10 md:mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#750000]"></div>
                  </div>
                  <div className="ml-4 md:ml-0 md:text-right">
                    <time className="font-medium text-lg text-[#750000] block">
                      April 2019
                    </time>
                    <h3 className="font-bold text-xl">Establishment</h3>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 md:w-1/2 md:ml-8 mt-4 md:mt-0 order-2 transform transition-transform hover:shadow-xl">
                  <p className="text-gray-700">
                    Prime Path Solutions was established to revolutionize the
                    BPO industry through exceptional service delivery and
                    cutting-edge innovation.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex md:flex-col items-center md:items-start order-1 md:order-2 md:w-1/2 md:pl-8 pb-5 md:pb-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow border-4 border-[#750000] z-10 md:mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#750000]"></div>
                  </div>
                  <div className="ml-4 md:ml-0">
                    <time className="font-medium text-lg text-[#750000] block">
                      June 2022
                    </time>
                    <h3 className="font-bold text-xl">Global Expansion</h3>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 md:w-1/2 md:mr-8 mt-4 md:mt-0 order-2 md:order-1 transform transition-transform hover:shadow-xl">
                  <p className="text-gray-700">
                    Prime Path Solutions expanded its operations globally,
                    opening offices in Colombo and other strategic locations to
                    better serve our international clients.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex md:flex-col items-center md:items-end order-1 md:w-1/2 md:pr-8 pb-5 md:pb-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow border-4 border-[#750000] z-10 md:mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#750000]"></div>
                  </div>
                  <div className="ml-4 md:ml-0 md:text-right">
                    <time className="font-medium text-lg text-[#750000] block">
                      April 2024
                    </time>
                    <h3 className="font-bold text-xl">Innovation Milestone</h3>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 md:w-1/2 md:ml-8 mt-4 md:mt-0 order-2 transform transition-transform hover:shadow-xl">
                  <p className="text-gray-700">
                    The company introduced groundbreaking AI-driven solutions
                    that transformed customer engagement and operational
                    efficiency in the BPO sector, setting new industry
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="my-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-[#750000]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Prime Path
              Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every interaction, process, and
                solution we deliver.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace innovation to continuously improve and deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct business with the highest standards of ethics and
                transparency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Customer Focus
              </h3>
              <p className="text-gray-600">
                We put our clients and their customers at the center of
                everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Teamwork
              </h3>
              <p className="text-gray-600">
                We believe in the power of collaboration and the strength of
                diverse perspectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#750000] transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-[#750000] mr-2" />
                Continuous Growth
              </h3>
              <p className="text-gray-600">
                We invest in our people and processes to ensure continuous
                improvement and growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#750000] to-[#900000] rounded-2xl p-8 md:p-12 my-20 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Partner with Prime Path Solutions and experience the difference our
            innovative BPO solutions can make for your business.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-[#750000] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
