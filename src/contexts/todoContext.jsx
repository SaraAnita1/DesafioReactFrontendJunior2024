import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch initial tasks
    fetch('https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (text) => {
    setTodos([{ text, completed: false }, ...todos]);
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, text) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, text } : todo));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, updateTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};
