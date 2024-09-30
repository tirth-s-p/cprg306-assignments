// /app/week-3/item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 bg-gray-800 shadow-lg rounded-md mb-3 text-left">
      <div className="font-semibold text-xl text-white">{name}</div>
      <div className="text-gray-400 text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
