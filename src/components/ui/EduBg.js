import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaCertificate } from "react-icons/fa";

function EduBg() {
  const education = [
    {
      id: 1,
      institution: "Moringa School",
      duration: "Sept 2023 - June 2024",
      course_title: "Full Stack Software Engineering",
      level: "Certificate",
      description: "Comprehensive training in modern web development technologies.",
    },
    {
      id: 2,
      institution: "Kenya Institute of Mass Communication",
      duration: "Sept 2017 - Aug 2020",
      course_title: "Diploma in Media Technology",
      level: "Diploma",
      description: "Specialized in broadcast media technology and production.",
    },
    {
      id: 3,
      institution: "St. Mary's School, Yala",
      duration: "Feb 2013 - Dec 2016",
      course_title: "Kenya Certificate of Secondary Education",
      level: "KCSE",
      description: "Secondary education with focus on sciences and mathematics.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
          <FaGraduationCap className="text-white text-2xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 ml-4">
          Education Background
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-md"></div>
            
            <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <FaUniversity className="text-emerald-600 mr-2 text-sm" />
                    {edu.institution}
                  </h3>
                  <div className="flex items-center mb-2">
                    <FaCertificate className="text-teal-600 mr-2 text-sm" />
                    <span className="text-lg font-semibold text-teal-600">
                      {edu.course_title}
                    </span>
                  </div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                    {edu.level}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm lg:ml-4 mt-2 lg:mt-0">
                  <FaCalendarAlt className="mr-2 text-emerald-500" />
                  {edu.duration}
                </div>
              </div>
              {edu.description && (
                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EduBg;