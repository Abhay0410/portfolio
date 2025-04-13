import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </Link>

    
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/services" label="Services" />
          {/* <NavLink to="/portfolio" label="Portfolio" /> */}
          {/* <NavLink to="/testimonials" label="Testimonials" /> */}
          <NavLink to="/contact" label="Contact" />
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
               viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 line-height: 1.5">
          <NavLink to="/" label="Home" onClick={toggleMenu} />
          <NavLink to="/about" label="About" onClick={toggleMenu} />
          <NavLink to="/services" label="Services" onClick={toggleMenu} />
          {/* <NavLink to="/portfolio" label="Portfolio" onClick={toggleMenu} />
          <NavLink to="/testimonials" label="Testimonials" onClick={toggleMenu} /> */}
          <NavLink to="/contact" label="Contact" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
  >
    {label}
  </Link>
);

export default Navbar;
