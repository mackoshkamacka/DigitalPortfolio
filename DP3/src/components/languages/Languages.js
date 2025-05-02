import React from 'react';
import Item from './Item'; 
import './Languages.css';

const Languages = () => {
  const language = [
    {
        title: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" ,
    },
    {
        title: "C/C++",  
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png", 
    },
    {
        title: "Java",
        logo: "https://cdn.worldvectorlogo.com/logos/java-14.svg", 
    },
    {
        title: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png?20120221235433 ", 
    },
    {
        title: "HTML",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png", 
    },
    {
        title: "CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png", 
    },
    {
        title: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png", 
    },
    {
        title: "PHP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", 
    },
    {
        title: "SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/800px-Sql_data_base_with_logo.png?20210130181641", 
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
