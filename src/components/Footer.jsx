import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Aries Builders. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/DJDevJams" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/alex.art.brown" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://soundcloud.com/alex-b-142751804?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer">
          SoundCloud
        </a>

      </div>
    </footer>
  );
};

export default Footer;

