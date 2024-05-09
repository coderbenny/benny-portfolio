import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = ["Maleek Visuals", "Qeja", "Inizio", "Lorna's Cakes"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[550px] overflow-y-auto w-full p-2">
      {projects.map((proj, index) => (
        <ProjectCard key={index} proj={proj} />
      ))}
    </div>
  );
}

export default Projects;
