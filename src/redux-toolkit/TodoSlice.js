import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: getInitialTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return filteredTodos;
    },
    toggleComplete: (state, action) => {
      const updatedTodos = state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
