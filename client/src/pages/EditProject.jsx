import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from "../componets/AdminSidebar"; // Added AdminSidebar import

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', client: '', about: '', image: null });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`);
        const data = await res.json();
        if (res.ok) {
          setForm({ title: data.title, client: data.client, about: data.about, image: data.image });
        } else {
          setError('Project not found');
        }
      } catch (err) {
        setError('Failed to fetch project');
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] }); // Handle image file selection
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!form.title || !form.client || !form.about || !form.image) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('client', form.client);
      formData.append('about', form.about);
      formData.append('image', form.image);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to update project');
      }

      navigate('/admin/dashboard'); // Navigate back after successful update
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* AdminSidebar Component */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="about"
            placeholder="Project Description"
            value={form.about}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="client"
            placeholder="Client Name"
            value={form.client}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex gap-4">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>
              {loading ? 'Updating...' : 'Update Project'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Back to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
