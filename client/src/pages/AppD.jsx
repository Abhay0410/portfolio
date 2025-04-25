import React from 'react';
import { Smartphone, Palette, Touchpad, Layout, Code, CheckCircle } from 'lucide-react';
// import mobileImage from '../assets/mobile.png'; 
const features = [
  { icon: <Smartphone />, title: 'Mobile App UI' },
  { icon: <Palette />, title: 'Custom Design' },
  { icon: <Touchpad />, title: 'User-Friendly UX' },
  { icon: <Layout />, title: 'Cross Platform' },
  { icon: <Code />, title: 'React Native / Flutter' },
  { icon: <CheckCircle />, title: 'App Testing' },
];

const AppDesign = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">App Design</h2>
          <p className="text-lg text-gray-800 mb-10">
            We craft sleek and functional app interfaces that are intuitive and visually captivating for both Android and iOS platforms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-yellow-400 text-black font-medium px-5 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-yellow-500 p-2 rounded-full mr-3">
                  {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                </div>
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/mobile.png" alt="App Design" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default AppDesign;
