import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IMG from "../assets/me.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false,
    });
  }, []);

  return (
    <div id="about" className="about">
      <div className="content">
        <h3 className="about-sub" data-aos="fade-up">ABOUT ME</h3>
        <h1 className="about-heading" data-aos="fade-up" data-aos-delay="200">
          "I am a <span className="Animate">PASSIONATE</span> Computer Science student and 
          software developer dedicated to building <span className="Animate">EFFICIENT, SCALABLE</span> 
          and <span className="Animate">USER-FRIENDLY</span> applications that make an IMPACT."
        </h1>
      </div>

      {/* Right Side (Image) */}
      <div className="about-img" data-aos="fade-left" data-aos-delay="300">
        <img src={IMG} alt="me" />
      </div>
    </div>
  );
};

export default About;
