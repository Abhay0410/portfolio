import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`);
        setGalleryItems(response.data);
      } catch (err) {
        setError("Failed to load gallery items.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                alt={item.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
