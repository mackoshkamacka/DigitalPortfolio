import React from 'react';
import './CourseItem.css';

const CourseItem = ({ title, courseTitle, desc }) => {
  return (
    <div className="courseItem">
      <span className="tooltip">
        {title}
        <div className="tooltip-bubble">
          <h5>{courseTitle}</h5>
          <p>{desc}</p>
        </div>
        <div className="tooltip-arrow" />
      </span>
    </div>
  );
};

export default CourseItem;
