import React from "react";

import styles from "./BookCard.module.css";

import { TiStarFullOutline } from "react-icons/ti";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

const BookCard = ({ book }) => {
  return (
    <div className={styles.main}>
      <img src={book.image_url} alt="" />
      <div className={styles.title}>{book.title}</div>
      <div className={styles.author}>{book.author}</div>
      <div className={styles.score}>
        {Array.from({ length: book.score }, (_, i) => (
          <TiStarFullOutline size="3em" color="orange" />
        ))}
      </div>
      <div className={styles.isCompleted}>
        {book.isCompleted ? (
          <MdDone size="5em" color="green" />
        ) : (
          <MdClose size="5em" color="red" />
        )}
      </div>
    </div>
  );
};

export default BookCard;
