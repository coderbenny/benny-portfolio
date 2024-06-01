import React from "react";
import RoomIcon from "@mui/icons-material/Room";

function About() {
  return (
    <div className="bottomleft flex-1 w-full">
      <h3 className="text-amber-500 uppercase font-semibold text-2xl tracking-wider text-center mt-5">
        About Me
      </h3>
      <div className="p-6 w-full">
        <div className="h-[200px] mb-5 text-center w-full border-2 p-3 text-white rounded-md shadow-md">
          <p className="mb-4">
            I am a passionate software engineer who is always fuelled by the
            thrill of problem solving and the satisfaction of bringinng ideas to
            life.
          </p>
          <button
            type="button"
            className="p-1  items-center justify-center hover:bg-slate-950 hover:border-blue-400 hover:text-white border-2 flex w-full border-blue-700 text-blue-400"
          >
            <img src="/linkedin.svg" alt="linkedin" className="h-5 w-5" />
            Follow Me
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
