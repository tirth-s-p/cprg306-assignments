'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Sorting logic
  const sortedItems = [...items].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Handle sort button clicks
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      {/* Sort Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <button
          onClick={() => handleSort('name')}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#f7931e',
            color: 'white',
          }}
        >
          Name
        </button>
        <button
          onClick={() => handleSort('category')}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#f7931e',
            color: 'white',
          }}
        >
          Category
        </button>
      </div>

      {/* Item List */}
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onItemSelect} // Pass the onItemSelect prop to each Item
          />
        ))}
      </ul>
    </div>
  );
}
