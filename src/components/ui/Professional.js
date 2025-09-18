import React from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

function Professional() {
  const resume = [
    {
      id: 1,
      employer: "Zuri Health Kenya",
      duration_worked: "July 2024 - Present",
      job_title: "V.A.S Engineer",
      description: "Developing and maintaining value-added services for healthcare solutions.",
    },
    {
      id: 2,
      employer: "Al Huda TV Kenya",
      duration_worked: "July 2020 - Nov 2023",
      job_title: "Studio Technical Operator",
      description: "Managed studio operations and technical broadcasting equipment.",
    },
    {
      id: 3,
      employer: "Switch TV Kenya",
      duration_worked: "Dec 2019 - Feb 2020",
      job_title: "Studio Technical Operator",
      description: "Operated broadcasting equipment and maintained studio systems.",
    },
    {
      id: 4,
      employer: "Africa 24 Media",
      duration_worked: "May 2018 - Aug 2019",
      job_title: "Audio-Visual Editor",
      description: "Created and edited multimedia content for various media productions.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
          <FaBriefcase className="text-white text-2xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 ml-4">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-6">
        {resume.map((job, index) => (
          <div
            key={job.id}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-md"></div>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <FaBuilding className="text-blue-600 mr-2 text-sm" />
                    {job.employer}
                  </h3>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">
                    {job.job_title}
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm lg:ml-4 mt-2 lg:mt-0">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  {job.duration_worked}
                </div>
              </div>
              {job.description && (
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professional;