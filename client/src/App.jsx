import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer'; 

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

import Contact from './pages/Contact';
import WebDevelopment from './pages/web-development.jsx';
import UIUX from './pages/UI';
import SEO from './pages/SEO';
import AppD from './pages/AppD';
import AnimeV from './pages/AnimeV';
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
            <Route path="/Projects" element={<Projects/>} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/pages/AppD" element={<AppD />} />
            <Route path="/pages/UI" element={<UIUX/>} />
            <Route path="/pages/SEO" element={<SEO/>} />
            <Route path="/pages/Web-development" element={<WebDevelopment/>} />
            <Route path="/pages/AnimeV" element={<AnimeV/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;