import React, { useState } from "react";

export default function EditProduct({ id, title, description, price, setIsEditing, updateProduct }) {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleUpdate = () => {
    const updatedProduct = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
    };
    updateProduct(id, updatedProduct);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Edit Product</h2>
          <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white">
            ✖
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300">Product Title</label>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new title"
            />
          </div>

          <div>
            <label className="block text-gray-300">Description</label>
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new description"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-gray-300">Price</label>
            <input
              type="number"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new price"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-bold transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-bold transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
