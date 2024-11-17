import React from "react";

function Professional() {
  const resume = [
    {
      id: 1,
      employer: "Zuri Health Kenya",
      duration_worked: "July 2024 - To Date",
      job_title: "V.A.S Engineer",
    },
    {
      id: 2,
      employer: "Al Huda TV Kenya",
      duration_worked: "July 2020 - Nov 2023",
      job_title: "Studio Technical Operator",
    },
    {
      id: 3,
      employer: "Switch TV Kenya",
      duration_worked: "Dec 2019 - Feb 2020",
      job_title: "Studio Technical Operator",
    },
    {
      id: 4,
      employer: "Africa 24 Media",
      duration_worked: "May 2018 - Aug 2019",
      job_title: "Audio-Visual Editor",
    },
  ];

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Professional History
      </h1>
      {resume.map((res) => (
        <div
          key={res.id}
          className="shadow-md rounded-lg border border-gray-200 bg-white mb-4 p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-700">
              {res.employer}
            </h3>
            <p className="text-sm text-gray-500">{res.duration_worked}</p>
          </div>
          <div className="flex flex-wrap justify-between">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Job Title:</span> {res.job_title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Professional;
