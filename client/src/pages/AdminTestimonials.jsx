import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({ message: "", name: "", title: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // FIX: Initialize navigation function

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(""); // Reset error before fetching
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`);
      setTestimonials(res.data);
    } catch (err) {
      setError(`❌ Failed to load testimonials: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/admin/dashboard"); // Navigate back to dashboard
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before submission
    const token = localStorage.getItem("token");

    try {
      const url = editingId
        ? `${import.meta.env.VITE_API_URL}/api/testimonials/${editingId}`
        : `${import.meta.env.VITE_API_URL}/api/testimonials`;

      const method = editingId ? "PUT" : "POST";

      await axios({ method, url, data: formData, headers: { Authorization: `Bearer ${token}` } });

      fetchTestimonials();
      setEditingId(null);
      setFormData({ message: "", name: "", title: "" });
    } catch (err) {
      setError(`❌ Error saving testimonial: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError(""); // Reset error before deletion
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/testimonials/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTestimonials();
    } catch (err) {
      setError(`❌ Error deleting testimonial: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial._id);
    setFormData({ message: testimonial.message, name: testimonial.name, title: testimonial.title });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Testimonials</h1>

      {error && <p className="text-red-500">{error}</p>}

      <button type="button" onClick={handleBackToDashboard} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Back to Dashboard
      </button>   

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
        <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" className="w-full mb-2 p-2 border rounded" required />
        <input type="text" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" className="w-full mb-2 p-2 border rounded" required />
        <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Message" className="w-full mb-2 p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? "Processing..." : editingId ? "Update Testimonial" : "Add Testimonial"}
        </button>
      </form>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white p-4 rounded shadow">
              <p className="text-lg italic">"{testimonial.message}"</p>
              <p className="text-sm font-bold mt-2">{testimonial.name} - {testimonial.title}</p>
              <div className="mt-2 flex gap-2">
                <button onClick={() => handleEdit(testimonial)} className="bg-yellow-500 px-3 py-1 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(testimonial._id)} className="bg-red-600 px-3 py-1 text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;
