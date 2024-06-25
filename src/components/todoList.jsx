import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = ({ filter }) => {
  const { todos } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
