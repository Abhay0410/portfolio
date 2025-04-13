import React from 'react';
import { Code, Paintbrush, Smartphone, } from 'lucide-react'; 

const services = [
  {
    title: 'Web Development',
    icon: <Code className="w-10 h-10 text-blue-600" />,
    description: 'Building responsive, fast, and modern websites using the latest technologies.',
  },
  {
    title: 'UI/UX Design',
    icon: <Paintbrush className="w-10 h-10 text-blue-600" />,
    description: 'Designing clean, user-friendly interfaces that offer a seamless experience.',
  },
  {
    title: 'Mobile Optimization',
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    description: 'Ensuring your website looks and works great on all mobile devices.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h1>
        <p className='text-2xl md:text-2xl font-bold text-center text-yellow-800 mb-12'>Custom Digital Solutions for
        Your Successful Business</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
