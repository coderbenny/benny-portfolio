import React from "react";

function EduBg() {
  const bg = [
    {
      id: 1,
      institution: "Moringa School",
      duration: "Sept 2023 - June 2024",
      course_title: "Full Stack Software Engineering",
    },
    {
      id: 2,
      institution: "Kenya Institute of Mass Communication",
      duration: "Sept 2017 - Aug 2020",
      course_title: "Diploma in Media Technology",
    },
    {
      id: 3,
      institution: "St. Mary's School, Yala",
      duration: "Feb 2013 - Dec 2016",
      course_title: "Kenya Certificate of Secondary Education",
    },
  ];

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Education Background
      </h1>
      {bg.map((res) => (
        <div
          key={res.id}
          className="shadow-md rounded-lg border border-gray-200 bg-white mb-4 p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-700">
              {res.institution}
            </h2>
            <p className="text-sm text-gray-500">{res.duration}</p>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Certification:</span>{" "}
            {res.course_title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EduBg;
