import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "./TodoSlice";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
      <span
        className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => dispatch(toggleComplete(todo.id))}
      >
        {todo.text}
      </span>
      <div className="flex gap-3">
        <button
          className="text-green-400 hover:text-green-500"
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          <FaCheck />
        </button>
        <button
          className="text-red-400 hover:text-red-500"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
