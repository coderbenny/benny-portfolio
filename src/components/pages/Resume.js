import React from "react";
import EduBg from "../ui/EduBg";
import Professional from "../ui/Professional";
import Referees from "../ui/Referees";

function Resume() {
  return (
    <div className="max-h-[550px] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[550px] overflow-y-auto w-full p-2">
        <Professional />
        <EduBg />
      </div>

      <Referees />
    </div>
  );
}

export default Resume;
