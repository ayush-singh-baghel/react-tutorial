import React, { useState } from "react";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

export default function ProductCard({ id, title, description, price, category, deleteProduct, updateProduct }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 text-sm">{category}</p>
        <p className="text-gray-300 mt-2">{description}</p>
        <p className="text-blue-400 font-bold mt-2">${price}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 px-4 py-2 rounded text-white">
          Edit
        </button>
        <DeleteProduct id={id} deleteProduct={deleteProduct} />
      </div>

      {isEditing && <EditProduct id={id} title={title} description={description} price={price} setIsEditing={setIsEditing} updateProduct={updateProduct} />}
    </div>
  );
}
