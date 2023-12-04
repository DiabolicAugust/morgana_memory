import React, { useEffect, useState } from 'react';
import styles from './TodoInput.module.css';
import { getTodos, setTodo } from '../../../services/todosLocalStorageService';

const TodoInput = () => {
  const [textInput, setTextInput] = useState('');

  return (
    <div className={styles.main}>
      <input
        type="text"
        className={styles.input}
        value={textInput}
        onChange={(text) => {
          setTextInput(text.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={() =>
          setTodo({
            title: textInput,
            id: Date.now(),
            dateOfCreation: Date.now(),
            isCompleted: false,
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
