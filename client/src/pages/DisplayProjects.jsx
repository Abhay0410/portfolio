import React, { useEffect, useState } from 'react';

const ProjectsDisplay = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('http://localhost:5000/api/projects');
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200"
          >
            <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
            <p className="text-sm text-gray-500">Client: {project.client}</p>
            <p className="text-sm text-gray-400">
              Date: {new Date(project.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
