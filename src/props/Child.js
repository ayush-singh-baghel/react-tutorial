import React from 'react';

export default function Child({ data }) {
  return (
    <div className="flex justify-center mt-16">
      <div className="bg-gray-100 text-gray-800 p-6 rounded-2xl shadow-xl border border-gray-300 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">Props in React JS</h1>
        <div className="space-y-2 text-lg">
          <p><span className="font-semibold text-gray-700">Name:</span> {data.name}</p>
          <p><span className="font-semibold text-gray-700">City:</span> {data.city}</p>
          <p><span className="font-semibold text-gray-700">Email:</span> {data.email}</p>
          <p><span className="font-semibold text-gray-700">Phone:</span> {data.phone}</p>
        </div>
      </div>
    </div>
  );
}
