import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar";

const Adashboard = () => {
  const [stats, setStats] = useState({ projects: 0, blogs: 0, testimonials: 0, gallery: 0 });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentTestimonials, setRecentTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        // Fetch Projects & Stats
        const projectsRes = await fetch(`${import.meta.env.VITE_API_URL}/api/projects?limit=6`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!projectsRes.ok) throw new Error("Failed to fetch projects");

        const projectsData = await projectsRes.json();
        setStats({ ...stats, projects: projectsData.length });
        setRecentProjects(projectsData);
      } catch (error) {
        setError("Failed to fetch data. Showing cached data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        {error && <p className="text-red-500">{error}</p>}

        {/* 🔹 Restored Project Count at the Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Projects", count: stats.projects, color: "blue" },
            { label: "Blogs", count: stats.blogs, color: "green" },
            { label: "Testimonials", count: stats.testimonials, color: "yellow" },
            { label: "Gallery Items", count: stats.gallery, color: "red" },
          ].map((item, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${item.color}-500 hover:shadow-lg transition-shadow`}>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Recent Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Projects</h2>
          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project) => (
                <div key={project._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
                  <img src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.about}</p>
                  <p className="text-xs text-gray-400">Client: {project.client}</p>
                  <Link to={`/admin/edit-project/${project._id}`}>
                    <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      Edit Project
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No projects found.</p>
              <Link to="/admin/add-project">
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Project</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adashboard;
