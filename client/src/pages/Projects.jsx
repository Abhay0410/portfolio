import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Recipe Book App",
      description: "A React app using components, props, useState, and recipe APIs. Fully responsive design.",
    },
    {
      title: "Weather App",
      description: "Shows current weather using OpenWeatherMap API. Built with React and Tailwind CSS.",
    },
    {
      title: "Portfolio Website",
      description: "Your own portfolio built using React SPA layout with smooth scrolling and modern UI.",
    },
    {
      title: "Portfolio Website",
      description: "Your own portfolio built using React SPA layout with smooth scrolling and modern UI.",
    },
    {
      title: "Portfolio Website",
      description: "Your own portfolio built using React SPA layout with smooth scrolling and modern UI.",
    },
  ];

  return (
    <section className="bg-gray-100 py-10" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="  text-blue-600 text-xl  font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
