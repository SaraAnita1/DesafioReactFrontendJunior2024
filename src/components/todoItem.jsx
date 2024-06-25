import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ index, todo }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <input
          className="edit"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(index)} />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
