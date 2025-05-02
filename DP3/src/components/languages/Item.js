import React from 'react';
import './Item.css';

const Item = ({ title, logo }) => {
  return (
    <div className="item">
      <img src={logo} alt={title} className="item-image" />
      <p className="item-text">{title}</p>
    </div>
  );
};

export default Item;
