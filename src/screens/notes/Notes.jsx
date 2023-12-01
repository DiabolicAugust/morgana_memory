import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/card-component/CardComponent';
import { MdAdd } from 'react-icons/md';
import styles from './Notes.module.css';
import NoteCard from '../../components/note-card/NoteCard';
import Note from '../note/Note';
import { getNotes, setNewNote } from '../../services/localStorageService';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(0);
  const [updateNotes, setUpdateNotes] = useState(false);

  useEffect(() => {
    const myNotes = getNotes();
    setNotes(myNotes);
  }, [updateNotes]);

  function onCardClick(id) {
    if (id !== currentNote) {
      setCurrentNote(id);
    }
  }

  function setEmptyNote() {
    setNewNote();
    setUpdateNotes(!updateNotes);
  }

  window.addEventListener('notes', (e) => {
    setUpdateNotes(!updateNotes);
  });

  return (
    <div className={styles.main}>
      <div className={styles.myNotes}>
        <p>My Notes</p>
        <CardComponent
          text="Add note"
          imgElement={<MdAdd size="24px" />}
          backgroundColor="#f6f6f6"
          onComponentClick={setEmptyNote}
        />
        <div className={styles.padding}>
          {notes.length ? (
            notes.map((note, index) => (
              <NoteCard note={note} key={index} onClick={onCardClick} />
            ))
          ) : (
            <p>There are no notes</p>
          )}
        </div>
      </div>
      {!!currentNote ? (
        <Note note={notes.find((e) => e.id === currentNote)} />
      ) : (
        <div>Choose the note</div>
      )}
    </div>
  );
}

export default Notes;
