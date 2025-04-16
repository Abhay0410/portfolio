import React from "react";
import portfolio from "../assets/portfolio.png";
import recipe from "../assets/recipebook.png";
import todo from "../assets/todo.png";
import app from "../assets/weatherapp.png";
import ms from "../assets/bbms.png";
import cl from "../assets/gemini.png"; 

const projects = [
  {
    title: "Portfolio Website",
    description: " A portfolio is a curated collection of work that showcases a person's skills, experience, and accomplishments. It serves as a visual representation of an individual's professional journey, offering potential clients or employers insight into their abilities. For a web developer, a portfolio typically includes projects, designs as it visually communicates one's capabilities and previous work experiences.", 
    image: portfolio,
    github: "https://github.com/yourusername/portfolio", 
  },
  {
    title: "Recipe Book App",
    description: "This recipe book website offers a collection of delicious recipes from various cuisines. Users can browse, search, and save their favorite dishes with ease. Featuring step-by-step instructions, images, and categories, it provides a user-friendly experience for cooking enthusiasts and beginners alike, making meal planning simple and enjoyable.", 
    image: recipe,
  },
  {
    title: "Gemini Clone",
    description:"This Gemini clone website replicates the functionality of Google's Gemini AI platform. It allows users to interact with an AI chatbot, ask questions, and receive smart, conversational responses. Built with modern web technologies, it features a sleek interface, real-time interactions, and showcases the power of AI-driven communication.", 
    image: cl,
  },
  {
    title: "Blood Bank management system",
    description:"This Blood Bank Management System website streamlines blood donation and request processes. It connects donors, hospitals, and recipients efficiently. Users can register, search for blood types, and request or donate blood. With real-time inventory updates and a user-friendly interface, it ensures timely support and effective blood resource management." , 
    image: ms,
  },
  
  {
    title: "Weather App",
    description: " This weather website provides real-time weather updates, forecasts, and location-based reports. Users can check temperature, humidity, wind speed, and conditions for any city worldwide. Featuring a clean design and responsive layout, it ensures accurate and quick access to weather data, helping users plan their day with confidence.", 
    image: app, 
  },
  {
    title: "Todo List App",
    description: " This to-do list website helps users organize tasks efficiently with a clean and intuitive interface. Users can add, edit, delete, and mark tasks as completed. Designed for productivity, it supports real-time updates and responsive design, making task management easy across all devices for students, professionals, and everyday users.", 
    image: todo,

  },
];

const Projects = () => {
  return (
    <section className="bg-[#F0F4F8] min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-[#161179] mb-2">Projects</h2>
      <p className="text-center text-[#161179] text-3xl mb-10">
        Some of the recent work I've built and deployed
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div
            key={index} className="bg-[#F1EFEC] rounded-xl shadow-lg hover:shadow-2xl transition duration-300"

          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-5">
              {/* <h3 className="text-xl font-semibold text-[#F1EFEC] mb-2">{proj.title}</h3> */}

              <h3 className="text-2xl font-semibold text-[#064283] mb-2 text-center">{proj.title}</h3>
              <p className="text-sm text-gray-900 mb-3 font-semibold">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;