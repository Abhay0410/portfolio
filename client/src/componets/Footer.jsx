import React from "react";
import {Facebook,Instagram,Linkedin,Mail,Phone,MapPin,} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#051224] text-white py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
          A portfolio is a curated collection of work that showcases a person's skills, experience, and accomplishments. It serves as a visual representation of an individual's professional journey, offering potential clients or employers insight into their abilities. For a web developer, a portfolio typically includes projects, designs, and code snippets that highlight technical expertise and creativity. A well-organized portfolio not only demonstrates proficiency but also reflects a person’s personal style. It's a valuable tool for building credibility, attracting clients, and securing job opportunities, as it visually communicates one's capabilities and previous work experiences.

          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2 ">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="/" className="font-bold">Admin</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              CSIT Campus, Shivaji Nagar, Durg, Chhattisgarh
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 7067328563/+91 73895 90580
            </li>
            <li className="flex items-center gap-2">
             
              <Mail className="w-4 h-4" /> kumarsinghabhay77@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} className=" ml-23 hover:text-blue-500" />
          </a>
        <a href="https://www.instagram.com/_l.abhay.l_/" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} className="  hover:text-blue-500" />
          </a>
        <a href="https://www.linkedin.com/in/sonam-soni-/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={30} className=" hover:text-blue-500" />
          </a> 
        </div>
        <p>© 2025 Abhay_Sonam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;