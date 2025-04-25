import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import axios from "axios";
// import Heroabout from "../assets/project-employee-management.jpg";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`);
        setTestimonials(res.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/project-employee-management.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Businesses,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              Elevating Digital Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
            We are more than just a digital marketing company. We are your growth partners in the ever-evolving digital landscape.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-4xl md:text-5xl font-extrabold mb-4 leading-relaxed">
              The Brand Focused Digital Agency
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Who We Are</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We're passionate professionals who push the boundaries of technology to come up with brilliant ideas to serve your brand. We believe in creating digital experiences that captivate, engage, and convert.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="h-14 w-1 bg-blue-600 rounded-full"></div>
                <p className="text-xl font-medium text-blue-900">Over 5 years of collective experience in digital innovation</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                We are a bunch of energetic young professionals united by creativity and a passion for digital. We're headquartered in Mumbai, the city of happenings in India and have clients across the country and beyond.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We Design is an all-in-one digital agency that delivers a complete suite of digital marketing services. Our unique approach, sense of design, and content gravity allow us to seamlessly leap from client to client and project to project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
    
<div className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
    <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-2">What Our Clients Say</h2>
    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Real experiences from businesses we've helped grow and transform in the digital landscape.
    </p>
  </div>

  <div className="max-w-5xl mx-auto">
    <Swiper
      modules={[Autoplay, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      pagination={{ 
        clickable: true,
        bulletClass: 'swiper-pagination-bullet bg-blue-600 w-3 h-3 mx-1 rounded-full opacity-50 cursor-pointer transition-opacity',
        bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600 opacity-100'
      }}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: true },
      }}
      className="testimonial-swiper py-12"
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between transition-all duration-300 transform hover:scale-105 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            
            {/* Rating stars - optional */}
            <div className="flex mb-4 text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            {/* Testimonial text */}
            <p className="text-gray-700 text-lg italic mb-6 flex-grow">{testimonial.message}</p>
            
            <div className="mt-auto">
              {/* Decorative line with gradient */}
              <div className="h-px w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 my-4"></div>
              
              {/* Client info with image placeholder */}
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
    </div>
  );
};

export default About;
