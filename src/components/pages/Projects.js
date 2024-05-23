import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Qeja",
      image: "/qeja.PNG",
      live_link: "https://qeja-frontend.vercel.app",
      description:
        "Qeja connects individuals seeking affordable housing and roommates, offering a platform to find shared living spaces. Additionally, it features a community space where users can post updates and interact with one another.",
      more_details: null,
    },
    {
      id: 2,
      title: "Maleek Visuals",
      image: "/maleek.PNG",
      description:
        "Maleek Visuals is the premier destination for professional videography services. Explore a portfolio showcasing past projects, book services for your events, and engage with our community through comments and feedback.",
      live_link: "https://maleek-frontend.vercel.app",
      more_details: null,
    },
    {
      id: 3,
      title: "Lorna's Cakes & Bakes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non purus eu nulla laoreet dapibus at nec orci.",
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
