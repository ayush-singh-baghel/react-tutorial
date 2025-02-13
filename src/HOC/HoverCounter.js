import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, multiCount }) {
    return (
      <div className="flex flex-col items-center justify-center text-gray-50 text-2xl mt-10">
        <p className="mb-4">Count: {count}</p>
        <button
          onMouseOver ={multiCount}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Hover Me
        </button>
    
      </div>
    );
  }
  
  export default withCounter(HoverCounter);
