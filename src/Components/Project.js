import React, { useState } from 'react';


const Project = () => {
 
  const projects = [
    {
      title: 'Mazao-Hub',
      description: 'A web application meant to connect farmers with buyers direclty and eliminating middle men. ',
      image: '/mazaohubpic.png'
    },
    {
      title: 'Taste of Africa',
      description: 'African Food Recipe App',
      image: '/RecipeApp.png'
    },
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
   
    <div id= "projects" className="projects-slider">
        
      <div className="slider-container">
        <div className="slider-item">
        <h1>MY PROJECTS</h1>
          <img src={projects[currentSlide].image} alt={projects[currentSlide].title} className="slider-image" />
          <div className="slider-info">
            <h3>{projects[currentSlide].title}</h3>
            <p>{projects[currentSlide].description}</p>
          </div>
        </div>
      </div>

      <div className="slider-controls">
        <button className="prev-btn" onClick={prevSlide}>❮</button>
        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Project;


 
