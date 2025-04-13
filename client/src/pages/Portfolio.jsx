const Portfolio = () => {
    return (
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Portfolio</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          A glimpse of the projects we've worked on. Each one tells a unique story.
        </p>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-4 rounded-lg"></div>
          <div className="bg-gray-100 p-4 rounded-lg"></div>
          <div className="bg-gray-100 p-4 rounded-lg"></div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  