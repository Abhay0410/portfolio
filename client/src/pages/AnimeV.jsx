import React from 'react';
import { Film, Mic, Video, Edit3, SlidersHorizontal, MessageSquare } from 'lucide-react';
import AnimatedVideoImage from '../assets/animated-video.png';
const features = [
  { icon: <Film />, title: '2D/3D Animation' },
  { icon: <Mic />, title: 'Voice Over' },
  { icon: <Video />, title: 'Explainer Videos' },
  { icon: <Edit3 />, title: 'Script Writing' },
  { icon: <SlidersHorizontal />, title: 'Motion Graphics' },
  { icon: <MessageSquare />, title: 'Storytelling' },
];

const AnimatedVideos = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Animated Video Production</h2>
          <p className="text-lg text-gray-800 mb-10">
            We bring your ideas to life through engaging, visually striking animated content that captivates your audience.
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
          <img src={AnimatedVideoImage} alt="Animated Video" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedVideos;
