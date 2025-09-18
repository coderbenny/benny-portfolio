import React from "react";
import ColorTabs from "../ui/ColorTabs";
import TechStack from "./TechStack";

function Right() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Tech Stack Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 px-6 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 uppercase tracking-wide mb-4">
              Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>
          <TechStack />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex-1 bg-gray-50">
        <ColorTabs />
      </div>
    </div>
  );
}

export default Right;
