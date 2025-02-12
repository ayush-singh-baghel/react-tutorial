import React, { useState } from "react";

const InkoopTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$|^-?\d*$/.test(value)) return;

    setInputValue(value);
    processInput(value);
  };

  const processInput = (value) => {
    const num = parseInt(value, 10);

    if (isNaN(num)) {
      setMessage("");
      setResults([]);
      return;
    }

    if (num < 0) {
      setMessage("Enter a positive value.");
      setResults([]);
    } else {
      setMessage("");
      if (num % 2 === 0) {
        setResults([num + 2, num + 4, num + 6]);
      } else {
        setResults([num + 2, num + 4, num + 6]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
    <p className="text-3xl font-bold mb-4 text-gray-300">InkoopTask</p>
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-20">
      <label className="block mb-4 font-semibold text-gray-700 text-2xl rounded-lg">
        Enter a Number :
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter positive numbers only"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {message && (
        <p className="mt-4 text-red-500 text-lg font-semibold">{message}</p>
      )}
      {!message && results.length > 0 && (
        <div className="mt-4">
          <ul className="flex gap-3 text-center">
            {results.map((num, index) => (
              <li
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default InkoopTask;
