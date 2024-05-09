import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[700px] overflow-y-auto w-full border-gray-200 border-2">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default Projects;
