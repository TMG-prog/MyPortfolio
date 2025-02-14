import React from 'react';
import mg from '../assets/MG.png'
//import {Link} from 'react-router-dom'
const Header = () => {
    return (
       
    
    
        <div className = "header">
            <div className = "header-logo">
                <img src={mg} alt=' Logo'></img>
            </div>
            <div className = "header-container">
                
                <div className= "nav-item"><a href= "#about">About</a></div>
                <div className= "nav-item"><a href= "#projects">Projects</a></div>
                <div className= "nav-item"><a href= "#footer">  Contact Me</a></div>

              
            </div>
        </div>
       
    )
}
    

export default Header;