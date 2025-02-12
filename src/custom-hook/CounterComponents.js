import React from "react";
import useCounter from "./useCounter";

const CounterComponents = () => {
  const { count, increment, decrement, reset } = useCounter(10); 

  return (
    <div className="flex flex-col items-center p-5 border rounded-md shadow-md mt-[10%]">
      <h2 className="text-2xl font-bold text-gray-50">Counter: {count}</h2>
      <div className="mt-3 space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">Increment</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default CounterComponents;
