'use client';

import { useState } from 'react';
import MealIdeas from './meal-ideas'; // Import the MealIdeas component

export default function ShoppingListPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        padding: '1rem',
        background: '#0d1117',
        height: '100vh',
        color: 'white',
      }}
    >
      {/* Left Panel: Input Form */}
      <div style={{ flex: 2 }}>
        <h1 style={{ color: 'white' }}>Shopping List</h1>
        {/* Input Form */}
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Item name"
            style={{
              padding: '10px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <button
              style={{
                padding: '10px',
                backgroundColor: '#1e1e2f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              -
            </button>
            <span style={{ margin: '0 10px', color: 'white' }}>1</span>
            <button
              style={{
                padding: '10px',
                backgroundColor: '#1e1e2f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              +
            </button>
            <select
              style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                background: '#1e1e2f',
                color: 'white',
              }}
            >
              <option>Produce</option>
              <option>Bakery</option>
              <option>Dairy</option>
            </select>
          </div>
          <button
            style={{
              padding: '10px 20px',
              marginTop: '10px',
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </div>

        {/* Sorting Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            style={{
              padding: '10px',
              backgroundColor: '#f7931e',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Name
          </button>
          <button
            style={{
              padding: '10px',
              backgroundColor: '#f7931e',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Category
          </button>
        </div>
      </div>

      {/* Right Panel: Meal Ideas */}
      <div style={{ flex: 1, background: '#1e1e2f', padding: '1rem', borderRadius: '8px' }}>
        <h2 style={{ color: 'white' }}>Meal Ideas</h2>
        <p>Select an item to see meal ideas</p>
        {selectedItem && <MealIdeas item={selectedItem} />}
      </div>
    </div>
  );
}
