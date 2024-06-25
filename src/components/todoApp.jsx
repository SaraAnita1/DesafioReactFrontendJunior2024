import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import '../style/style.css';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
import TodoRemaining from './todoRemaining';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (text) => {
    if (text.trim() === '') return;
    setTodos([...todos, { text: text, completed: false }]);
  };

  const handleToggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleMarkAllCompleted = () => {
    const newTodos = todos.map(todo => ({ ...todo, completed: true }));
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  const handleEditTodo = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const handleSaveTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(newTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleShowAll = () => {
    navigate('/');
  };

  const handleShowCompleted = () => {
    navigate('/completed');
  };

  const handleShowNotCompleted = () => {
    navigate('/notCompleted');
  };

  const filter = (() => {
    switch (location.pathname) {
      case '/completed':
        return 'completed';
      case '/notCompleted':
        return 'notCompleted';
      default:
        return 'all';
    }
  })();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'notCompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoActions
        onMarkAllCompleted={handleMarkAllCompleted}
        onShowAll={handleShowAll}
        onShowCompleted={handleShowCompleted}
        onShowNotCompleted={handleShowNotCompleted}
        onClearAll={handleClearAll}
      />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
        editingIndex={editingIndex}
        editingText={editingText}
        onEditingTextChange={setEditingText}
        onSaveTodo={handleSaveTodo}
      />
      <TodoRemaining remaining={remainingTodos} />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/completed" element={<TodoApp />} />
      <Route path="/notCompleted" element={<TodoApp />} />
    </Routes>
  </Router>
);

export default App;
