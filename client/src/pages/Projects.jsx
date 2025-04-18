import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
        
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#F0F4F8] min-h-screen px-6 py-16 flex items-center justify-center">
        <div className="text-xl text-[#161179]">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#F0F4F8] min-h-screen px-6 py-16 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="bg-[#F0F4F8] min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-[#161179] mb-2">Projects</h2>
      <p className="text-center text-[#161179] text-3xl mb-10">
        Some of the recent work I've built and deployed
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj._id}
            className="bg-[#F1EFEC] rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[#064283] mb-2 text-center">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-900 mb-3 font-semibold">
                {proj.description}
              </p>
              {proj.github && (
                <div className="text-center mt-4">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#064283] text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;