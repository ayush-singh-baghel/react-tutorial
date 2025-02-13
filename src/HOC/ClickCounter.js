import React from "react";
import withCounter from "./withCounter"

function ClickCounter({ count, incrementCount }) {
  return (
    <div className="flex flex-col items-center justify-center text-gray-50 text-2xl mt-10">
      <p className="mb-4">Count: {count}</p>
      <button
        onClick={incrementCount}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Click Me
      </button>
  
    </div>
  );
}

export default withCounter(ClickCounter);
