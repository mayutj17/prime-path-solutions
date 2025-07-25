import Tag from "./Tag";

const WhyChooseUs = () => {
  return (
    <>
      <div className="mt-40">
        <div
          data-aos="flip-down"
          className="text-center max-w-screen-md mx-auto"
        >
          <div className="flex justify-center">
            <Tag>Why us</Tag>
          </div>
          <h1 className="text-3xl font-bold mb-4 font-bold text-black">
            Why Choose <span className="text-[#750000]">Us?</span>
          </h1>
          <p className="text-gray-500">
            Prime Path Solutions is a versatile and powerful cloud-based
            solution that brings together all the tools you need to efficiently
            manage and grow your business process outsourcing operations.
          </p>
        </div>
      </div>

      <div className="sm:flex items-center sm:space-x-8 mt-36">
        <div data-aos="fade-right" className="sm:w-1/2 relative">
          <div className="bg-[#F48C06] rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
          <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            Dedicated to growing your
            <span className="text-[#750000]"> Business</span>
          </h1>
          <p className="py-5 lg:pr-32">
            Prime Path Solutions is a versatile and powerful cloud-based
            solution that brings together all the tools you need to efficiently
            manage and grow your business process outsourcing operations.
          </p>
        </div>
        <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
          <div
            style={{ background: "#23bdee" }}
            className="animate-floating w-24 h-24 absolute rounded-lg z-0 top-12 left-3"
          ></div>
          <div
            style={{ background: "#f0b20a" }}
            className="w-5 h-5 rounded-full absolute z-0 right-52 -top-2 animate-ping"
          ></div>
          <img
            className="rounded-xl z-40 relative"
            src="img/service/service1.png"
            alt=""
          />

          <div
            style={{ background: "#87eccb" }}
            className="w-20 h-20 rounded-full absolute z-0 right-40 bottom-6 animate-pulse"
          ></div>
          <div className="bg-[#F48C06] w-40 h-40 animate-floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
        </div>
      </div>

      <div className="mt-40 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-down" className="md:w-7/12 relative mt-40 md:mt-0">
          <div
            style={{ background: "#33efa0" }}
            className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
          ></div>
          <div
            style={{ background: "#33d9ef" }}
            className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
          ></div>
          <img
            className="relative z-50 animate-floating"
            src="img/vcall.png"
            alt=""
          />
          <div
            style={{ background: "#5b61eb" }}
            className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
          ></div>
          <div
            style={{ background: "#f56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
          ></div>
        </div>
        <div
          data-aos="fade-down"
          className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
        >
          <h1 className="text-2xl font-semibold text-darken lg:pr-40">
            <span className="text-[#750000]"> Experienced </span> in handling
            international projects
          </h1>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="11.8182" height="11.8182" rx="2" fill="#2F327D" />
                <rect
                  y="14.1816"
                  width="11.8182"
                  height="11.8182"
                  rx="2"
                  fill="#2F327D"
                />
                <rect
                  x="14.7727"
                  width="11.8182"
                  height="11.8182"
                  rx="2"
                  fill="#2F327D"
                />
                <rect
                  x="14.7727"
                  y="14.1816"
                  width="11.8182"
                  height="11.8182"
                  rx="2"
                  fill="#F48C06"
                />
              </svg>
            </div>
            <p>
              Supervisors don’t get lost in the workflow and have a dedicated
              dashboard space to monitor performance and provide guidance
              effectively.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="6"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#2F327D"
                />
                <rect width="21.2245" height="21.2245" rx="2" fill="#F48C06" />
              </svg>
            </div>
            <p>
              Team leads and key speakers can be prioritized and brought to the
              forefront of team discussions.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
                  fill="#2F327D"
                />
              </svg>
            </div>
            <p>
              Supervisors can easily view all team members and performance
              metrics in real-time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
        <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
          <h1 className="text-darken font-semibold text-3xl lg:pr-56">
            <span className="text-[#750000]">Cost-effective</span> and
            <span className="text-[#750000]"> efficient </span> solutions
          </h1>
          <p className="text-gray-500 my-4 lg:pr-32">
            Prime Path Solutions is a versatile and powerful cloud-based
            solution that brings together all the tools you need to efficiently
            manage and grow your business process outsourcing operations.
          </p>
        </div>
        <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
          <div
            style={{ background: "#dcef3386" }}
            className="w-32 h-32 absolute z-0 left-18 -top-3 animate-pulse rounded-lg"
          ></div>

          <img
            data-aos="fade-right"
            style={{ animationDelay: "500ms" }}
            className="relative z-40 animate-floating"
            src="img/company/choosus3.svg"
            alt=""
          />

          <div
            style={{ background: "#f56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-12 bottom-1 animate-ping"
          ></div>
        </div>
      </div>

      <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-down" className="md:w-6/12">
          <img
            data-aos="fade-right"
            style={{ animationDelay: "500ms" }}
            className="relative z-40 animate-floating"
            src="img/company/chooseus4.svg"
            alt=""
          />
          {/* <div
            style={{ background: "#f56666" }}
            className="w-5 h-5 rounded-full absolute z-0 right-12 bottom-1 animate-ping"
          ></div> */}
        </div>
        <div
          data-aos="fade-left"
          className="md:w-6/12 md:transform md:-translate-y-20"
        >
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">
            <span className="text-[#750000]">Data</span> Confidentiality
            <span className="text-[#750000]"> Security</span> guaranteed
          </h1>
          <p className="text-gray-500 my-5 lg:pr-52">
            Prime Path Solutions is a versatile and powerful cloud-based
            solution that brings together all the tools you need to efficiently
            manage and grow your business process outsourcing operations.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
