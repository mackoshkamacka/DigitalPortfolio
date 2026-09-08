import React from 'react';
import Card from './Card';
import './Gallery.css';

import faceThumb from "../../images/projThumbs/faceForward_thumb.png";
import rdThumb from "../../images/projThumbs/rd-flg_thumb.png";
import snapThumb from "../../images/projThumbs/snapScan_thumb.png";


const Gallery = () => {
  const projects = [
    {
      title: 'Face Forward Humanitarian Association (Website)',
      description: 'Connected cosmetic artists to hospitals by linking service requests by architecting and building a full-stack platform on Next.js frontend and Firebase backend (converted from Express.js for Vercel deployment). ', 
      imageUrl: faceThumb,
      projectLink: 'https://faceforwardcanada.org/',
      githubLink:'https://github.com/mackoshkamacka/FaceForwardWebsite'
    },
    {
      title: 'rd-flg (nwHacks 2026)',
      description: 'Built a ToS analyzer using the Gemini API to parse and categorize predatory clauses in user agreements, with aggregated results stored in Firebase and displayed on responsive dashboards for businesses + consumers ', 
      imageUrl: rdThumb,
      projectLink: 'https://rd-flg.tech/',
      githubLink:'https://github.com/mackoshkamacka/nwHacks2026'
    },
    {
      title: 'SnapScan (HackCamp 2025)',
      description: 'Built a barcode-driven ethical shopping app in 24hrs that scanned 100+ UPC codes via ZXing, integrating OpenSourceFoods and BarcodeScanner APIs to surface health and ethical ratings with Tailwind UI ', 
      imageUrl: snapThumb,
      projectLink: 'https://rd-flg.tech/',
      githubLink:'https://github.com/mackoshkamacka/nwHacks2026'
    },
    
    // Add more projects here
  ];

  return (
    <div className="galleryContainer"> 
        <div className="gallery">
        {projects.map((project, index) => (
            <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            />
        ))}
        </div>
    </div>
  );
};

export default Gallery;
