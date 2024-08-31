import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <a href=".src/assets/docs/alexb_resume_2024.pdf" download className="text-blue-500 underline">Download My Resume</a>
      <h3 className="text-xl font-bold mt-4">Proficiencies</h3>
      <ul className="list-disc pl-5">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>...and more</li>
      </ul>
    </div>
  );
}

export default Resume;
