import type React from "react";

interface JobItemProps {
  title: string;
  location: string;
  jobType: string;
  description: string;
}

const JobItem: React.FC<JobItemProps> = ({
  title,
  location,
  jobType,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
        <span className="flex items-center mr-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-[#750000]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </span>
        <span className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-[#750000]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {jobType}
        </span>
      </div>
      <p className="mt-3 text-sm sm:text-base text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-[#750000] text-white rounded hover:bg-[#600000] transition-colors duration-300 text-sm">
        Apply Now
      </button>
    </div>
  );
};

export default JobItem;
