import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Qeja",
      image: "/qeja.PNG",
      live_link: "https://qeja-frontend.vercel.app",
      more_details: null,
    },
    {
      id: 2,
      title: "Maleek Visuals",
      image: "/maleek.PNG",
      live_link: "https://maleek-frontend.vercel.app",
      more_details: null,
    },
    {
      id: 3,
      title: "Lorna's Cakes & Bakes",
      live_link: "https://lornas-cakes.vercel.app",
      more_details: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[550px] overflow-y-auto w-full p-2">
      {projects.map((proj, index) => (
        <ProjectCard key={index} proj={proj} />
      ))}
    </div>
  );
}

export default Projects;
