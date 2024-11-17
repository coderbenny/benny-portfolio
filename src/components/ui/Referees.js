import React from "react";
import { FaRegAddressBook } from "react-icons/fa";

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
      title: "Chief Executive Officer",
      company: "Al Huda TV Kenya",
    },
    {
      id: 3,
      name: "Steve Okello",
      title: "Head of Studio Technical Operations",
      company: "Switch TV Kenya",
    },
    {
      id: 4,
      name: "Jackline Obiero",
      title: "Head of Assignment Desk/Internship Program",
      company: "Africa 24 Media",
    },
  ];

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-4">
        <FaRegAddressBook className="text-blue-500 mr-2" />
        Referees
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {refs.map((ref) => (
          <div
            key={ref.id}
            className="p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-700">
                {ref.name}
              </h3>
              <p className="text-sm text-gray-500">{ref.title}</p>
              {ref.contact && (
                <p className="text-sm text-gray-500 mt-1">
                  <b>Email:</b> {ref.contact}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                <b>Company:</b> {ref.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referees;
