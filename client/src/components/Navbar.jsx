import { Menu } from "lucide-react";
import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {


  return (
   <nav className="bg-gray-800 shadow">
  <div className="container mx-auto px-4 flex justify-between">
    <div className="flex justify-between items-center py-4">
      <a className="text-3xl font-bold text-white" href="#">My Room</a>
      <button className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-600"></span>
      </button>
    </div>
    <div className="hidden lg:flex lg:items-center lg:justify-between" id="navbarNav">
      <ul className="flex space-x-4">
        <li>
        <a className="text-gray-400 hover:text-blue-500 hover:scale-105 transition-transform duration-300" href="#">Register</a>
        </li>
       <li>
          <a className="text-gray-400 hover:text-blue-500 hover:scale-105 hover:transition-transform duration-300" href="#">Login</a>
        </li>
      
        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
