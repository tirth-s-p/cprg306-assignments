'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main
      style={{
        width: '100%',
        maxWidth: '700px',
        padding: '20px',
        margin: '20px auto',
        backgroundColor: '#1e2139',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          fontSize: '24px',
          color: '#ffffff',
        }}
      >
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
