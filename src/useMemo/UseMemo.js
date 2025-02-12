import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(4);

  const doubleValue = useMemo(() => {
    console.log("Computing double value...");
    for (let i = 0; i <= 10000000; i++) { }
    return number * 2;
  }, [number]);

  return (
    <div className="flex justify-center items-center mt-[10%]">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">
          useMemo in React JS
        </h1>

        <p className="text-gray-600 mb-2">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Increment Count
        </button>

        <div className="mt-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            className="w-full p-2 border rounded-lg text-center mb-2"
          />
          <div className="p-3 bg-gray-200 rounded-lg">
            <p className="text-gray-700 font-medium">Double: {doubleValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
