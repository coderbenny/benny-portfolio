import React from "react";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        alt="profile"
        src="/linkedin_profile.jpeg"
        className="mt-16 rounded-full w-60 h-60 mb-4"
      />
      <div className="flex flex-col text-center mb-5">
        <p className="text-3xl tracking-wide font-bold text-amber-500">
          Benny Hinn
        </p>
        <p className="text-xl text-white mb-2">Full Stack Software Engineer</p>

        <a
          href="https://www.linkedin.com/in/benny-mathew"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center underline text-center text-white items-center mx-auto"
        >
          <img src="/linkedin.svg" alt="linkedin" className="h-7 w-7" />
          My LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Profile;
