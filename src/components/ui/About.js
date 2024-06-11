import React from "react";
import RoomIcon from "@mui/icons-material/Room";

function About() {
  return (
    <div className="p-4 w-full">
      <div className="bottomleft flex-1 w-full">
        <h3 className="text-amber-500 font-bold uppercase text-2xl tracking-wider text-center mt-5">
          About Me
        </h3>
        <div className="h-[150px] mb-5 text-center w-full border-t-white p-3 shadow-amber-500 text-white rounded-md shadow-md">
          <p className="mb-4">
            I am a passionate software engineer who is always fuelled by the
            thrill of problem solving and the satisfaction of bringing ideas to
            life.
          </p>
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
