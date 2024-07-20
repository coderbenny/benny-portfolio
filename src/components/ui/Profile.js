import React from "react";
import LinkGit from "./LinkGit";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        alt="profile"
        src="/prof.jpg"
        className="mt-16 rounded-full w-60 h-60 mb-4 shadow-md shadow-amber-500 hover:shadow-white"
      />
      <div className="flex flex-col text-center mb-5">
        <p className="text-3xl tracking-wide font-bold text-amber-500">
          Benny Hinn
        </p>
        <p className="text-xl text-white mb-2">Full Stack Software Engineer</p>

        <LinkGit />
      </div>
    </div>
  );
}

export default Profile;
