'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) {
      alert('Please fill in all fields.');
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      name,
      quantity: parseInt(quantity, 10),
      category,
    };
    onAddItem(newItem);

    // Reset form fields
    setName('');
    setQuantity(1);
    setCategory('');

    // Show success message
    setSuccessMessage('Item added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '1rem',
        backgroundColor: '#252946',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          flex: '1',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          color: '#000000',
          backgroundColor: '#ffffff',
        }}
        required
      />
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <button
          type="button"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          style={{
            padding: '10px',
            backgroundColor: '#e2e6ea',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          style={{
            width: '50px',
            textAlign: 'center',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: '#000000',
            backgroundColor: '#ffffff',
          }}
        />
        <button
          type="button"
          onClick={() => setQuantity((prev) => prev + 1)}
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          flex: '1',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          color: '#000000',
        }}
        required
      >
        <option value="">Category</option>
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
        <option value="Dairy">Dairy</option>
        <option value="Household">Household</option>
        <option value="Meat">Meat</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Canned Goods">Canned Goods</option>
      </select>
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        +
      </button>
      {successMessage && (
        <p
          style={{
            flexBasis: '100%',
            textAlign: 'center',
            color: 'green',
            marginTop: '10px',
          }}
        >
          {successMessage}
        </p>
      )}
    </form>
  );
}
