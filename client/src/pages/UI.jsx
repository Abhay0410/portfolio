import React from 'react';
import { Paintbrush, PenTool, Eye, Ruler, Palette, TabletSmartphone, Layers, Focus, Edit3, Smile } from 'lucide-react';
import UiuxImage from '../assets/uiux.jpg';

const services = [
  { icon: <Paintbrush />, title: 'UI Design' },
  { icon: <PenTool />, title: 'UX Research' },
  { icon: <Eye />, title: 'User Testing' },
  { icon: <Ruler />, title: 'Responsive Design' },
  { icon: <Palette />, title: 'Color & Typography' },
  { icon: <TabletSmartphone />, title: 'Mobile-First Design' },
  { icon: <Layers />, title: 'Wireframing' },
  { icon: <Focus />, title: 'User Journey Mapping' },
  { icon: <Edit3 />, title: 'Micro-Interactions' },
  { icon: <Smile />, title: 'User Delight Features' },
];

const UIUXDesign = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-pink-500 mb-4">UI/UX Design</h2>
          <p className="text-lg text-gray-800 mb-10">
            Craft user-centric designs that are both visually appealing and highly functional. From research to prototyping, we bring your vision to life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-pink-400 text-white font-medium px-5 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-pink-500 p-2 rounded-full mr-3">
                  {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                </div>
                {service.title}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src={UiuxImage} alt="UI/UX Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;
