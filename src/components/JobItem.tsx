"use client";

interface JobItemProps {
  title: string;
  location: string;
  jobType: string;
  description: string;
}

export default function JobItem({
  title,
  location,
  jobType,
  description,
}: JobItemProps) {
  return (
    <div className="p-6 border border-gray-300 rounded-2xl mb-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg text-[#750000]">
        {location} <span className="mx-2">|</span>{" "}
        <span className="text-green-500">{jobType}</span>
      </p>
      <p className="text-gray-700 mb-6">{description}</p>
      <a
        href="mailto:careers@primepathsolutions.com?subject=Job Application for {title}"
        className="px-6 py-2 border border-[#750000] text-[#750000] rounded hover:bg-[#750000] hover:text-white transition "
      >
        Apply Now
      </a>
    </div>
  );
}
