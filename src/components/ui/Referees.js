import React from "react";

function Referees() {
  const refs = [
    {
      id: 1,
      name: "Julius Mwangi",
      contact: "Juliusmwangi@moringaschool.com",
      title: "Technical Mentor/ Trainer",
      company: "Moringa School",
    },
    {
      id: 2,
      name: "Mohammed Jeneby",
      contact: "Mohammed@thinktank.co.ke",
      title: "Chief Excecutive Officer",
      company: "Al Huda TV Kenya",
    },
    {
      id: 3,
      name: "Steve Okello",
      title: "Head of Studio Technical Operations",
      company: "Switch TV Kenya",
    },
    {
      id: 1,
      name: "Jackline Obiero",
      title: "Head of Assignment Desk/Internship Program",
      company: "Africa 24 Media",
    },
  ];

  return (
    <div className="mb-5 p-1">
      <h2 className="font-bold text-2xl mb-4 text-center">Referees</h2>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-1">
        {refs.map((ref, index) => (
          <div className="h-[100px] w-full mb-2 flex">
            <p className="font-bold mr-1">{index + 1}.</p>
            <div className="flex flex-col">
              <h3 className="font-semibold">{ref.name}</h3>
              <p className="">{ref.title}</p>
              <p className="">{ref.contact}</p>
              <p className="">{ref.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referees;
