
//import IMG from '../assets/Detective.png';
import IMG from '../assets/me.jpg'
const About = () => {
    return (
        <div id= "about" className='about'>
            <h1 className='about-heading'>About Me</h1>
            <div className='about-info'>

            <div className='about-img'>
    <div className = "about-img-wrapper">
       <img src={IMG} alt='A picture of me'></img>
    </div>

                <p className='about-desc'>"I am a Kenyan software developer driven by a passion for exploring the ever-evolving world of technology. Currently pursuing a Bachelor’s degree in Computer Science.
                    I thrive on continuous learning and innovation. I hope you enjoy exploring some of the projects I've worked on as part of my journey in tech."</p>

            </div>
       </div></div>

    )
}
export default About;