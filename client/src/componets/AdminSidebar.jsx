// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FiHome, FiFolder, FiPlusCircle, FiMessageSquare, FiLogOut } from "react-icons/fi";


// const AdminSidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path) => location.pathname.startsWith(path) ? "bg-blue-700" : "";

//   const handleLogout = () => {
//     // if (window.confirm("Are you sure you want to logout?")) 
//     {
//       localStorage.removeItem("token"); // Remove token
//       navigate("/admin"); // ✅ Redirects properly after logout
//     }
//   };

//   return (
//     <div className="bg-blue-800 text-white w-64 min-h-screen flex-shrink-0 shadow-lg">
//       <div className="p-5 border-b border-blue-700">
//         <h2 className="text-xl font-bold">Admin Panel</h2>
//       </div>

//       <nav className="p-4">
//         <ul className="space-y-2">
//         <li>
//   <Link 
//     to="/admin/dashboard" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/dashboard")}`}
//   >
//     <FiHome className="mr-2" /> Dashboard
//   </Link>
// </li>
// <li>
//   <Link 
//     to="/admin/projects" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/projects")}`}
//   >
//     <FiFolder className="mr-2" /> Projects
//   </Link>
// </li>
// <li>
//   <Link 
//     to="/admin/add-project" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/add-project")}`}
//   >
//     <FiPlusCircle className="mr-2" /> Add Project
//   </Link>
// </li>
// <li>
//   <Link 
//     to="/admin/gallery" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/gallery")}`}
//   >
//     <FiFolder className="mr-2" /> Manage Gallery
//   </Link>
// </li>

// <li>
//   <Link 
//     to="/admin/add-gallery" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/add-gallery")}`}
//   >
//     <FiPlusCircle className="mr-2" /> Add Gallery Item
//   </Link>
// </li>

// <li>
//   <Link 
//     to="/admin/testimonials" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/testimonials")}`}
//   >
//     <FiMessageSquare className="mr-2" /> Manage Testimonials
//   </Link>
// </li>

// <li>
//   <Link 
//     to="/admin/add-testimonial" 
//     className={`flex items-center p-3 rounded hover:bg-blue-700 transition-colors ${isActive("/admin/add-testimonial")}`}
//   >
//     <FiPlusCircle className="mr-2" /> Add Testimonial
//   </Link>
// </li>
// <li className="mt-8">
//   <button 
//     onClick={handleLogout} 
//     className="flex items-center p-3 rounded hover:bg-red-600 transition-colors w-full text-left"
//   >
//     <FiLogOut className="mr-2" /> Logout
//   </button>
// </li>

//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default AdminSidebar;



import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiFolder, FiPlusCircle, FiMessageSquare, FiLogOut } from "react-icons/fi";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path) ? "bg-[#7E60BF]" : "";

  const handleLogout = () => {
    // if (window.confirm("Are you sure you want to logout?"))
    {
      localStorage.removeItem("token"); // Remove token
      navigate("/admin"); // ✅ Redirects properly after logout
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#433878] to-[#7E60BF] text-white w-64 min-h-screen flex-shrink-0 shadow-lg">
      <div className="p-5 border-b border-[#E4B1F0]">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/dashboard")}`}
            >
              <FiHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/projects"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/projects")}`}
            >
              <FiFolder className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-project"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/add-project")}`}
            >
              <FiPlusCircle className="mr-2" /> Add Project
            </Link>
          </li>
          <li>
            <Link
              to="/admin/gallery"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/gallery")}`}
            >
              <FiFolder className="mr-2" /> Manage Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-gallery"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/add-gallery")}`}
            >
              <FiPlusCircle className="mr-2" /> Add Gallery Item
            </Link>
          </li>
          <li>
            <Link
              to="/admin/testimonials"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/testimonials")}`}
            >
              <FiMessageSquare className="mr-2" /> Manage Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-testimonial"
              className={`flex items-center p-3 rounded hover:bg-[#7E60BF] transition-colors ${isActive("/admin/add-testimonial")}`}
            >
              <FiPlusCircle className="mr-2" /> Add Testimonial
            </Link>
          </li>
          <li className="mt-8">
            <button
              onClick={handleLogout}
              className="flex items-center p-3 rounded bg-gradient-to-r from-[#433878] to-[#7E60BF] hover:from-[#7E60BF] hover:to-[#433878] transition-colors w-full text-left"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;