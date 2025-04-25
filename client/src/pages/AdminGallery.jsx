import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for the button
import axios from "axios";
import AdminSidebar from "../componets/AdminSidebar"; // Fixed AdminSidebar import

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Added navigate for navigation functionality

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGallery(response.data);
    } catch (err) {
      setError(`Failed to load gallery: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this gallery item?")) return;

    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchGalleryItems();
    } catch (err) {
      setError(`Error deleting gallery item: ${err.message}`);
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Gallery</h1>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            Back to Dashboard
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <Link to="/admin/add-gallery" className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add New Gallery Item
        </Link>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow hover:shadow-lg">
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="mt-2 flex gap-2">
                  <Link to={`/admin/edit-gallery/${item._id}`}>
                    <button className="bg-yellow-500 px-3 py-1 text-white rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 px-3 py-1 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGallery;
