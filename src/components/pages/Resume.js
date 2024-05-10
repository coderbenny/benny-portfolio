import React from "react";

function Resume() {
  const resume = [1, 2, 3, 4];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[550px] overflow-y-auto w-full p-2">
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-semibold">
            Professional History
          </h1>
          {resume.map((res, index) => (
            <div className="shadow-md rounded-md h-[100px] border-2 items-center border-gray-200 mb-3 p-3 w-full hover:shadow-lg">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Al Huda TV Kenya</h3>
                <p className="">Sept 2021 - Nov 2023</p>
              </div>
              <div className="flex justify-between">
                <h5 className="mb-2">
                  <b>Job Title:</b> Studio Technical Operator
                </h5>
                <button className="p-1 text-right bg-black text-white rounded-sm shadow-md">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-semibold">
            Education Background
          </h1>
          {resume.map((res, index) => (
            <div className="shadow-md rounded-md h-[100px] border-2 items-center border-gray-200 mb-3 p-3 w-full hover:shadow-lg">
              <div className="flex justify-between">
                <h2 className="font-semibold">Moringa School</h2>
                <p className="">Sept 2023 - June 2024</p>
              </div>
              <p className="">
                <b>Certification: </b>Software Engineering
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="font-bold text-2xl mb-4 text-center">Referees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {resume.map((r, index) => (
            <div className="h-[100px] w-full mb-2">
              <div className="flex flex-col">
                <h3 className="font-semibold">Referee Name</h3>
                <p className="">someone@email.com</p>
                <p className="">Company Name</p>
                <p className="">Company Address</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
