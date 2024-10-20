// /app/week-3/page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-10 pl-4">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      <div className="max-w-3xl">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
