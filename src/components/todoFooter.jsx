import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

const TodoFooter = () => {
  const { todos } = useContext(TodoContext);
  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingCount}</strong> item{remainingCount !== 1 && 's'} left
      </span>
      <ul className="filters">
        <li>
          <Link to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>All</Link>
        </li>
        <li>
          <Link to="/active" className={({ isActive }) => (isActive ? 'selected' : '')}>Active</Link>
        </li>
        <li>
          <Link to="/completed" className={({ isActive }) => (isActive ? 'selected' : '')}>Completed</Link>
        </li>
      </ul>
    </footer>
  );
};

export default TodoFooter;
