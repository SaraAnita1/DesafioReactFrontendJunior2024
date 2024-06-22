import React, { useState } from 'react';
import '../style/style.css';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
import TodoRemaining from './todoRemaining';

const TodoApp = () => {
  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([]);

  // Estado para controlar o valor do input de adição de tarefas
  const [inputValue, setInputValue] = useState('');

  // Estado para controlar o filtro de exibição de tarefas ('all', 'completed', 'notCompleted')
  const [filter, setFilter] = useState('all');

  // Função para atualizar o valor do input de adição de tarefas
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Função para adicionar uma nova tarefa à lista
  const handleAddTodo = (text) => {
    if (text.trim() === '') return; // Evita adicionar tarefa vazia
    setTodos([...todos, { text: text, completed: false }]);
  };

  // Função para alternar o status de uma tarefa entre completa e não completa
  const handleToggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  // Função para excluir uma tarefa da lista
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Função para marcar todas as tarefas como completas
  const handleMarkAllCompleted = () => {
    const newTodos = todos.map(todo => ({ ...todo, completed: true }));
    setTodos(newTodos);
  };

  // Função para definir o filtro para mostrar todas as tarefas
  const handleShowAll = () => {
    setFilter('all');
  };

  // Função para definir o filtro para mostrar apenas as tarefas completas
  const handleShowCompleted = () => {
    setFilter('completed');
  };

  // Função para definir o filtro para mostrar apenas as tarefas não completas
  const handleShowNotCompleted = () => {
    setFilter('notCompleted');
  };

  // Função para limpar todas as tarefas da lista
  const handleClearAll = () => {
    setTodos([]);
  };

  // Filtra as tarefas de acordo com o filtro selecionado ('all', 'completed', 'notCompleted')
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'notCompleted') {
      return !todo.completed;
    } else {
      return true; // Mostra todas as tarefas
    }
  });

  // Conta quantas tarefas ainda não estão completas
  const remainingTodos = todos.filter(todo => !todo.completed).length;

  // Renderização do componente TodoApp
  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      {/* Componente TodoForm para adicionar novas tarefas */}
      <TodoForm onAddTodo={handleAddTodo} />
      {/* Componente TodoActions para ações como marcar todas, limpar, filtrar */}
      <TodoActions
        onMarkAllCompleted={handleMarkAllCompleted}
        onShowAll={handleShowAll}
        onShowCompleted={handleShowCompleted}
        onShowNotCompleted={handleShowNotCompleted}
        onClearAll={handleClearAll}
      />
      {/* Componente TodoList para exibir a lista de tarefas */}
      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      {/* Componente TodoRemaining para exibir quantas tarefas restam */}
      <TodoRemaining remaining={remainingTodos} />
    </div>
  );
};

export default TodoApp;