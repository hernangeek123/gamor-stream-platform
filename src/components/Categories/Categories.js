import React from 'react';
import './Categories.css';

const Categories = ({ theme }) => {
  const categories = [
    'Action Games',
    'Sports Games',
    'Adventure Games',
    'Arcade Games',
    'Fantasy Games',
    'Strategy Games',
    'Shooter Games',
    'All Categories'
  ];

  return (
    <div>
      <h2>Trending Categories</h2>
      <div className={`categories-grid ${theme}`}>
        {categories.map((category, index) => (
          <div key={index} className={`category-tile ${theme} ${category === 'Shooter Games' ? 'highlighted' : ''}`}>
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;