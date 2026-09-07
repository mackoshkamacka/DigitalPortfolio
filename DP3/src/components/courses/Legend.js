import React from 'react';
import './Legend.css';

const items = [
  { label: "Core Course", className: "core" },
  { label: "Recent", className: "related" },
  { label: "General & Breadth", className: "general" },
];

const Legend = () => (
  <div className="legend">
    {items.map((item) => (
      <div className="legend-item" key={item.className}>
        <span className={`legend-dot legend-dot--${item.className}`} />
        {item.label}
      </div>
    ))}
  </div>
);

export default Legend;