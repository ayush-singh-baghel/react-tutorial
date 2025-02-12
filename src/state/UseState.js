import React, { useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 0 && setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">useState in React JS</h1>
        <p className="text-xl font-semibold text-gray-700 mb-6">
          Count: <span className="text-blue-600">{count}</span>
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={incrementCount}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Increment Count
          </button>
          <button
            onClick={decrementCount}
            disabled={count === 0}
            className={`px-4 py-2 rounded-lg transition 
              ${count === 0 ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"}`}>
            Decrement Count
          </button>
          <button
            onClick={resetCount}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition">
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
}
