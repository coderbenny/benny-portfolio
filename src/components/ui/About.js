import React from "react";

function About() {
  return (
    <div className="bottomleft flex-1 w-full">
      <h3 className="font-semibold text-xl tracking-wider text-center mt-5">
        About
      </h3>
      <div className="p-6 w-full">
        <div className="h-[250px] text-center w-full p-3 rounded-md shadow-md bg-white">
          <p className="">
            I am a passionate software engineer who crafts innovative solutions
            that merge functionality with elegance
          </p>
          <br />
          <p className="mb-7">
            Always fuelled by the thrill of problem solving and the satisfaction
            of bringinng ideas to life.
          </p>
          <p className="">Nairobi, Kenya.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
