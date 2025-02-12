import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";

export default function FetchData() {
  const API = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.products);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setData(data.filter((product) => product.id !== id));
      console.log(`Product with ID ${id} deleted.`);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const res = await axios.put(`${API}/${id}`, updatedProduct);
      setData(data.map((product) => (product.id === id ? res.data : product)));
      console.log(`Product with ID ${id} updated.`);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-8">
        Fetch, Add, Update & Delete Products
      </h1>

      <AddProduct setData={setData} />

      {loading ? (
        <p className="text-gray-300 text-xl text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}
