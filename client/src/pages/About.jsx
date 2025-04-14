import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Heroabout from '../assets/project-employee-management.jpg'; 

const About = () => {
  return (
    <div>
    
      <div
        className="relative py-20 px-6 text-center text-white"
        style={{
          backgroundImage: `url('${Heroabout}')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-snug">
            "Empowering Businesses,<br/> Elevating Digital Success!!!"
          </p>
          <p className="text-xl md:text-2xl font-medium text-white">
            We are more than just a digital marketing company. We are your growth partners in the ever-evolving digital landscape. With a passion for innovation and a data-driven approach, we craft result-oriented strategies that help businesses thrive online.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">The brand focused digital agency</p>
            <p className="text-gray-700 text-lg">
              We’re passionate professionals who push the boundaries of technology to come up with brilliant ideas to serve your brand.
            </p>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-700 text-lg mb-4">
              We are a bunch of energetic young professionals united by creativity and a passion for digital.We’re headquartered in Bhilai, the city of happenings in India and have clients across the country and beyond her borders.
            </p>
            <p className="text-gray-700 text-lg">
              We Design is an all-in-one digital agency that can deliver a complete suite of digital marketing services. Our unique approach, sense of design, and content gravity allow us to seamlessly leap from client to client and project to project.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Mastery",
                desc: "Constant repetition of processes leads to mastery. We've been honing our craft and improving our processes for years, every day."
              },
              {
                title: "Dependability",
                desc: "You can't create value without a trusted partner. Staying true to our word is an intrinsic need, not just an external obligation."
              },
              {
                title: "Passion",
                desc: "A true love for what you do manifests in where you invest your time. The passion for our work is quiet and calm, yet potent."
              },
              {
                title: "Flexibility",
                desc: "We rely on our processes but adapt to the specific needs of projects or partners. Flexibility leads to lasting improvements."
              },
              {
                title: "Discipline",
                desc: "Discipline starts within and shapes all our processes. Though meticulous, our standards ensure solid long-term delivery."
              },
              {
                title: "Creativity",
                desc: "We combine inspiration with workflow to foster systematic creativity and deliver predictable results."
              }
            ].map((item, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">What Our Clients Say</h2>
  
  <Swiper
    modules={[Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {[
      {
        message: `I am very satisfied with the work they have done on my website. Since beginning the team was very cooperative and professional.`,
        name: 'Vinay Kedia',
        title: 'VK Ventures',
      },
      {
        message: `Very happy with the development of our video production company website using WordPress as the CMS.`,
        name: 'Ashutosh Singh',
        title: 'CEO',
      },
      {
        message: `These guys are the best. We have received multiple positive remarks regarding the flow of information and ease of use.`,
        name: 'Niraj Vasisht',
        title: 'CEO',
      },
      {
        message: `Thanks to Xee Design Team & Mr. Nithin Raj for creating our Institute Web. The staffs were cooperative & flexible.`,
        name: 'Niraj Vasisht',
        title: 'Jataj Maritime Training Foundation',
      },
    ].map((testimonial, idx) => (
      <SwiperSlide key={idx}>
        <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
          <p className="text-gray-700 text-base mb-4">"{testimonial.message}"</p>
          <div>
            <p className="text-gray-900 font-bold">{testimonial.name}</p>
            <p className="text-purple-600">{testimonial.title}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default About;
