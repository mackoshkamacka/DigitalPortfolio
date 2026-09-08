import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />

      {/* <span className="hero-badge">Open to co-op & internship opportunities</span> */}

      <h1 className="hero-title">
        MARK <br/> EVRO  
      </h1>

      <p className="hero-subtitle">
        I'm a Math & CS student at UBC, interested in full-stack SWE and research. 
        Currently, most of my time is spent doing research at UBC's visual Cognition Lab (NOVA Project),
        and helping build/maintain UBC's Science Undergraduate Society's webs
      </p>

      {/* <div className="hero-actions">
        <a href="#projects" className="hero-btn hero-btn--primary">View my work</a>
        <a href="#about" className="hero-btn hero-btn--secondary">Get in touch</a>
      </div> */}

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-dot" />
      </div>
    </section>
  );
};

export default Hero;