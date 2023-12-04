import React from 'react';
import styles from './NoteCard.module.css';
import { formatShortDate } from '../../../services/dateService';

const NoteCard = ({ note, onClick }) => {
  return (
    <div className={styles.main} onClick={() => onClick(note.id)}>
      <p className={styles.date}>
        {formatShortDate(new Date(note.dateOfCreation))}
      </p>
      <p className={styles.title}>{note.title}</p>
      <p className={styles.description}>{note.description}</p>
    </div>
  );
};

export default NoteCard;
