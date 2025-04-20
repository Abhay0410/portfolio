import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTestimonial = () => {
  const [formData, setFormData] = useState({ name: "", title: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 
    const token = localStorage.getItem("token");

    if (!formData.name || !formData.title || !formData.message) {
      setError("❌ All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/testimonials`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setError(""); 
      navigate("/admin/testimonials");
    } catch (err) {
      setError(`❌ Error adding testimonial: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold text-gray-700 mb-4 text-center">Add New Testimonial</h1>

        {error && <p className="text-red-500 text-center text-sm bg-red-100 p-2 rounded">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Client Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Testimonial Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-700 text-white p-2 rounded-md text-sm hover:bg-gray-800 transition duration-200"
          >
            {loading ? "Adding..." : "Add Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
