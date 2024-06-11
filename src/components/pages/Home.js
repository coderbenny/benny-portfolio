import React from "react";
import Left from "../ui/Left";
import Right from "../ui/Right";

function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Left />
      <Right />
    </div>
  );
}

export default Home;
