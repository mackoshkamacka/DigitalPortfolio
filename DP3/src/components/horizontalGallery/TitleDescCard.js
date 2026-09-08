import React from 'react';
import './TitleDescCard.css';

const TitleDescCard = ({ title, description, projectUrl, githubUrl, githubIcon }) => {
  return (
    <div className="tdcard">
      <div className="tdcard-title-col">
        <h3 className="tdcard-title">{title}</h3>
      </div>

      <div className="tdcard-content-col">
        <p className="tdcard-description">{description}</p>
        {/* <div className="tdcard-actions">
          <a href={projectUrl} className="tdcard-link">View Project</a>
          <a 
            href={githubUrl}
            className="tdcard-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <img src={githubIcon} alt="" className="tdcard-github-icon" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default TitleDescCard;