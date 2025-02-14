import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaJava, FaDatabase, FaPython, FaNodeJs, FaDocker } from "react-icons/fa";
import { DiDart } from "react-icons/di";
import { SiPandas, SiFlutter, SiFlask, SiDjango } from "react-icons/si";


const skillsArr = [
  { name: "JavaScript", icon: FaJs },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "Git", icon: FaGithub },
  { name: "React.js", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "MySQL", icon: FaDatabase },
  { name: "Python", icon: FaPython },
  { name: "Dart", icon: DiDart },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Pandas", icon: SiPandas },
  { name: "Flutter", icon: SiFlutter },
  { name: "Flask", icon: SiFlask },
  { name: "Django", icon: SiDjango },
  { name: "Docker", icon: FaDocker },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h3 className="skills-title">SKILLS</h3>
      <div className="slider">
        <div className="slider-track">
          {[...skillsArr, ...skillsArr].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card">
                <Icon className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
