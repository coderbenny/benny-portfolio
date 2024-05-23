import React from "react";
import RoomIcon from "@mui/icons-material/Room";

function About() {
  return (
    <div className="bottomleft flex-1 w-full">
      <h3 className="text-amber-500 uppercase font-semibold text-2xl tracking-wider text-center mt-5">
        About Me
      </h3>
      <div className="p-6 w-full">
        <div className="h-[180px] mb-5 text-center w-full border-2 p-3 rounded-md shadow-md bg-white">
          <p className="mb-4">
            I am a passionate software engineer who is always fuelled by the
            thrill of problem solving and the satisfaction of bringinng ideas to
            life.
          </p>
          <button type="button" className="p-1 bg-blue-600 w-full text-white">
            Download CV
          </button>
        </div>
        <p className="text-white text-center items-center trackinf-wider">
          <RoomIcon />
          Nairobi, Kenya.
        </p>
      </div>
    </div>
  );
}

export default About;
