import React from 'react';
// import SEOimg from '../assets/seo-service.png'; 
import {
  Search,
  TrendingUp,
  LineChart,
  Globe,
  FileSearch,
  MapPin,
  Activity,
  ClipboardCheck,
  BarChart2,
  RefreshCcw,
  MonitorCheck,
} from 'lucide-react';


const services = [
  { icon: <Search />, title: 'On-Page SEO' },
  { icon: <TrendingUp />, title: 'Keyword Optimization' },
  { icon: <LineChart />, title: 'Traffic Analytics' },
  { icon: <Globe />, title: 'Global & Local SEO' },
  { icon: <FileSearch />, title: 'Technical SEO Audits' },
  { icon: <MapPin />, title: 'Google My Business SEO' },
  { icon: <Activity />, title: 'Performance Tracking' },
  { icon: <ClipboardCheck />, title: 'SEO Reporting' },
  { icon: <BarChart2 />, title: 'Competitor Analysis' },
  { icon: <RefreshCcw />, title: 'Content Updates' },
  { icon: <MonitorCheck />, title: 'Website Monitoring' },
];

const SEO = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">SEO Optimization</h2>
          <p className="text-lg text-gray-800 mb-10">
            Increase your website’s visibility on search engines and attract high-quality organic traffic with expert SEO strategies tailored to your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-500 text-white font-medium px-5 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                </div>
                {service.title}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/seo-service.png" alt="SEO Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default SEO;
