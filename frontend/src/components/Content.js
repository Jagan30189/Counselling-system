import React from 'react';

const Content = ({ title = "Default Title", items = [] }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
