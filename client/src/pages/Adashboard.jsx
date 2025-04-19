import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../componets/AdminSidebar';

const Adashboard = () => {
  const [stats, setStats] = useState({ projects: 0, blogs: 0, testimonials: 0, gallery: 0 });
  const [recentProjects, setRecentProjects] = useState(JSON.parse(localStorage.getItem('recentProjects')) || []);
  const [recentTestimonials, setRecentTestimonials] = useState(JSON.parse(localStorage.getItem('recentTestimonials')) || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');

        // Fetch individual counts
        const projectsRes = await fetch(`${import.meta.env.VITE_API_URL}/api/projects?limit=8`, );
        if (!projectsRes.ok) throw new Error('Failed to fetch projects');

        const projectsData = await projectsRes.json();
        setStats({ projects: projectsData.length });
        setRecentProjects(projectsData.slice(0, 8));
        localStorage.setItem('recentProjects', JSON.stringify(projectsData.slice(0, 8))); // Cache data
      } catch (error) {
        setError('Failed to fetch data. Showing cached data.');
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
        <div className="flex-1 flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to your admin panel</p>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {['projects', 'blogs', 'testimonials', 'gallery'].map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-300 hover:shadow-lg transition-shadow">
              <p className="text-gray-500 text-sm capitalize">{type}</p>
              <p className="text-2xl font-bold">{stats[type]}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Projects</h2>
          {recentProjects.length > 0 ? (
            <ul className="divide-y">
              {recentProjects.map((project) => (
                <li key={project._id} className="py-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">Client: {project.client}</p>
                    <p className="text-xs text-gray-400">{new Date(project.date).toLocaleDateString()}</p>
                  </div>
                  <Link to={`/admin/edit-project/${project._id}`}>
                    <button className="p-2 bg-yellow-100 text-yellow-600 rounded hover:bg-yellow-200">Edit</button>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No projects found.</p>
              <Link to="/admin/add-project">
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Project</button>
              </Link>
            </div>
          )}
        </div>

        {/* Recent Testimonials Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Testimonials</h2>
          {recentTestimonials.length > 0 ? (
            <ul className="space-y-4">
              {recentTestimonials.map((testimonial) => (
                <li key={testimonial._id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                      {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : 'A'}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{testimonial.name || 'Anonymous'}</h3>
                      {testimonial.company && <p className="text-xs text-gray-500">{testimonial.company}</p>}
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No testimonials found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adashboard;
