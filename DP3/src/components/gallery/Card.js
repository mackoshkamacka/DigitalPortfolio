import React from 'react';
import './Card.css'; 
import githubIcon from "../../images/icons/gitHub_icon.webp"

const Card = ({ title, description, imageUrl, projectLink, githubLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="card-link">View Project</a>
          <a
            href={githubLink}
            className="card-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <img src={githubIcon} alt="" className="card-github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
