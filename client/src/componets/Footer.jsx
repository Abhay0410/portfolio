import React from "react";
import {Facebook,Instagram,Linkedin,Mail,Phone,MapPin,} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#051224] text-white py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
          At Zager Digital Services, we believe that exceptional Digital Marketing and IT solutions stem from a core commitment to integrity, innovation, and excellence. Founded with the mission to empower businesses through cutting-edge technology and strategic marketing, we take pride in delivering tailored solutions that drive growth and success.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2 ">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#" className="font-bold">Admin</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              Startup Enclave, CSIT Campus, Shivaji Nagar, Durg, Chhattisgarh
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91-9407655717
            </li>
            <li className="flex items-center gap-2">
             
              <Mail className="w-4 h-4" /> contact@zager.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="https://www.facebook.com/zagerdigitalservices" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} className=" ml-23 hover:text-blue-500" />
          </a>
        <a href="https://www.instagram.com/zagerdigitalservices/" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} className="  hover:text-blue-500" />
          </a>
        <a href="https://www.linkedin.com/company/zagerdigitalservices/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <Linkedin size={30} className=" hover:text-blue-500" />
          </a> 
        </div>
        <p>© 2025 Zager Digital Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;