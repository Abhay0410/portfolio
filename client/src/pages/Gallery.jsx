// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchGalleryItems = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`);
//         setGalleryItems(response.data);
//       } catch (err) {
//         setError("Failed to load gallery items.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGalleryItems();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryItems.map((item) => (
//             <div key={item._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
//                 alt={item.title}
//                 className="w-full h-64 object-cover rounded mb-4"
//               />
//               <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//               <p className="text-sm text-gray-500">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     const fetchGalleryItems = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`);
//         setGalleryItems(response.data);
//       } catch (err) {
//         setError("Failed to load gallery items.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGalleryItems();
//   }, []);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   return (
//     <div className="min-h-screen p-8" style={{ background: "linear-gradient(135deg, #433878 0%, #7E60BF 35%, #E4B1F0 75%, #FFE1FF 100%)" }}>
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-10 text-white relative">
//           <span className="relative inline-block">
//             Gallery
//             <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/70 rounded"></span>
//           </span>
//         </h1>
        
//         {error && (
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-lg">
//             <p>{error}</p>
//           </div>
//         )}
        
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryItems.length > 0 ? (
//               galleryItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white"
//                   onClick={() => handleItemClick(item)}
//                 >
//                   <div className="relative overflow-hidden h-64">
//                     <img
//                       src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
//                       alt={item.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                       <div className="p-4 w-full">
//                         <h3 className="text-lg font-semibold text-white">{item.title}</h3>
//                         <p className="text-sm text-purple-100 line-clamp-2">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold text-purple-900">{item.title}</h3>
//                     <p className="text-sm text-purple-700 mt-1">{item.description}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center py-12 text-white bg-purple-900/20 backdrop-blur-sm rounded-lg">
//                 No gallery items found.
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Modal for enlarged view */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-purple-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
//           <div 
//             className="rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl" 
//             onClick={(e) => e.stopPropagation()}
//             style={{ background: "linear-gradient(to bottom right, #7E60BF, #E4B1F0)" }}
//           >
//             <div className="relative bg-white">
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/uploads/${selectedItem.image}`}
//                 alt={selectedItem.title}
//                 className="w-full object-contain max-h-[70vh]"
//               />
//               <button 
//                 className="absolute top-2 right-2 bg-purple-900/50 text-white rounded-full p-2 hover:bg-purple-900/70 transition-colors"
//                 onClick={closeModal}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-6 text-white">
//               <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
//               <p className="mt-2 text-purple-100">{selectedItem.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`);
        setGalleryItems(response.data);
      } catch (err) {
        setError("Failed to load gallery items.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "linear-gradient(135deg, #433878 0%, #7E60BF 35%, #E4B1F0 75%, #FFE1FF 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-white relative">
          <span className="relative inline-block">
            Gallery
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/70 rounded"></span>
          </span>
        </h1>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-lg">
            <p>{error}</p>
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.length > 0 ? (
              galleryItems.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Subtle hover effect without text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-purple-900">{item.title}</h3>
                    <p className="text-sm text-purple-700 mt-1">{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-white bg-purple-900/20 backdrop-blur-sm rounded-lg">
                No gallery items found.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal for enlarged view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-purple-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div 
            className="rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
            style={{ background: "linear-gradient(to bottom right, #7E60BF, #E4B1F0)" }}
          >
            <div className="relative bg-white">
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${selectedItem.image}`}
                alt={selectedItem.title}
                className="w-full object-contain max-h-[70vh]"
              />
              <button 
                className="absolute top-2 right-2 bg-purple-900/50 text-white rounded-full p-2 hover:bg-purple-900/70 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
              <p className="mt-2 text-purple-100">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;