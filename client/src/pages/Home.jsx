import React from 'react';
import { Link } from "react-router-dom";
import HeroImage from '../assets/hero2.jpg'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col items-center justify-center text-center px-3"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 mt-16"> 
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm sonam – A Passionate React Developer
          </h1>
          <p className="text-white text-2xl md:text-3xl font-medium max-w-xl mx-auto mb-4">
            Crafting modern web experiences with clean code and creative UI
          </p>
          <p className="text-gray-200 max-w-xl mx-auto text-lg mb-6">
            Discover a suite of tailored solutions designed to elevate your brand in the digital realm. We specialize in a range of services that synergize to maximize your online presence and drive tangible results.
          </p>
          <Link to="/Projects">
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Explore Our Work
            </button>
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Firebase"].map((skill) => (
            <span key={skill} className="px-5 py-2 bg-gray-200 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Why Work With Me Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Why Work With Me?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-2">Projects delivered on time without compromising quality.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">Pixel Perfect Design</h3>
            <p className="text-sm text-gray-600 mt-2">Attention to design detail and responsive layout.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">Clean & Scalable Code</h3>
            <p className="text-sm text-gray-600 mt-2">Well-organized code with best practices and reusable components.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;