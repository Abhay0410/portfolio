import React, { useEffect, useState } from 'react';

const Adashboard = () => {
  const [message, setMessage] = useState('');
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    projectCount: 0,
    blogCount: 0,
    testimonialCount: 0
  });
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Function to navigate programmatically
  const navigateTo = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigateTo('/dmin');
          return;
        }

        // Fetch dashboard data
        const dashboardRes = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/dashboard`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!dashboardRes.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        
        const dashboardData = await dashboardRes.json();
        setMessage(dashboardData.message);
        
        // Fetch projects
        const projectsRes = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/projects`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!projectsRes.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const projectsData = await projectsRes.json();
        setProjects(projectsData);
        
        // Update stats
        setStats({
          projectCount: projectsData.length,
          blogCount: 5,  // Replace with actual API call when implemented
          testimonialCount: 3  // Replace with actual API call when implemented
        });
      } catch (err) {
        setMessage('Access denied. Please login.');
        navigateTo('/admin');
      }
    };

    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigateTo('/admin');
  };

  const handleEdit = (projectId) => {
    navigateTo(`/admin/edit-project/${projectId}`);
  };

  const handleDelete = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/projects/${projectId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete project');
        }
        
        // Refresh projects list
        setProjects(projects.filter(project => project._id !== projectId));
        setStats(prev => ({...prev, projectCount: prev.projectCount - 1}));
      } catch (err) {
        console.error('Error deleting project:', err);
      }
    }
  };

  const renderDashboardContent = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-3xl font-bold">{stats.projectCount}</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-3xl font-bold">{stats.blogCount}</div>
            <div className="text-gray-600">Blog Posts</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-3xl font-bold">{stats.testimonialCount}</div>
            <div className="text-gray-600">Testimonials</div>
          </div>
        </div>
        
        {/* Recent Projects */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Recent Projects</h3>
            <button 
              onClick={() => setActiveSection('projects')}
              className="text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div>
            {projects.slice(0, 3).map(project => (
              <div key={project._id} className="mb-2 pb-2 border-b">
                {project.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderProjectsContent = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <button 
            onClick={() => navigateTo('/admin/add-project')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Project
          </button>
        </div>
        
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project._id} className="border-t">
                  <td className="py-3 px-4">{project.title}</td>
                  <td className="py-3 px-4">{project.description?.substring(0, 50)}...</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleEdit(project._id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 font-bold text-lg">Admin Dashboard</div>
        <div className="mt-6">
          <button 
            onClick={() => setActiveSection('dashboard')}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${activeSection === 'dashboard' ? 'bg-gray-700' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${activeSection === 'projects' ? 'bg-gray-700' : ''}`}
          >
            Projects
          </button>
          <button 
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Blog
          </button>
          <button 
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Testimonials
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-64 border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded w-full"
          >
            Logout
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeSection === 'dashboard' ? renderDashboardContent() : renderProjectsContent()}
      </div>
    </div>
  );
};

export default Adashboard;