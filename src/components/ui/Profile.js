import React from "react";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-16 rounded-full w-60 h-60 bg-gray-300 mb-4"></div>
      <div className="flex flex-col text-center mb-5">
        <p className="text-3xl tracking-wide text-white">Benny Hinn</p>
        <p className="text-xl text-white">Full Stack Software Engineer</p>
      </div>
    </div>
  );
}

export default Profile;
