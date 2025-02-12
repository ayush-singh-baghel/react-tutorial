import React, { useState } from "react";
import axios from "axios";

export default function AddProduct({ setData }) {
  const API = "https://dummyjson.com/products/add";

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const postData = async () => {
    try {
      const res = await axios.post(API, newProduct);
      console.log("Product added:", res.data);
      setData((prevData) => [...prevData, res.data]); 
      setNewProduct({ title: "", description: "", price: "", category: "" }); 
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-300 mb-4 text-center">Add New Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white w-full"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white w-full"
        />
      </div>
      <button
        onClick={postData}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700"
      >
        Add Product
      </button>
    </div>
  );
}
