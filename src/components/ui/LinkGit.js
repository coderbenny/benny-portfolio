import React from "react";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function LinkGit() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/benny-mathew",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      href: "https://www.github.com/coderbenny",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:bg-gray-700",
      bgColor: "bg-gray-600"
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center gap-3 px-6 py-3 ${social.bgColor} ${social.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-1`}
        >
          <social.icon className="text-xl" />
          <span className="hidden sm:inline">{social.label}</span>
          <FaExternalLinkAlt className="text-xs opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  );
}