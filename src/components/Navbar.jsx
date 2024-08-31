import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();  // Hook to get the current location (URL path)

  return (
    <ul className="flex space-x-4 bg-orange-600 p-4 text-white">
      <li className="nav-item">
        <Link
          to="/"
          // Use Tailwind classes to style the active and inactive links
          className={location.pathname === '/' ? 'nav-link active text-orange-400' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === '/portfolio' ? 'nav-link active text-orange-400' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'nav-link active text-orange-400' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={location.pathname === '/resume' ? 'nav-link active text-orange-400' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
