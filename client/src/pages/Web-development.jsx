import React from 'react';
import webDevImage from '../assets/webdevelopment.png';
import { Globe, ShoppingCart, Monitor, Layers, Zap, Settings, Code, Database, Shield, Wrench, Activity } from 'lucide-react';

const services = [
  { icon: <Globe />, title: 'Static Website' },
  { icon: <ShoppingCart />, title: 'Ecommerce Development' },
  { icon: <Monitor />, title: 'Dynamic Website' },
  { icon: <Layers />, title: 'CMS' },
  { icon: <Zap />, title: 'PWA Development' },
  { icon: <Settings />, title: 'Single Page App' },
  { icon: <Code />, title: 'API Development' },
  { icon: <Database />, title: 'Database Development' },
  { icon: <Shield />, title: 'Web Security' },
  { icon: <Wrench />, title: 'Maintenance' },
  { icon: <Activity />, title: 'Support & More' },
];

const WebDevelopment = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Web Development</h2>
          <p className="text-lg text-gray-800 mb-10">
            Build and maintain high-performance websites with custom design, coding, and server configuration to ensure seamless user experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-yellow-400 text-black font-medium px-5 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-yellow-500 p-2 rounded-full mr-3">
                  {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                </div>
                {service.title}
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <img src={webDevImage} alt="Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
