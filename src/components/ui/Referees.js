import React from "react";
import { FaRegAddressBook, FaEnvelope, FaBuilding, FaUser, FaBriefcase } from "react-icons/fa";

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
      contact: "Available upon request",
    },
    {
      id: 4,
      name: "Jackline Obiero",
      title: "Head of Assignment Desk/Internship Program",
      company: "Africa 24 Media",
      contact: "Available upon request",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg">
          <FaRegAddressBook className="text-white text-2xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 ml-4">
          Professional References
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {refs.map((ref) => (
          <div
            key={ref.id}
            className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-md flex-shrink-0">
                <FaUser className="text-white text-lg" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                  {ref.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaBriefcase className="text-purple-500 mr-2 flex-shrink-0" />
                    <span className="font-medium truncate">{ref.title}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <FaBuilding className="text-purple-500 mr-2 flex-shrink-0" />
                    <span className="truncate">{ref.company}</span>
                  </div>
                  
                  {ref.contact && (
                    <div className="flex items-start text-sm text-gray-600">
                      <FaEnvelope className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="break-words">{ref.contact}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referees;