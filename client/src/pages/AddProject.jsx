import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [form, setForm] = useState({ title: "", client: "", about: "", image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setForm({ ...form, image: file });
      setImagePreview(URL.createObjectURL(file)); // Display preview
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!form.title || !form.client || !form.about || !form.image) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("client", form.client);
      formData.append("about", form.about);
      formData.append("image", form.image);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add project");

      navigate("/admin/projects"); // Navigate back after successful submission
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-gray-700">Project Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />

        <label className="block text-gray-700">Project Description</label>
        <textarea name="about" value={form.about} onChange={handleChange} className="w-full p-2 border rounded" required />

        <label className="block text-gray-700">Client Name</label>
        <input type="text" name="client" value={form.client} onChange={handleChange} className="w-full p-2 border rounded" required />

        <label className="block text-gray-700">Upload Image</label>
        <input type="file" name="image" onChange={handleChange} className="w-full p-2 border rounded" required />

        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Project Preview" className="w-32 h-32 object-cover rounded shadow-md" />
          </div>
        )}

        <div className="flex gap-4">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button type="button" onClick={() => navigate("/admin/dashboard")} className="px-4 py-2 bg-gray-500 text-white rounded">
            Back to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
