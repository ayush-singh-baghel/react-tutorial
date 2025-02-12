import React from "react";
import { FaTrash } from "react-icons/fa";

export default function DeleteProduct({ id, deleteProduct }) {
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
    >
      <FaTrash /> Delete
    </button>
  );
}
