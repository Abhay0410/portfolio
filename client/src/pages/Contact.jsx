import React from 'react';
const Contact = () => {
    return (
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Get in Touch</h2>
        <form className="max-w-xl mx-auto mt-8 space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  