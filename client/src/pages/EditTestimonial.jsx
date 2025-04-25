import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar"; // Added AdminSidebar import

const EditTestimonial = () => {
  const { id } = useParams(); // Get testimonial ID from the URL
  const [formData, setFormData] = useState({ name: "", title: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials/${id}`);
        setFormData(res.data); // Load existing testimonial data
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };

    fetchTestimonial();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/testimonials/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Testimonial updated successfully!");
      setTimeout(() => navigate("/admin/testimonials"), 2000); // Redirect after success
    } catch (error) {
      setMessage("❌ Error updating testimonial. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* AdminSidebar Component */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Edit Testimonial</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Client Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Client Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Testimonial Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">
              {loading ? "Updating..." : "Update Testimonial"}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditTestimonial;
