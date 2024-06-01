import React from "react";

function ContactMe() {
  return (
    <div className="">
      {/* <h1 className="font-bold mb-3 text-xl trackind-wider">Contact Me</h1> */}
      <form className="flex flex-col">
        <p className="w-[400px] mb-3 text-gray-600">
          Feel free to reach out with a comment, job offer, or simply to say
          hello. Let's connect and perhaps we can arrange to meet for a cup of
          coffee ☕️😊.
        </p>
        <input
          type="text"
          className="mb-3 w-[400px] px-2"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="mb-3 w-[400px] px-2"
          placeholder="Enter your email"
        />
        <textarea
          placeholder="Enter your message"
          className="resize-none h-[100px] w-[400px] mb-3 px-2"
        ></textarea>
        <button
          type="button"
          className="w-[400px] bg-amber-500 p-1 text-white font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
