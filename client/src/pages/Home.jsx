import React from 'react';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div>
      {/* Improved Hero Section */}
      <div className="relative min-h-[91vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        />

        {/* Blue to Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0"></div>

        {/* Animated Bubbles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi There! –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              <Typewriter
                words={["Passionate", "Creative", "Digital", "Innovator", "Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-white text-2xl md:text-3xl font-medium max-w-2xl mx-auto mb-6 drop-shadow-lg">
            Crafting modern web experiences with clean code and creative UI
          </p>

          <p className="text-white/90 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Discover a suite of tailored solutions designed to elevate your brand in the digital realm.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/Projects">
              <button className="bg-[#123458] text-white px-8 py-4 rounded-full hover:bg-[#141b23] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-900/20">
                Explore Our Work
              </button>
            </Link>
            <Link to="/Contact">
              <button className="mt-4 sm:mt-0 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

     {/* Why Work With Me Section */}
     <section className="py-16 bg-[#EED9C4]">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#123458]">Why Work With Me?</h2>

        <div className="grid gap-10 md:grid-cols-3 px-6 max-w-7xl mx-auto">
          {[
            {
              title: "⚡ Fast Delivery",
              desc: "Projects delivered on time with efficient workflows and streamlined processes. We prioritize quick turnarounds without compromising quality, ensuring that your deadlines are always met while maintaining the highest standards of work.",
              bg: "bg-gradient-to-tr from-[#C9D6FF] to-[#E2E2E2]"
            },
            {
              title: "🎨 Reduce overheads costs",
              desc: "Optimize your operation and save expenses by outsourcing your design and development project to us instead of maintaining an in-house team. Let us handle everything efficiently.",
              bg: "bg-gradient-to-tr from-[#FFDEE9] to-[#B5FFFC]"
            },
            {
              title: "🧩 Clean & Scalable Code",
              desc: "We write clean, well-structured code that adheres to industry best practices, ensuring easy maintainability and scalability. Our solutions are designed to grow with your project, enabling smooth updates and enhancements as your needs evolve.",
              bg: "bg-gradient-to-tr from-[#D4FC79] to-[#96E6A1]"
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-xl p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-semibold text-[#123458] mb-4">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Trusted By Companies Section */}
      <section className="py-20 bg-[#f8f8ff]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#123458] mb-4">Trusted by Leading Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Our partners trust us to deliver quality and cutting-edge technology.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {[
              "netflix.png", "stripe.png", "mozilla.png", "adobe.png", "opera.png",
              "okta.png", "turbo.png", "citrix.png", "descript.png", "clearbit.png",
              "volusion.png", "xero.png", "oppo.png", "salesforce.png", "network.png"
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl p-4 shadow-lg transition-transform transform hover:scale-100 hover:shadow-2xl duration-500 ease-in-out"
              >
                <img
                  src={`/${logo}`}
                  alt={`${logo.split(".")[0]} Logo`}
                  className="object-contain w-full h-16 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
