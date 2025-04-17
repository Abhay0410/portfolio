import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer'; 

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

import Contact from './pages/Contact';
import WebDevelopment from './pages/web-development';
import UIUX from './pages/UI';
import SEO from './pages/SEO';
import AppD from './pages/AppD';
import AnimeV from './pages/AnimeV';

import AdminLogin from "./pages/AdminLogin"
import Adashboard from './pages/Adashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/appd" element={<AppD />} />
            <Route path="/ui" element={<UIUX />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/animev" element={<AnimeV />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/adashboard" element={<Adashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;