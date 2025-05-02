import React from 'react';
import './Card.css'; 

const Card = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="card-link">View Project</a>
      </div>
    </div>
  );
};

export default Card;
