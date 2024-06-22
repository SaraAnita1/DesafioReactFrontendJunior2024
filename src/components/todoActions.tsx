import React from 'react';

const TodoActions = ({ onMarkAllCompleted, onShowAll, onShowCompleted, onShowNotCompleted, onClearAll }) => {
  return (
    <div className="todo-actions">
      <button onClick={onMarkAllCompleted}>Mark All Completed</button>
      <button onClick={onShowAll}>Show All</button>
      <button onClick={onShowCompleted}>Show Completed</button>
      <button onClick={onShowNotCompleted}>Show Not Completed</button>
      <button onClick={onClearAll}>Clear All</button>
    </div>
  );
};

export default TodoActions;
