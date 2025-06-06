import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <nav className="bg-[#051224] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-white p-2 rounded-full shadow-md">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white space-x-6 items-center">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/services" className="text-gray-200 font-medium hover:text-white border-b-2 border-transparent hover:border-white transition-all">
              Services
            </Link>

            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <DropdownLink to="/Web-development" label="Web Development" />
              <DropdownLink to="/UI" label="UI/UX Design" />
              <DropdownLink to="/SEO" label="SEO Optimization" />
              <DropdownLink to="/AppD" label="App Design" />
              <DropdownLink to="/AnimeV" label="Animated Video" />
            </div>
          </div>

          <NavLink to="/displayprojects" label="Projects" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-[#051224] z-50 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-start p-6 text-white space-y-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end mb-6">
            ✕
          </button>
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/displayprojects" label="Projects" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-200 hover:text-white transition-colors font-medium border-b-2 border-transparent hover:border-white"
  >
    {label}
  </Link>
);

const DropdownLink = ({ to, label }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
  >
    {label}
  </Link>
);

export default Navbar;
