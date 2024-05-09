import React from "react";

function Profile() {
  return (
    <div className="profile-photo items-end flex-1 flex-col justify-center p-3 mx-auto">
      <div className="rounded-full w-60 h-60 bg-gray-300 mb-4"></div>
      <div className="flex flex-col text-center">
        <p className="">Benny Hinn</p>
        <p className="">Full Stack Software Engineer</p>
      </div>
    </div>
  );
}

export default Profile;
