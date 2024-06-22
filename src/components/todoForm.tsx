import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;
