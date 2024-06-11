import React from "react";
// import Header from "../ui/Header";
import ColorTabs from "../ui/ColorTabs";
import TechStack from "./TechStack";

function Right() {
  return (
    <div className="w-full md:w-3/4 h-full bg-white">
      <div className="flex flex-col items-center justify-center h-[200px] md:h-[150px] bg-black p-2">
        <h2 className="font-bold text-center text-2xl tracking-wide uppercase text-amber-500">
          Tech Stack
        </h2>
        <TechStack />
      </div>
      <div className="bg-gray-300">
        <ColorTabs />
      </div>
    </div>
  );
}

export default Right;
