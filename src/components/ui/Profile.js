import React from "react";
import LinkGit from "./LinkGit";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-8">
      {/* Profile Image with animated border */}
      <div className="relative mb-6 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <img
          alt="profile"
          src="/prof.jpg"
          className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
        />
        {/* Status indicator */}
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
      </div>

      {/* Name and Title */}
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide">
          Benny Hinn
        </h1>
        <div className="space-y-2">
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Full Stack Software Engineer
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
            <p className="text-sm text-gray-400">Available for opportunities</p>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <LinkGit />
    </div>
  );
}

export default Profile;
