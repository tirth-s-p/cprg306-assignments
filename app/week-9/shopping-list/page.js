'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to handle item selection and clean the name
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(',')[0] // Remove quantity info
      .replace(/[^a-zA-Z\s]/g, '') // Remove emojis and special characters
      .trim(); // Trim extra spaces
    setSelectedItemName(cleanedName);
  };

  return (
    <main
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        margin: '20px auto',
        backgroundColor: '#1e2139',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        color: '#ffffff',
      }}
    >
      {/* Shopping List Section */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '24px',
          }}
        >
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Meal Ideas Section */}
      <div style={{ flex: 1 }}>
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
            Select an item to see meal ideas
          </h2>
        )}
      </div>
    </main>
  );
}
