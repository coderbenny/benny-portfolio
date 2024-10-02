import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Talent Nation",
      image: "/tnation.png",
      live_link: "https://talentnation.vercel.com/",
      description:
        "TalentNation is a leading online platform connecting job seekers with top employers across various industries. Whether you're searching for the perfect job opportunity or looking to hire talented professionals, TalentNation simplifies the process.",
      more_details: null,
    },
    {
      id: 2,
      title: "Qeja",
      image: "/qeja.PNG",
      live_link: "https://qeja-frontend.vercel.app",
      description:
        "Qeja connects individuals seeking affordable housing and roommates, offering a platform to find shared living spaces. Additionally, it features a community space where users can post updates and interact with one another.",
      more_details: null,
    },
    {
      id: 3,
      title: "Django Store Api",
      image: "/django-store-api.png",
      live_link: "https://django-store-api.onrender.com/",
      description:
        "This is a simple fashion store API that allows one to do the following: get total sales, list of sales, clients, stock, and even create new instances of the same. The Api is powered by a django backend.",
      more_details: null,
    },
    {
      id: 4,
      title: "Maleek Visuals",
      image: "/maleek.PNG",
      description:
        "Maleek Visuals is the premier destination for professional videography services. Explore a portfolio showcasing past projects, book services for your events, and engage with our community through comments and feedback.",
      live_link: "https://maleek-frontend.vercel.app",
      more_details: null,
    },
    {
      id: 5,
      title: "Lorna's Cakes & Bakes",
      image: "/cakes.png",
      description:
        "Lorna;s cakes and bakes is a cake shop website where one can browse cakes that are available, one can also add an item to cart. The frontend is crafted with ReactJS and styled with Tailwindcss.",
      live_link: "https://lornascakesnbakes.vercel.app",
      more_details: null,
    },
    {
      id: 6,
      title: "Hotel Inizio",
      image: "/inizio.PNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non purus eu nulla laoreet dapibus at nec orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      live_link: "https://inizio-app.vercel.app/",
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
