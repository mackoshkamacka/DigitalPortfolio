import React from 'react';
import Item from './Item'; 
import './Languages.css';

import pythonIcon from '../../images/icons/python_icon.webp';
import cPlusPlusIcon from '../../images/icons/c++_icon.webp';
import javaIcon from '../../images/icons/java_icon.png';
import javaScriptIcon from '../../images/icons/javaScrip_icon.png';
import htmlIcon from '../../images/icons/html_icon.webp';
import cssPlusIcon from '../../images/icons/css_logo.webp';
// import reactIcon from '../../images/icons/react_icon.webp';
import phpIcon from '../../images/icons/php_icon.webp';
import sqlIcon from '../../images/icons/sql_icon.png';
import rIcon from '../../images/icons/r_icon.webp';



const Languages = () => {
  const language = [
    {
        title: "Python",
        logo: pythonIcon,
    },
    {
        title: "C/C++",  
        logo: cPlusPlusIcon, 
    },
    {
        title: "Java",
        logo: javaIcon, 
    },
    {
        title: "JavaScript",
        logo: javaScriptIcon, 
    },
    {
        title: "HTML",
        logo: htmlIcon, 
    },
    {
        title: "CSS",
        logo: cssPlusIcon, 
    },
    {
        title: "PHP",
        logo: phpIcon, 
    },
    {
        title: "SQL (Postgres)",
        logo: sqlIcon, 
    },
    {
        title: "R",
        logo:rIcon, 
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

export default Languages;
