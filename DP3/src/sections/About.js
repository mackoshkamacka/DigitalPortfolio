import React, { useRef } from 'react';
import './About.css'; 
import ubcLogo from '../images/ubcLogo.png';
// import headshot from '../images/headshot.png'; 
import Languages from '../components/languages/Languages';
import Courses from '../components/courses/Courses';
import Projects from './Projects'
import Experience from './Experience'
import LibsAndFrameworks from '../components/LibsAndFrameworks/LibsAndFrameworks';


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
                            <h4 className = "skill4">Languages</h4>
                            <Languages />
                        </div>
                        <div>
                            <h4 className = "skill4">Frameworks; Libraries; & DevTools</h4>
                            <LibsAndFrameworks />
                        </div>
                        <div className = "courProf"> 
                            <h4 className = "skill4">Courses</h4>
                            <Courses />
                        </div>
                    </div>
                </div>
                <div className="rightSideAbout" ref={cardRef} onMouseMove={handleMouseMove}>
                    <div className="rightSideAbout-content">
                        <Experience />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default About;
  