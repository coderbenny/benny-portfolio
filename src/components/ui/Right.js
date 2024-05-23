import React from "react";
// import Header from "../ui/Header";
import ColorTabs from "../ui/ColorTabs";

function Right() {
  return (
    <div className="w-3/4 h-full bg-white">
      <div className="flex flex-col items-center justify-center h-[150px] bg-black p-2">
        <h2 className="font-bold text-center text-2xl tracking-wide uppercase text-amber-500">
          Tech Stack
        </h2>
        <div className="flex justify-between mt-5">
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            ReactJs
          </p>
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            Javascript
          </p>
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            Tailwindcss
          </p>
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            Python
          </p>
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            Flask
          </p>
          <p className="mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
            SQLAlchemy
          </p>
        </div>
      </div>
      <div className="bg-gray-300">
        <ColorTabs />
      </div>
    </div>
  );
}

export default Right;
