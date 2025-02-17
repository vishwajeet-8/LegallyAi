import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-semibold">Legally Ai</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
