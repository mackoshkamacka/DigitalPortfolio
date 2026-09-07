import React, { useRef } from 'react';
import './About.css'; 
import ubcLogo from '../images/ubcLogo.png';
// import headshot from '../images/headshot.png'; 
import Languages from '../components/languages/Languages';
import Courses from '../components/courses/Courses';
import Projects from './Projects'


const About = () => {

    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div classname = "parent">
            <div className="aboutSec">
                <div className = "leftSideAbout">
                    {/* <img src= {headshot} alt="headshot" className="headshot"/> */}
                    <h3>EDUCATION</h3>
                    <div className = "edu">
                        <div>
                            <img src={ubcLogo} alt="UBC logo" className="ubcLogo" />
                        </div>
                        <div className = "eduContent">
                            <h3 className="edu3a">Combined Major in</h3>
                            <h3 className="edu3b">Computer Science and Mathematics</h3>
                            <h4 className="edu4">The University of British Columbia</h4>
                            <p className = "edup">BSc. September 2024-August 2028</p>
                        </div>
                    </div>
                    <h3>SKILLS</h3>
                    <div className="skills">
                        <div className = "langFrame"> 
                            <h4 className = "skill4">Languages & Frameworks</h4>
                            <Languages />
                        </div>
                        <div className = "courProf"> 
                            <h4 className = "skill4">Courses</h4>
                            <Courses />
                        </div>
                    </div>
                </div>
                <div className = "rightSideAbout" ref={cardRef} onMouseMove={handleMouseMove}>
            
                    <h2>ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.</p> 
                     <h2>TECHNICAL WORK EXPERIENCE</h2>
                    <Projects /> 
                </div>
            </div>
        </div>
    );
  };
  
  export default About;
  