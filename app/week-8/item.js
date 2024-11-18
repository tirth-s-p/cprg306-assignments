'use client';

export default function Item({ item, onSelect }) {
  const categoryIcons = {
    Produce: '🍌',
    Bakery: '🍞',
    Dairy: '🥚',
    Household: '🧽',
    Meat: '🍗',
    Dry: '🍝',
    Canned: '🥫',
  };

  return (
    <li
      onClick={() => onSelect(item)}
      style={{
        padding: '10px',
        backgroundColor: '#252946',
        borderRadius: '5px',
        marginBottom: '10px',
        color: '#ffffff',
        cursor: 'pointer', // Indicate that the item is clickable
        transition: 'background-color 0.2s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#343a59')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#252946')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold' }}>
          {item.name.toLowerCase()} {categoryIcons[item.category]}
        </span>
        <span style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>
          Buy {item.quantity} in {item.category.toLowerCase()}
        </span>
      </div>
    </li>
  );
}
