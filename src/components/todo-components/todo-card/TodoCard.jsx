import React from "react";
import styles from "./TodoCard.module.css";
import { updateTodoStatus } from "../../../services/todosLocalStorageService";
import { formatFullDate, formatShortDate } from "../../../services/dateService";

const TodoCard = ({ todo }) => {
  return (
    <div
      className={todo.isCompleted ? styles.mainInactive : styles.mainActive}
      onClick={() => updateTodoStatus(todo.id)}
    >
      <p
        className={todo.isCompleted ? styles.titleInactive : styles.titleActive}
      >
        {todo.title}
      </p>
      {todo.isCompleted ? (
        <p className={styles.todoCompletedCaption}>
          Finished: {formatShortDate(todo.dateOfFinish)}
        </p>
      ) : (
        <p className={styles.todoUncompletedCaption}>
          Created: {formatShortDate(todo.dateOfCreation)}
        </p>
      )}
    </div>
  );
};

export default TodoCard;
