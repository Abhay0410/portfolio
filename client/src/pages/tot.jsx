import React from 'react';
import HeroImage from './assets/hero2.jpg';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center text-center px-3"
      style={{ backgroundImage: `url(${HeroImage})` }}>
    
      {/* absolute inset-0: Makes this div cover the entire parent divabsolute inset-0: Makes this div cover the entire parent div
      z-0: Keeps it behind the content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-0"></div>

      <div className="relative z-10 mt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white  mb-8 " >Welcome to ZAGER</h1><br/>
        <p className="text-black  md:text-3xl font-bold max-w-xl mx-auto text-lg">
          We craft elegant, functional, and powerful digital experiences for your business.
        </p>
        <p className="text-Black max-w-xl mx-auto text-lg">Discover a suite of tailored solutions designed to elevate your brand in the digital realm. At Zager, we specialize in a range of services that synergize to maximize your online presence and drive tangible results.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Explore Our Work
        </button>
      </div>
    </div>
  );
};

export default Home;
