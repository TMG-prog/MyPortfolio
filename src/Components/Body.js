//import { FaGithub, FaLinkedin } from "react-icons/fa";
//import Avatar from '../assets/me.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <p className="intro-text">Hello!, I am </p>
                <h1 className="headline">Mugure Gitau.</h1>
                <h2 className="subheadline">A Software Developer Coding Solutions That Adapt to the Modern World.</h2>
                
                <a href="#projects"><button className="cta-button">Check out my work!</button></a>
                <a href="https://www.canva.com/design/DAGXa0wLcZE/dnwPclk1n6vh_ITlrI7ryw/view?utm_content=DAGXa0wLcZE&utm_campaign=designshare&utm_medium=link&utm_source=editor" ><button className="Resume">Resume</button></a>
               </div>
        </div>
    );
};

export default Body;