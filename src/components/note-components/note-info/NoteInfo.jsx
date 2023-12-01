import React from 'react';
import styles from './NoteInfo.module.css';
import NoteInfoComponent from './note-info-components/NoteInfoComponent';

const NoteInfo = ({ note }) => {
  return (
    <div className={styles.main}>
      <p>{note.title}</p>
      <NoteInfoComponent title="Created" child={note.dateOfCreation} />
    </div>
  );
};

export default NoteInfo;
