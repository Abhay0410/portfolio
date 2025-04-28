import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar"; // Fixed AdminSidebar import

const AddGallery = () => {
  const [formData, setFormData] = useState({ title: "", description: "", image: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    formDataToSend.append("image", formData.image);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/gallery`, formDataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/gallery");
    } catch (err) {
      setError(`Error adding gallery item: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Back Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            Back to Dashboard
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">Add Gallery Item</h1>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Adding..." : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGallery;
