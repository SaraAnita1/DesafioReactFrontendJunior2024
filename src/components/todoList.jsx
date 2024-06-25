import React from 'react';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo, editingIndex, editingText, onEditingTextChange, onSaveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} onDoubleClick={() => onEditTodo(index, todo.text)}>
          {editingIndex === index ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => onEditingTextChange(e.target.value)}
              onBlur={() => onSaveTodo(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSaveTodo(index);
                }
              }}
            />
          ) : (
            <>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => onToggleTodo(index)}
              >
                {todo.text}
              </span>
              <button onClick={() => onDeleteTodo(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
