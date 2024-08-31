import React from 'react';


const Project = ({ title, image, link, repo }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
        </p>
        <p>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Repo</a>
        </p>
      </div>
    </div>
  );
};

export default Project;


