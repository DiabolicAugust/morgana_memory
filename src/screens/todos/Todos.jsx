import React, { useEffect, useState } from 'react';
import styles from './Todos.module.css';
import TodoCard from '../../components/todo-components/todo-card/TodoCard';
import TodoInput from '../../components/todo-components/todo-input/TodoInput';
import { getTodos } from '../../services/todosLocalStorageService';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  window.addEventListener('todos', (e) => {
    setTodos(getTodos());
  });

  return (
    <div className={styles.main}>
      <h1>Todos</h1>
      <TodoInput />
      {todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
