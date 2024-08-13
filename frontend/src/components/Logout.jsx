import React from 'react';
import { useAuth } from '../context/AuthContext';


const Logout = () => {
  const { logout } = useAuth(); // Destructure logout method

  const handleLogout = () => {
    logout(); // Call logout method from AuthContext
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
