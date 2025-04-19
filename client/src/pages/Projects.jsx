import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate(); // Use navigate for dashboard redirection

  useEffect(() => {
    fetchProjects();
  }, [projects]); // Ensure projects update dynamically

  const fetchProjects = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setProjects(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;
    
    const token = localStorage.getItem('token');
    await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="flex gap-4">
          <Link to="/admin/add-project">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add New Project
            </button>
          </Link>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Client</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id} className="text-center border-b">
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.client}</td>
              <td className="p-2">{new Date(p.date).toLocaleDateString()}</td>
              <td className="p-2 space-x-2">
                <Link to={`/admin/edit-project/${p._id}`}>
                  <button className="bg-yellow-500 px-3 py-1 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-600 px-3 py-1 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
