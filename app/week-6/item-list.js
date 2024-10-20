import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupedByCategory, setGroupedByCategory] = useState(false);

  // Sort the items based on sortBy state or groupedByCategory state
  const sortedItems = [...items].sort((a, b) => {
    if (groupedByCategory) {
      // When grouped, first sort by category, then by name within the category
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category using reduce if groupedByCategory is true
  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div>
      {/* Buttons to control sorting and grouping */}
      <div className="sort-buttons">
        <button
          onClick={() => {
            setGroupedByCategory(false);
            setSortBy('name');
          }}
          style={{ backgroundColor: sortBy === 'name' && !groupedByCategory ? 'lightblue' : 'white' }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setGroupedByCategory(false);
            setSortBy('category');
          }}
          style={{ backgroundColor: sortBy === 'category' && !groupedByCategory ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupedByCategory(true)}
          style={{ backgroundColor: groupedByCategory ? 'lightgreen' : 'white' }}
        >
          Group by Category
        </button>
      </div>

      {/* Render the items */}
      {groupedByCategory ? (
        Object.keys(groupedItems).map((category) => (
          <div key={category}>
            <h2 className="capitalize">{category}</h2>
            <ul>
              {groupedItems[category].map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
}

