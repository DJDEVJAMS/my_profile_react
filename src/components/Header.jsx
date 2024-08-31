// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-orange-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Alex Brown</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#resume" className="hover:underline">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
