import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar"; // Fixed AdminSidebar import

const EditGallery = () => {
  const { id } = useParams(); // Get gallery item ID from URL params
  const [formData, setFormData] = useState({ title: "", description: "", image: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleryItem = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { title, description } = response.data;
        setFormData({ title, description, image: null });
      } catch (err) {
        setError("Failed to load gallery item.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.image) formDataToSend.append("image", formData.image); // Only append image if changed

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, formDataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/gallery");
    } catch (err) {
      setError(`Error updating gallery item: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Section with Back Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Form Section */}
        <h1 className="text-2xl font-bold mb-4">Edit Gallery Item</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Updating..." : "Update Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGallery;
