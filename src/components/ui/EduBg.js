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
    {
      id: 4,
      institution: "Kideswa Primary School",
      duration: "Jan 2002 - November 2012",
      course_title: "Kenya Certificate of Primary Education",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-xl font-semibold mb-2">
        Education Background
      </h1>
      {bg.map((res, index) => (
        <div
          key={index}
          className="shadow-md rounded-md h-[100px] border-2 items-center border-gray-200 mb-3 p-3 w-full hover:shadow-lg bg-white"
        >
          <div className="flex justify-between mb-2">
            <h2 className="font-semibold">{res.institution}</h2>
            <p className="">{res.duration}</p>
          </div>
          <p className="">
            <b>Certification: </b>
            {res.course_title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EduBg;
