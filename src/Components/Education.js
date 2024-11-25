import React from "react";


const Education = () => {
  const educationData = [
    {
      year: "2023 - Present",
      institution: "Strathmore University",
      degree: "Bachelor's in Computer Science",
      description: "Acquiring a solid foundation in programming, algorithms, and modern software development practices."
    },
    {
      year: "2018 - 2022",
      institution: "PLP Academy",
      degree: "Awaiting certification",
      description: "Acquiring practical knowledge of software development"
    }
  ];

  return (
    <section className="education">
        <div id="education">
      <h2 className="education-title">Education</h2>
      <div id="education" className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <span className="education-year">{edu.year}</span>
            <div className="education-details">
              <h3>{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Education;
