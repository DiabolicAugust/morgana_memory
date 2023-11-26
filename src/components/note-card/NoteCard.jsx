import React from 'react';
import styles from './NoteCard.module.css';

const NoteCard = ({ note }) => {
  return (
    <div className={styles.main}>
      <p className={styles.date}>{note.dateOfCreation}</p>
      <p className={styles.title}>{note.title}</p>
      <p className={styles.description}>{note.description}</p>
    </div>
  );
};

export default NoteCard;
