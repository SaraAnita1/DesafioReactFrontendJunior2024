// src/components/TodoList.js

import React from 'react';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span onClick={() => onToggleTodo(index)}>{todo.text}</span>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
