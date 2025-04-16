import React from 'react';
import { Code, Paintbrush, Smartphone, Search, Layout, Film } from 'lucide-react'; 
import SerBg from '../assets/service.jpg';
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
  {
    title: 'SEO Optimization',
    icon: <Search className="w-10 h-10 text-blue-600" />,
    description: 'Improving your website’s visibility on search engines to drive organic traffic.',
  },
  {
    title: 'App Design',
    icon: <Layout className="w-10 h-10 text-blue-600" />,
    description: 'Creating intuitive and visually appealing designs for mobile and web applications.',
  },
  {
    title: 'Animated Video Production',
    icon: <Film className="w-10 h-10 text-blue-600" />,
    description: 'Producing engaging animated videos to effectively communicate your brand’s story.',
  },
];

const Services = () => {
  return (
    <section
  className="py-20 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${SerBg})` }}
  id="services"
>
  <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div> {/* Semi-transparent overlay */}
  <div className="relative max-w-6xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 drop-shadow-md mb-4">
      Our Services
    </h1>
    <p className="text-xl md:text-2xl text-center font-semibold text-purple-900 mb-12 drop-shadow">
      Custom Digital Solutions for Your Successful Business
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 border border-blue-100"
        >
          <div className="mb-4 flex justify-center">{service.icon}</div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Services;
