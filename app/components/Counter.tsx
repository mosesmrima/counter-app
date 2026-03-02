'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
      <h2 className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-6">
        Count
      </h2>
      <p className="text-center text-7xl font-bold text-gray-900 mb-10 tabular-nums">
        {count}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="flex-1 h-14 rounded-xl bg-gray-100 text-gray-700 text-2xl font-semibold
                     hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 h-14 rounded-xl bg-indigo-600 text-white text-2xl font-semibold
                     hover:bg-indigo-700 active:bg-indigo-800 transition-colors cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
