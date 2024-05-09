import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = ["Proj 1", "Proj 2", "Proj 3", "Proj 4", "Proj 5", "Proj 6"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[550px] overflow-y-auto w-full p-2">
      {projects.map((proj, index) => (
        <ProjectCard key={index} proj={proj} />
      ))}
    </div>
  );
}

export default Projects;
