import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoActions = () => {
  const { todos, clearCompleted } = useContext(TodoContext);

  const handleMarkAllCompleted = () => {
    todos.forEach((todo, index) => {
      if (!todo.completed) {
        toggleTodo(index);
      }
    });
  };

  return (
    <div className="actions">
      <button onClick={handleMarkAllCompleted}>Mark All as Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoActions;
