import React from 'react';
import './HorizontalGallery.css';

const Gallery2 = () => {
  const projects = [
    {
      title: 'Co-Pilot Research Assistant',
      subtitle: 'University of British Columbia - Visual Cognition Lab - NOVA',
      duration: 'May 2026 - Present',
      description: 'Analyzed 500+ participants’ data using Jupyter/Python; Interpreted 20+ metrics for inattentional blindness under 5+ conditions. Created conditions using GIMP to support ongoing cognitive vision research; and performed literature review and process documentation. Supported cross-project lab initiatives, met milestone check-ins with supervising PI, and collaborated with lab members.',
    },
    {
      title: 'Website Developer',
      subtitle: 'Freelance',
      duration: 'Jan 2024 - Present',
      description: 'Designed and shipped responsive sites. Delivered complete website solutions for Adventure Osteopathy and Universal Voices non-profit.',
    },
    {
      title: 'Coding Instructor',
      subtitle: 'Code Ninjas, Calgary',
      duration: 'Jan 2024 - July 2025',
      description: 'Taught 100+ students coding fundamentals and DSA through game-based projects; improving retention by 16%.',
    },

    // Add more projects here
  ];

  return (
    <div className="gallery2">
      {projects.map((project) => (
        <div className="gallery2-card" key={project.title}>
          <h3 className="gallery2-title">{project.title}</h3>
          <div className="gallery2-meta">
            <span className="gallery2-subtitle">{project.subtitle}</span>
            <span className="gallery2-dot">•</span>
            <span className="gallery2-duration">{project.duration}</span>
          </div>
          <p className="gallery2-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery2;