import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ course }) => {
  return (
    <div className="description-box">
      {course ? (
        <>
          <h5>{course.title} — {course.courseTitle}</h5>
          <p>{course.desc}</p>
        </>
      ) : (
        <p className="description-box__placeholder">Hover a course to see details.</p>
      )}
    </div>
  );
};

export default DescriptionBox;