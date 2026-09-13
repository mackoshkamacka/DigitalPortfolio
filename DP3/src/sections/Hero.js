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
        I'm a Math & CS student at UBC, targeting full-stack SWE and research roles. 
        Currently, most of my time is spent doing research at UBC's visual Cognition Lab (NOVA Project),
        and helping build/maintain UBC's Science Undergraduate Society's website.
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