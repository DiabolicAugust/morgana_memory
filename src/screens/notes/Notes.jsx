import React, { useState } from 'react';
import SidebarComponent from '../../components/sidebar-component/SidebarComponent';
import { MdAdd } from 'react-icons/md';
import styles from './Notes.module.css';
import NoteCard from '../../components/note-card/NoteCard';

function Notes() {
  const [notes, setNotes] = useState([
    {
      title: 'Do homework',
      description: 'I need to do my math homework for tomorrow',
      dateOfCreation: '12.12.1990 12:12',
    },
  ]);
  return (
    <div className={styles.main}>
      <p>Notes</p>
      <SidebarComponent
        text="Add note"
        imgElement={<MdAdd size="24px" />}
        backgroundColor="#f6f6f6"
      />
      <div className={styles.padding}>
        {notes.map((note, index) => (
          <NoteCard note={note} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
