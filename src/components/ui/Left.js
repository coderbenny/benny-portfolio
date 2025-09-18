import React from "react";
import About from "./About";
import Profile from "./Profile";

function Left() {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col justify-center items-center p-6 lg:p-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md mx-auto">
        <Profile />
        <About />
      </div>
    </div>
  );
}

export default Left;
