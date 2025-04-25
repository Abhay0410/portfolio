import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar"; // Added AdminSidebar import

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setProjects(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    const token = localStorage.getItem("token");
    await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* AdminSidebar Component */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          <div className="flex gap-4">
            <Link to="/admin/add-project">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                + Add New Project
              </button>
            </Link>
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${p.image}`}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Client: {p.client}</p>
                <p className="text-gray-600">{p.about}</p>

                <div className="flex gap-4 mt-4">
                  <Link to={`/admin/edit-project/${p._id}`}>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500">No projects found.</p>
            <Link to="/admin/add-project">
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add a Project
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
