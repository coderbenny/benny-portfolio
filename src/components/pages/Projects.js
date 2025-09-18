import React, { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaCode,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Qeja2.0 - House Hunting Platform",
      image: "/qeja2.0.png",
      live_link: "https://qejav2.vercel.app",
      description:
        "Professional house hunting platform that connects clients with verified agents. Features automated agent matching, secure payments, and guaranteed results within 48 hours.",
      category: "Full Stack",
      technologies: [
        "Next.js",
        "React",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
      ],
      featured: true,
      year: "2025",
    },
    {
      id: 2,
      title: "RepairHub",
      image: "/repairhub.png",
      live_link: "https://repairhub.co.ke",
      description:
        "Professional repair services platform offering expert technicians at your fingertips. Responsive design built with modern web technologies.",
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS"],
      featured: false,
      year: "2025",
    },
    {
      id: 3,
      title: "Gemify Africa",
      image: "/gemafrica.png",
      live_link: "https://gemify.africa/",
      description:
        "Discover hidden gems - cafes and beautiful staycation venues. Create listings and explore unique destinations across Africa.",
      category: "Full Stack",
      technologies: ["Next.js", "DaisyUI", "Tailwind CSS", "Flask", "GCP"],
      featured: true,
      year: "2025",
    },
    {
      id: 4,
      title: "Arbitredge",
      image: "/arbitredge.png",
      live_link: "https://crypto-mu-sandy.vercel.app/",
      description:
        "Sleek crypto trading platform with real-time price tracking, market analysis, and interactive UI powered by modern animations.",
      category: "Frontend",
      technologies: ["Next.js", "Redux Toolkit", "AOS", "Tsparticles"],
      featured: false,
      year: "2025",
    },
    {
      id: 5,
      title: "Ogtransfer",
      image: "/og.png",
      live_link: "https://ogtransfer.vercel.app",
      description:
        "Secure file transfer platform enabling users to send large files up to 200GB with enterprise-grade security and encryption.",
      category: "Full Stack",
      technologies: ["Next.js", "File Upload", "Security"],
      featured: true,
      year: "2025",
    },
    {
      id: 6,
      title: "Playzone Ke",
      image: "/playzone.png",
      live_link: "https://playzoneke.vercel.app/",
      description:
        "Ultimate gaming booking platform for purchasing bundled game plays with exclusive bonuses and discounts for various activities.",
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "Redux"],
      featured: false,
      year: "2025",
    },
    {
      id: 7,
      title: "Crypto Tracker Extension",
      image: "/xtension.png",
      live_link: "https://github.com/coderbenny/crypto-tracker-chrome-xtension",
      description:
        "Chrome extension for real-time cryptocurrency tracking with alerts, historical data, and multi-currency support.",
      category: "Extension",
      technologies: ["Chrome API", "JavaScript", "Real-time Data"],
      featured: false,
      year: "2024",
    },
    {
      id: 8,
      title: "Church Website",
      image: "/ch.png",
      live_link: "https://rescuesouls.org",
      description:
        "Modern church website with sermons, events, and community features built with responsive design principles.",
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "DaisyUI"],
      featured: false,
      year: "2024",
    },
    {
      id: 9,
      title: "Talent Nation",
      image: "/tnation.png",
      live_link: "https://talentnation.vercel.app/",
      description:
        "Leading job platform connecting seekers with top employers across industries, simplifying the hiring process.",
      category: "Full Stack",
      technologies: ["Next.js", "Database", "Authentication"],
      featured: false,
      year: "2024",
    },
    {
      id: 10,
      title: "Qeja",
      image: "/qeja.PNG",
      live_link: "https://qeja-frontend.vercel.app",
      description:
        "Qeja connects individuals seeking affordable housing and roommates, offering a platform to find shared living spaces. Additionally, it features a community space where users can post updates and interact with one another.",
      category: "Full Stack",
      technologies: ["React", "redux", "Tailwind", "Material UI"],
      year: "2024",
    },
    {
      id: 11,
      title: "Django Store API",
      image: "/django-store-api.png",
      live_link: "https://django-store-api.onrender.com/",
      description:
        "Fashion store API with comprehensive sales tracking, inventory management, and client data handling capabilities.",
      category: "Backend",
      technologies: ["Django", "REST API", "Database"],
      featured: false,
      year: "2024",
    },
    {
      id: 12,
      title: "Ticketpal",
      image: "/tnew.png",
      live_link: "https://ticketpal.vercel.app/",
      description:
        "Intuitive event management platform streamlining event organization and attendance with full-stack architecture.",
      category: "Full Stack",
      technologies: ["React", "Redux", "Tailwind"],
      featured: true,
      year: "2024",
    },
    {
      id: 13,
      title: "Media & Marketing Consultancy",
      image: "/fc.png",
      live_link: "https://fullcircleworldwide.vercel.app/",
      description:
        "Sleek portfolio site showcasing creative services in videography, photography, and digital marketing with intuitive client outreach.",
      category: "Frontend",
      technologies: ["Next.js", "Portfolio Design"],
      featured: false,
      year: "2024",
    },
    {
      id: 14,
      title: "Shoes Marketplace",
      image: "/cover.png",
      live_link: "https://shoed.vercel.app/",
      description:
        "Comprehensive shoes marketplace with user accounts, purchasing system, and seller registration capabilities.",
      category: "Full Stack",
      technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "E-commerce"],
      featured: false,
      year: "2024",
    },
    {
      id: 15,
      title: "Maleek Visuals",
      image: "/maleek.PNG",
      description:
        "Professional videography services portfolio with project showcases, booking system, and community engagement features.",
      live_link: "https://maleek-frontend.vercel.app",
      category: "Frontend",
      technologies: ["React", "Portfolio", "Booking System"],
      featured: false,
      year: "2023",
    },
    {
      id: 16,
      title: "Lorna's Cakes & Bakes",
      image: "/cakes.png",
      description:
        "Delightful cake shop website with product browsing, shopping cart functionality, and responsive design.",
      live_link: "https://lornascakesnbakes.vercel.app",
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "E-commerce"],
      featured: false,
      year: "2023",
    },
    {
      id: 17,
      title: "Hotel Inizio",
      image: "/inizio.PNG",
      description:
        "Elegant hotel booking platform with room reservations, amenities showcase, and seamless user experience.",
      live_link: "https://inizio-app.vercel.app/",
      category: "Frontend",
      technologies: ["React", "Hospitality", "Booking"],
      featured: false,
      year: "2023",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Extension"];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = projects;

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (project) => project.category === selectedCategory
        );
      }

      if (searchTerm) {
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
      }

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const ProjectCard = ({ proj, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
          proj.featured ? "ring-2 ring-blue-500 ring-opacity-20" : ""
        }`}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {proj.featured && (
          <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

        <div className="relative h-48 overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={proj.image}
            alt={proj.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-110" : "scale-100"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <a
                href={proj.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
              {proj.live_link.includes("github.com") && (
                <a
                  href={proj.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/90 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-sm" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                {proj.title}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    proj.category === "Full Stack"
                      ? "bg-green-100 text-green-800"
                      : proj.category === "Frontend"
                      ? "bg-blue-100 text-blue-800"
                      : proj.category === "Backend"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {proj.category}
                </span>
                {proj.year && (
                  <span className="text-xs text-gray-500">{proj.year}</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {proj.description}
          </p>

          {proj.technologies && (
            <div className="flex flex-wrap gap-1 mb-4">
              {proj.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {proj.technologies.length > 3 && (
                <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs">
                  +{proj.technologies.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <a
              href={proj.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <FaEye className="text-xs" />
              View Project
            </a>
            {proj.live_link.includes("github.com") && (
              <a
                href={proj.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <FaCode className="text-xs" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              My Projects
            </h2>
            <p className="text-gray-600">
              Showcasing {projects.length} projects across different
              technologies
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full sm:w-64"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <FaFilter className="text-gray-400 mt-2 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
              {category === "All" && (
                <span className="ml-1 text-xs opacity-75">
                  ({projects.length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl animate-pulse">
                <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj, index) => (
                <ProjectCard key={proj.id} proj={proj} index={index} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FaSearch className="text-gray-400 text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 text-center max-w-md">
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {!isLoading && filteredProjects.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
          {selectedCategory !== "All" && (
            <span>
              {" "}
              in <strong>{selectedCategory}</strong>
            </span>
          )}
          {searchTerm && (
            <span>
              {" "}
              matching "<strong>{searchTerm}</strong>"
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
