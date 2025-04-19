import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', client: '', date: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/projects/${id}`);
        const data = await res.json();
        if (res.ok) {
          setForm({ title: data.title, client: data.client, date: data.date.split('T')[0] });
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!form.title || !form.client || !form.date) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Project Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="client" placeholder="Client Name" value={form.client} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded" required />

        <div className="flex gap-4">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>
            {loading ? 'Updating...' : 'Update Project'}
          </button>
          <button type="button" onClick={() => navigate('/admin/dashboard')} className="px-4 py-2 bg-gray-500 text-white rounded">
            Back to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
