import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">Serene Soul</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;