// app/week-4/new-item.js
"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="absolute top-10 bg-white shadow-md p-4 rounded-md flex items-center space-x-4 w-56">
        <span className="text-lg font-bold text-black">{quantity}</span>
        <button
          onClick={decrement}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 disabled:bg-gray-300 w-10 h-10 flex justify-center items-center"
          disabled={quantity === 1}
        >
          -
        </button>
        <button
          onClick={increment}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 disabled:bg-gray-300 w-10 h-10 flex justify-center items-center"
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
