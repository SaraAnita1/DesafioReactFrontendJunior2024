import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
