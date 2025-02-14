

import {  FaGithub, FaInbox, FaLinkedin } from "react-icons/fa";

const Body = () => {
    return (
  
        <div id="body" className="body">

<nav class="side-nav">
        <ul>
            <li><a href="#"><i><FaGithub/></i></a></li>
            <li><a href="#"><i><FaInbox/></i></a></li>
            <li><a href="#"><i><FaLinkedin/></i></a></li>
        </ul>
    </nav>
            <div className="body-container">
               <h2>Hello, I am</h2>
                <h1 className="headline">MUGURE GITAU.</h1>
                <h2 className="subheadline">A Software Developer Coding Solutions That Adapt to the Modern World.</h2>
              
               </div>
               </div>
    );
};

export default Body;