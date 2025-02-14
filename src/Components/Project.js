import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const projects = [
    {
      title: "Mazao-Hub",
      description:
        "A web application meant to connect farmers with buyers directly and eliminate middlemen.",
      image: "/Mazaohubpic.png",
    },
    {
      title: "Taste of Africa",
      description: "African Food Recipe App",
      image: "/RecipeApp.png",
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
    <div id="projects" className="projects-slider">
      <h1 className="title" data-aos="fade-up">MY PROJECTS</h1>

      <div className="slider-container">
        {/* Left Side - Project Image with AOS Animation */}
        <div className="project-image" data-aos="fade-right">
          <img
            src={projects[currentSlide].image}
            alt={projects[currentSlide].title}
            className="slider-image"
          />
        </div>

        {/* Right Side - Project Info with AOS Animation */}
        <div className="project-info" data-aos="fade-left">
          <h2>{projects[currentSlide].title}</h2>
          <p>{projects[currentSlide].description}</p>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        <button className="prev-btn" onClick={prevSlide}>❮</button>
        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Project;
