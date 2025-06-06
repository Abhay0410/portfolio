import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './componets/Navbar'; // Fixed typo in folder name
import Footer from './componets/Footer'; // Fixed typo in folder name

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DisplayProjects from './pages/DisplayProjects';
import Contact from './pages/Contact';
import WebDevelopment from './pages/Web-development';
import UIUX from './pages/UI';
import SEO from './pages/SEO';
import AppD from './pages/AppD';
import AnimeV from './pages/AnimeV';

import Gallery from './pages/Gallery';

// Admin components
import AdminLogin from "./pages/AdminLogin";
import Adashboard from './pages/Adashboard';
import Projects from './pages/Projects'; // Admin projects management
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';

import AdminTestimonials from "./pages/AdminTestimonials";
import AddTestimonial from "./pages/AddTestimonial";
import EditTestimonial from "./pages/EditTestimonial";

import AdminGallery from './pages/AdminGallery'; // Admin gallery management
import AddGallery from './pages/AddGallery'; // Form for adding gallery items
import EditGallery from './pages/EditGallery'; // Form for editing gallery items




import ProtectedRoute from './componets/ProtectedRoute'; // Fixed path

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/displayprojects" element={<DisplayProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appd" element={<AppD />} />
            <Route path="/ui" element={<UIUX />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/animev" element={<AnimeV />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin" element={<AdminLogin />} />
            
            {/* Admin Protected Routes */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Adashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="add-project" element={<AddProject />} />
              <Route path="testimonials" element={<AdminTestimonials />} />
              <Route path="/admin/add-testimonial" element={<AddTestimonial />} />
              <Route path="edit-project/:id" element={<EditProject />} />
              <Route path="/admin/edit-testimonial/:id" element={<EditTestimonial />} />
              <Route path="gallery" element={<AdminGallery />} /> 
              <Route path="add-gallery" element={<AddGallery />} />
              <Route path="edit-gallery/:id" element={<EditGallery />} /> 
            </Route>
            
            {/* For backward compatibility */}
            <Route path="/adashboard" element={<Navigate to="/admin/dashboard" replace />} />
            
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
