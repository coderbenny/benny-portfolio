import React from "react";

function ContactMe() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="font-bold mb-4 text-2xl text-blue-500 tracking-wider text-center">
          Contact Me
        </h1>
        <form
          className="flex flex-col"
          action="https://formspree.io/f/mvgppedw"
          method="POST"
        >
          <p className="mb-4 text-gray-600 text-center">
            Feel free to reach out with a comment, job offer, or simply to say
            hello. Let's connect and perhaps we can arrange to meet for a cup of
            coffee ☕️😊.
          </p>
          <input
            type="text"
            name="name"
            className="mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your name"
            required
          />
          <input
            name="email"
            type="email"
            className="mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            className="resize-none h-32 px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-amber-500 py-2 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
