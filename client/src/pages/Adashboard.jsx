import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Adashboard = () => {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchDashboard = async () => {
  //     try {
        // const token = localStorage.getItem('token');
  //       const res = await axios.get('http://localhost:5000/api/admin/dashboard', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setMessage(res.data.message);
  //     } catch (err) {
  //       setMessage('Access denied. Please login.');
  //     }
  //   };
  //   fetchDashboard();
  // }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      {/* <p>{message}</p> */}
      <h1> dekejdkl </h1>
    </div>
  );
};

export default Adashboard;
