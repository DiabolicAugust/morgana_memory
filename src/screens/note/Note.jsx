import React, { useState } from 'react';
import styles from './Note.module.css';
import NoteTopBar from './note-top-bar/NoteTopBar';
import NoteInfo from '../../components/note-info/NoteInfo';
import NoteDescription from '../../components/note-description/NoteDescription';
import { setNote, updateNoteDesc } from '../../services/localStorageService';

const Note = ({ note }) => {
  console.log(note);
  const [myNote, setMyNote] = useState(note);

  return (
    <div className={styles.main}>
      <NoteTopBar title={myNote.title} />
      <NoteInfo note={myNote} />
      <NoteDescription
        description={myNote.description}
        onChange={(newDesc) => updateNoteDesc(newDesc, myNote.id)}
      />
    </div>
  );
};

export default Note;
