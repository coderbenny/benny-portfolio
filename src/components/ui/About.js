import React from "react";
import { FaMapMarkerAlt, FaUser, FaCode, FaHeart } from "react-icons/fa";

function About() {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Section Header */}
      {/* <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-3">
          <FaUser className="text-amber-500 text-xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-amber-500 uppercase tracking-wider">
            About Me
          </h3>
        </div>
      </div> */}

      {/* About Card */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 mb-6 backdrop-blur-sm">
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-center">
            I am a passionate software engineer who is always fueled by the
            thrill of problem solving and the satisfaction of bringing ideas to
            life through code.
          </p>

          {/* Skills highlight */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            <FaCode className="text-amber-500" />
            <span className="text-gray-400 text-sm">
              Passionate • Creative • Solution-Oriented
            </span>
            <FaHeart className="text-red-500" />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center justify-center space-x-2 text-gray-300">
        <FaMapMarkerAlt className="text-amber-500 text-lg" />
        <span className="font-medium">Nairobi, Kenya</span>
      </div>
    </div>
  );
}

export default About;
