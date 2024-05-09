import React from "react";
import About from "./About";
import Profile from "./Profile";

function Left() {
  return (
    <div className="profile-photo items-end flex-1 flex-col bg-gray-200 justify-center p-3 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-16 rounded-full w-60 h-60 bg-gray-300 mb-4"></div>
        <div className="flex flex-col text-center mb-5">
          <p className="text-3xl">Benny Hinn</p>
          <p className="text-xl">Full Stack Software Engineer</p>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Left;
