import React from 'react';
import './CourseItem.css';

const CourseItem = ({ title, courseTitle, desc, relevance = "general", onHover }) => {
  return (
    <div
      className={`courseItem tooltip tooltip--${relevance}`}
      onMouseEnter={() => onHover({ title, courseTitle, desc })}
      onMouseLeave={() => onHover(null)}
    >
      {title}
    </div>
  );
};

export default CourseItem;