import React from 'react';

const Price = ({ credits }) => {
  return (
    <span className="price">{`${(credits / 100).toFixed(2)} credits`}</span>
  );
};

export default Price;
