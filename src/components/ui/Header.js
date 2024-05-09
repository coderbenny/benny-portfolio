import React from "react";

function Header() {
  return (
    <div className="flex border-b-2 justify-between h-[50px] items-center p-2">
      <div className="flex text-white justify-between">
        <p className="mr-5 tracking-wider">Projects</p>
        <p className="mr-5 tracking-wider">Resume</p>
        <p className="mr-5 tracking-wider">Blog</p>
      </div>
      <button className="text-white tracking-wider">Contact Me</button>
    </div>
  );
}

export default Header;
