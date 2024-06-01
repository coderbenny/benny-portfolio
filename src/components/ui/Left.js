import React from "react";
import About from "./About";
import Profile from "./Profile";

function Left() {
  return (
    <div className="profile-photo items-end flex-1 flex-col bg-transparent justify-center p-3 mx-auto">
      <Profile />
      <About />
    </div>
  );
}

export default Left;
