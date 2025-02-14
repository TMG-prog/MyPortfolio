import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  const educationData = [
    {
      year: "2023 - Present",
      institution: "Strathmore University",
      degree: "Bachelor's in Computer Science",
      description:
        "Acquiring a solid foundation in programming, algorithms, and modern software development practices.",
    },
    {
      year: "2018 - 2022",
      institution: "PLP Academy",
      degree: "Awaiting certification",
      description: "Acquiring practical knowledge of software development",
    },
  ];

  return (
    <section className="education" data-aos="fade-in">
      <h3 className="education-title" data-aos="fade-up">
        EDUCATION
      </h3>

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item" data-aos="fade-right">
            <span className="education-year">{edu.year}</span>
            <div className="education-details">
              <h3>{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
