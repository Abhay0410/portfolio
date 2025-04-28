// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AdminSidebar from "../componets/AdminSidebar";

// import axios from "axios";

// const Adashboard = () => {
//   const [stats, setStats] = useState({ projects: 0, testimonials: 0, gallery: 0 });
//   const [recentProjects, setRecentProjects] = useState([]);
//   const [recentTestimonials, setRecentTestimonials] = useState([]);
//   const [recentGalleryItems, setRecentGalleryItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const token = localStorage.getItem("token");

//         const [projectsRes, testimonialsRes, galleryRes] = await Promise.all([
//           axios.get(`${import.meta.env.VITE_API_URL}/api/projects`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`, { headers: { Authorization: `Bearer ${token}` } }),
//         ]);

//         setStats({
//           projects: projectsRes.data.length,
//           testimonials: testimonialsRes.data.length,
//           gallery: galleryRes.data.length,
//         });

//         setRecentProjects(projectsRes.data.slice(0, 8));
//         setRecentTestimonials(testimonialsRes.data.slice(0, 8));
//         setRecentGalleryItems(galleryRes.data.slice(0, 8)); // Fetching recent gallery items
//       } catch (error) {
//         setError("Failed to fetch data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex">
//         <AdminSidebar />
//         <div className="flex-1 flex justify-center items-center h-screen">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       <AdminSidebar />
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//         {error && <p className="text-red-500">{error}</p>}

//         {/* 🔹 Statistics Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {[
//             { label: "Projects", count: stats.projects, color: "blue" },
//             { label: "Testimonials", count: stats.testimonials, color: "yellow" },
//             { label: "Gallery Items", count: stats.gallery, color: "red" },
//           ].map((item, index) => (
//             <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${item.color}-500 hover:shadow-lg transition-shadow`}>
//               <p className="text-gray-500 text-sm">{item.label}</p>
//               <p className="text-2xl font-bold">{item.count}</p>
//             </div>
//           ))}
//         </div>

//         {/* 🔹 Recent Projects Section */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Projects</h2>
//           {recentProjects.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {recentProjects.map((project) => (
//                 <div key={project._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
//                   <img src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-700">{project.title}</h3>
//                   <p className="text-sm text-gray-500">{project.about}</p>
//                   <p className="text-xs text-gray-400">Client: {project.client}</p>
//                   <Link to={`/admin/edit-project/${project._id}`}>
//                     <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
//                       Edit Project
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-6">
//               <p className="text-gray-500">No projects found.</p>
//               <Link to="/admin/add-project">
//                 <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Project</button>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* 🔹 Recent Testimonials Section */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Testimonials</h2>
//           {recentTestimonials.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {recentTestimonials.map((testimonial) => (
//                 <div key={testimonial._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
//                   <p className="text-lg italic">"{testimonial.message}"</p>
//                   <p className="text-sm font-bold text-gray-700 mt-2">{testimonial.name}</p>
//                   <p className="text-xs text-gray-500">{testimonial.title}</p>
//                   <Link to={`/admin/edit-testimonial/${testimonial._id}`}>
//                     <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
//                       Edit Testimonial
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-6">
//               <p className="text-gray-500">No testimonials found.</p>
//               <Link to="/admin/add-testimonial">
//                 <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Testimonial</button>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* 🔹 Recent Gallery Section */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Gallery Items</h2>
//           {recentGalleryItems.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {recentGalleryItems.map((item) => (
//                 <div key={item._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
//                   <img
//                     src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
//                     alt={item.title}
//                     className="w-full h-40 object-cover rounded mb-4"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                   <p className="text-sm text-gray-500">{item.description}</p>
//                   <Link to={`/admin/edit-gallery/${item._id}`}>
//                     <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
//                       Edit Item
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-6">
//               <p className="text-gray-500">No gallery items found.</p>
//               <Link to="/admin/add-gallery">
//                 <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Item</button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adashboard;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../componets/AdminSidebar";
import axios from "axios";

const Adashboard = () => {
  const [stats, setStats] = useState({ projects: 0, testimonials: 0, gallery: 0 });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentTestimonials, setRecentTestimonials] = useState([]);
  const [recentGalleryItems, setRecentGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const [projectsRes, testimonialsRes, galleryRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/projects`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`, { headers: { Authorization: `Bearer ${token}` } }),
        ]);

        setStats({
          projects: projectsRes.data.length,
          testimonials: testimonialsRes.data.length,
          gallery: galleryRes.data.length,
        });

        setRecentProjects(projectsRes.data.slice(0, 8));
        setRecentTestimonials(testimonialsRes.data.slice(0, 8));
        setRecentGalleryItems(galleryRes.data.slice(0, 8)); // Fetching recent gallery items
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 flex justify-center items-center h-screen bg-[#FFE1FF]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#433878]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gradient-to-br from-[#FFE1FF] to-[#E4B1F0] min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#433878] mb-4">Dashboard</h1>
        {error && <p className="text-red-500 bg-[#FFE1FF] p-3 rounded-lg border border-red-200 mb-4">{error}</p>}

        {/* 🔹 Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Projects", count: stats.projects, icon: "📁" },
            { label: "Testimonials", count: stats.testimonials, icon: "💬" },
            { label: "Gallery Items", count: stats.gallery, icon: "🖼️" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7E60BF] hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#7E60BF] text-sm">{item.label}</p>
                  <p className="text-2xl font-bold text-[#433878]">{item.count}</p>
                </div>
                <span className="text-3xl">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Recent Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#433878] border-b border-[#E4B1F0] pb-2">Recent Projects</h2>
          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {recentProjects.map((project) => (
                <div key={project._id} className="bg-gradient-to-r from-white to-[#FFE1FF] p-4 rounded shadow hover:shadow-lg transition duration-200">
                  <img src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
                  <h3 className="text-lg font-semibold text-[#433878]">{project.title}</h3>
                  <p className="text-sm text-[#7E60BF]">{project.about}</p>
                  <p className="text-xs text-gray-500">Client: {project.client}</p>
                  <Link to={`/admin/edit-project/${project._id}`}>
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878] transition-all">
                      Edit Project
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-[#7E60BF]">No projects found.</p>
              <Link to="/admin/add-project">
                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878]">Add Project</button>
              </Link>
            </div>
          )}
        </div>

        {/* 🔹 Recent Testimonials Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#433878] border-b border-[#E4B1F0] pb-2">Recent Testimonials</h2>
          {recentTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {recentTestimonials.map((testimonial) => (
                <div key={testimonial._id} className="bg-gradient-to-r from-white to-[#FFE1FF] p-4 rounded shadow hover:shadow-lg transition duration-200">
                  <p className="text-lg italic text-[#7E60BF]">"{testimonial.message}"</p>
                  <p className="text-sm font-bold text-[#433878] mt-2">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                  <Link to={`/admin/edit-testimonial/${testimonial._id}`}>
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878] transition-all">
                      Edit Testimonial
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-[#7E60BF]">No testimonials found.</p>
              <Link to="/admin/add-testimonial">
                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878]">Add Testimonial</button>
              </Link>
            </div>
          )}
        </div>

        {/* 🔹 Recent Gallery Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#433878] border-b border-[#E4B1F0] pb-2">Recent Gallery Items</h2>
          {recentGalleryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {recentGalleryItems.map((item) => (
                <div key={item._id} className="bg-gradient-to-r from-white to-[#FFE1FF] p-4 rounded shadow hover:shadow-lg transition duration-200">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#433878]">{item.title}</h3>
                  <p className="text-sm text-[#7E60BF]">{item.description}</p>
                  <Link to={`/admin/edit-gallery/${item._id}`}>
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878] transition-all">
                      Edit Item
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-[#7E60BF]">No gallery items found.</p>
              <Link to="/admin/add-gallery">
                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#433878] to-[#7E60BF] text-white rounded hover:from-[#7E60BF] hover:to-[#433878]">Add Item</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adashboard;