import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin`, {
        username,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token); // Store token in local storage
      setMessage('Login successful!');
      alert('Login successful!');
      navigate("/adashboard"); // Redirect to dashboard after login

    } catch (err) {
      setMessage('Invalid credentials');
    }
  };

  const fetchDashboard = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Access denied');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full p-2 border mb-2"
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full p-2 border mb-2"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>

      {token && (
        <div className="mt-4">
          <button onClick={fetchDashboard} className="bg-green-600 text-white px-4 py-2 rounded">Access Dashboard</button>
        </div>
      )}

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default AdminLogin;
