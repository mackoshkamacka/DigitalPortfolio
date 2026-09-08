import React from 'react';
import Item from './Item'; 
import './LibsAndFrameworks.css';

import reactIcon from '../../images/icons/react_icon.webp';
import nextJsIcon from '../../images/icons/nextjs_icon.png'; 
import numPyIcon from '../../images/icons/numpy_icon.png'; 
import firebaseIcon from '../../images/icons/firebase_icon.png'; 
import matplotlibIcon from '../../images/icons/matplotlib_icon.webp'; 
import juintIcon from '../../images/icons/junit.svg'; 
import pandasIcon from '../../images/icons/pandas_icon.png';
import gitIcon from '../../images/icons/git_icon.png';
import gitHubIcon from '../../images/icons/gitHub_icon.webp';
import vercelIcon from '../../images/icons/vercel_icon.png';
import jupyterIcon from '../../images/icons/jupyter_icon.webp'; 



const LibsAndFrameworks = () => {
  const language = [
    {
        title: "React",
        logo: reactIcon, 
    },
    {
        title: "Next.js",
        logo: nextJsIcon, 
    },
    {
        title: "NumPy",
        logo: numPyIcon, 
    },
    {
        title: "Firebase",
        logo: firebaseIcon, 
    },    
    {
        title: "MatplotLib",
        logo: matplotlibIcon, 
    },
    {
        title: "Git",
        logo: gitIcon, 
    },

    {
        title: "Junit",
        logo: juintIcon, 
    },
    {
        title: "pandas",
        logo: pandasIcon, 
    },
    
    {
        title: "GitHub",
        logo: gitHubIcon, 
    },
    {
        title: "Vercel",
        logo: vercelIcon, 
    },
    {
        title: "Jupyter",
        logo: jupyterIcon, 
    },
  ];

  return (
    <div className="languages-container"> {}
      {language.map((lang) => (
        <Item
          key={lang.title} 
          title={lang.title}
          logo={lang.logo}
        />
      ))}
    </div>
  );
};

export default LibsAndFrameworks;
