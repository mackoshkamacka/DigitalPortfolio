import React from 'react';
import Card from './Card';
import './Gallery.css';

const Gallery = () => {
  const projects = [
    {
      title: 'Spotify Big 5',
      description: 'Takes a Spotify user\'s listening history, performs a regression to find the Big 5 equivalent of the user\s taste.',
      imageUrl: 'https://via.placeholder.com/250',
      projectLink: 'https://example.com/project-one'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Another project that solves a different problem. llllllllllllll;;;;;;;;;;;;;;;;;;;;;;;;;;;;; lllllllllllllllllllllllllllllllllllllllllll',
      imageUrl: 'https://via.placeholder.com/250',
      projectLink: 'https://example.com/project-two'
    },
    
    // Add more projects here
  ];

  return (
    <div className="gallery">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default Gallery;
