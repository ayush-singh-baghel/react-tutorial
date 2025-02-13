import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoSlice";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";

export default function AddTodo() {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  
    const handleAddTodo = () => {
      if (input.trim() === "") return;
      dispatch(addTodo({ id: uuidv4(), text: input, completed: false }));
      setInput("");
    };
 
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-10">
          <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
          <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg w-full max-w-md">
            <input
              type="text"
              placeholder="Add a task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none px-3"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white"
            >
              <FaPlus />
            </button>
          </div>
          <div className="mt-6 w-full max-w-md space-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <p className="text-gray-400 text-center">No tasks yet!</p>
            )}
          </div>
        </div>
  );
}