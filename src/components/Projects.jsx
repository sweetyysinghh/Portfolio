import React, { useState } from "react";
import PORTFOLIO1 from "../assets/PORTFOLIO1.png";
import PORTFOLIO2 from "../assets/PORTFOLIO2.png";
import PORTFOLIO3 from "../assets/PORTFOLIO3.png";

const projects = [
  {
    id: 1,
    name: "AR-TryOn",
    technologies: "TypeScript, JavaScript, Tailwind CSS, Next.js, Express.js",
    description:
      "AR-TryOn is an augmented reality-based project that allows users to try on clothes virtually using advanced technologies like TypeScript and Next.js.",
    image: PORTFOLIO3,
    github: "https://github.com/sweetyysinghh/AR-TryOn",
  },
  {
    id: 2,
    name: "Personalized Fashion Chronicle",
    technologies: "React and Material UI",
    description:
      "A personalized fashion platform where users can track and manage their wardrobe items using React and Material UI for a seamless user experience.",
    image: PORTFOLIO2,
    github: "https://github.com/sweetyysinghh/Wardrobe",
  },
  {
    id: 3,
    name: "Smart Shop",
    technologies: "Machine Learning, Flask, Arduino",
    description:
      "Smart Shop is an efficient shop management system powered by machine learning algorithms, Flask, and Arduino to automate various shopping processes.",
    image: PORTFOLIO1,
    github: "https://github.com/sweetyysinghh/Efficient-Shop-Management-System",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDescription = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              {activeProject === project.id && (
                <p className="text-gray-300 mb-4">{project.description}</p>
              )}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleDescription(project.id)}
                  className="text-blue-400 underline"
                >
                  {activeProject === project.id ? "Show Less" : "Know More"}
                </button>
                <a
                  href={project.github}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
