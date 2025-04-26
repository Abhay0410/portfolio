import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#051224] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Us Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#00bcd4]">About Us</h2>
          <p className="text-gray-400 text-sm">
            A portfolio is a curated collection of work that showcases a person's skills, experience, and accomplishments. It visually communicates one’s capabilities and previous work experiences.
          </p>
          
          {/* Address, Phone, Email */}
          <div className="space-y-3 text-gray-300 text-sm mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              CSIT Campus, Shivaji Nagar, Durg, Chhattisgarh
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              +91 70673 28563 / +91 73895 90580
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              kumarsinghabhay77@gmail.com
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/admin" className="font-bold hover:underline">Admin</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/services" className="hover:underline">FAQs</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            {/* <li><Link to="/pages" className="hover:underline">Pages</Link></li> */}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            {/* <li><Link to="/404" className="hover:underline">404</Link></li> */}
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook size={30} className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/_l.abhay.l_/" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} className="hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/sonam-soni-/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} className="hover:text-blue-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Abhay_Sonam Template. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
