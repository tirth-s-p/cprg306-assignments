"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(0, prev - 1));

  return (
    <div className="p-6 bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Item Name Field */}
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="col-span-2 p-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white/70"
        />

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            value={quantity}
            readOnly
            className="w-12 text-center border border-white rounded-md text-black bg-white/70"
          />
          <button
            type="button"
            onClick={handleDecrease}
            className={`p-2 rounded-full ${
              quantity > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-200"
            }`}
          >
            -
          </button>
          <button
            type="button"
            onClick={handleIncrease}
            className={`p-2 rounded-full ${
              quantity > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-200"
            }`}
          >
            +
          </button>
        </div>

        {/* Category Selector */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white/70"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </form>
    </div>
  );
}
