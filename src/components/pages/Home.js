import React from "react";
import Left from "../ui/Left";
import Right from "../ui/Right";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col lg:flex-row">
      <div className="lg:w-2/5 xl:w-1/3">
        <Left />
      </div>
      <div className="lg:w-3/5 xl:w-2/3">
        <Right />
      </div>
    </div>
  );
}

export default Home;
