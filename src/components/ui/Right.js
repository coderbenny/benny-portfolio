import React from "react";
// import Header from "../ui/Header";
import ColorTabs from "../ui/ColorTabs";

function Right() {
  return (
    <div className="w-3/4 h-full bg-white">
      <div className="flex flex-col items-center justify-center h-[150px] bg-gray-200 p-2">
        <h2 className="font-bold text-center text-xl">Tech Stack</h2>
        <div className="flex justify-between mt-5">
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">ReactJs</p>
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">
            Javascript
          </p>
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">
            Tailwindcss
          </p>
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">Python</p>
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">Flask</p>
          <p className="mr-4 text-white rounded-md bg-slate-950 p-1">
            SQLAlchemy
          </p>
        </div>
      </div>
      <ColorTabs />
    </div>
  );
}

export default Right;
