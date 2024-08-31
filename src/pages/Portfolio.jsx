import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project 
          title="City Event Tracker" 
          image="./src/assets/images/city_eventtracker.jpg" 
          link="https://djdevjams.github.io/city_eventtracker/" 
          repo="https://github.com/DJDEVJAMS/city_eventtracker"
        />
         <Project 
          title="Bonfire" 
          image="./src/assets/images/bonfire.jpg" 
          link="https://bonfire-lgkj.onrender.com/" 
          repo="https://github.com/your-repo"
        />
       

      </div>
    </section>
  );
};

export default Portfolio;

