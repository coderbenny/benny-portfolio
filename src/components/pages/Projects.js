import React from "react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crypto Tracker Chrome Extension",
      image: "/xtension.png",
      live_link: "https://github.com/coderbenny/crypto-tracker-chrome-xtension",
      description:
        "Track real-time cryptocurrency prices, set alerts, and view historical data. This Chrome extension provides multi-currency support, email notifications, and an optimized UI for seamless tracking.",
      more_details: null,
    },
    {
      id: 2,
      title: "Playzone Ke",
      image: "/playzone.png",
      live_link: "https://playzoneke.vercel.app/",
      description:
        "Playzone is the ultimate gaming booking platform where you can purchase bundled or single game plays at unbeatable prices. Enjoy exclusive bonuses, discounts while booking your favorite activities like bowling, laser tag, and VR experiences. The website is built using Next.js, TailwindCSS and Redux",
      more_details: null,
    },
    {
      id: 3,
      title: "Gemify",
      image: "/hg-bg.png",
      live_link: "https://gemifyke.vercel.app/",
      description:
        "Gemify is a website where you can find hidden gems - cafes and beautiful staycation avenues. You can also create a listing in  the website if you create an account as an admin. The website has been created by NextJS, DaisyUI and TailwindCSS",
      more_details: null,
    },
    {
      id: 4,
      title: "Ticketpal",
      image: "/tnew.png",
      live_link: "https://ticketpal.vercel.app/",
      description:
        "TicketPal is an intuitive event management platform that streamlines the process of organizing and attending events. The website's frontend is built using Nextjs, Redux, the backend using flask and mysql for the database. The website backend is hosted on Google Cloud Platform and served by an Nginx server.",
      more_details: null,
    },
    {
      id: 5,
      title: "Media & Marketing Consultancy",
      image: "/fc.png",
      live_link: "https://fullcircleworldwide.vercel.app/",
      description:
        "A sleek, user-friendly site showcasing Full Circle Media's creative services in videography, photography, and digital marketing. Designed to highlight their portfolio and make client outreach easy and intuitive.",
      more_details: null,
    },
    {
      id: 6,
      title: "Shoes Marketplace",
      image: "/cover.png",
      live_link: "https://shoed.vercel.app/",
      description:
        "This is a shoes marketplace where a user can create an account and buy shoes. One can also register as a seller to sell shoes within the site, The website is built using NextJS, Styled with Tailwindcss and DaisyUI.",
      more_details: null,
    },
    {
      id: 7,
      title: "Church Website",
      image: "/resc.png",
      live_link: "https://rescuesouls.vercel.app/",
      description:
        "This is a church website built with NextJS, Styled with Tailwindcss and DaisyUI.",
      more_details: null,
    },
    {
      id: 8,
      title: "Talent Nation",
      image: "/tnation.png",
      live_link: "https://talentnation.vercel.app/",
      description:
        "TalentNation is a leading online platform connecting job seekers with top employers across various industries. Whether you're searching for the perfect job opportunity or looking to hire talented professionals, TalentNation simplifies the process.",
      more_details: null,
    },
    {
      id: 9,
      title: "Qeja",
      image: "/qeja.PNG",
      live_link: "https://qeja-frontend.vercel.app",
      description:
        "Qeja connects individuals seeking affordable housing and roommates, offering a platform to find shared living spaces. Additionally, it features a community space where users can post updates and interact with one another.",
      more_details: null,
    },
    {
      id: 10,
      title: "Django Store Api",
      image: "/django-store-api.png",
      live_link: "https://django-store-api.onrender.com/",
      description:
        "This is a simple fashion store API that allows one to do the following: get total sales, list of sales, clients, stock, and even create new instances of the same. The Api is powered by a django backend.",
      more_details: null,
    },
    {
      id: 11,
      title: "Maleek Visuals",
      image: "/maleek.PNG",
      description:
        "Maleek Visuals is the premier destination for professional videography services. Explore a portfolio showcasing past projects, book services for your events, and engage with our community through comments and feedback.",
      live_link: "https://maleek-frontend.vercel.app",
      more_details: null,
    },
    {
      id: 12,
      title: "Lorna's Cakes & Bakes",
      image: "/cakes.png",
      description:
        "Lorna;s cakes and bakes is a cake shop website where one can browse cakes that are available, one can also add an item to cart. The frontend is crafted with ReactJS and styled with Tailwindcss.",
      live_link: "https://lornascakesnbakes.vercel.app",
      more_details: null,
    },
    {
      id: 13,
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
