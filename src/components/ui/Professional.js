import React from "react";

function Professional() {
  const resume = [
    {
      id: 1,
      employer: "Zuri Health Kenya",
      duration_worked: "July 2024 - To Date",
      job_title: "V.A.S Engineer",
      job_status: "Internship",
    },
    {
      id: 2,
      employer: "Al Huda TV Kenya",
      duration_worked: "July 2020 - Nov 2023",
      job_title: "Studio Technical Operator",
      job_status: "Full Time",
    },
    {
      id: 3,
      employer: "Switch TV Kenya",
      duration_worked: "Dec 2019 - Feb 2020",
      job_title: "Studio Technical Operator",
      job_status: "Internship",
    },
    {
      id: 4,
      employer: "Africa 24 Media",
      duration_worked: "May 2018 - Aug 2019",
      job_title: "Audio-Visual Editor",
      job_status: "Internship",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-xl font-semibold mb-2">
        Professional History
      </h1>
      {resume.map((res, index) => (
        <div className="shadow-md rounded-md h-[100px] border-2 items-center border-gray-200 bg-white mb-3 p-3 w-full hover:shadow-lg">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">{res.employer}</h3>
            <p className="">{res.duration_worked}</p>
          </div>
          <div className="flex justify-between">
            <h5 className="mb-2">
              <b>Job Title:</b> {res.job_title}
            </h5>
            <h5 className="mb-2">
              <b>Job Status:</b> {res.job_status}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Professional;
