import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from '../contexts/TodoContext';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
import TodoFooter from './TodoFooter';

const TodoApp = () => (
  <TodoProvider>
    <Router>
      <div className="todoapp">
        <TodoForm />
        <Routes>
          <Route path="/" element={<TodoList filter="all" />} />
          <Route path="/active" element={<TodoList filter="active" />} />
          <Route path="/completed" element={<TodoList filter="completed" />} />
        </Routes>
        <TodoActions />
        <TodoFooter />
      </div>
    </Router>
  </TodoProvider>
);

export default TodoApp;
