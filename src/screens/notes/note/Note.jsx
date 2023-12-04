import styles from './Note.module.css';
import NoteTopBar from './note-top-bar/NoteTopBar';
import NoteInfo from '../../../components/note-components/note-info/NoteInfo';
import NoteDescription from '../../../components/note-components/note-description/NoteDescription';
import { updateNoteDesc } from '../../../services/notesLocalStorageService';

const Note = ({ note }) => {
  return (
    <div className={styles.main}>
      <NoteTopBar title={note.title} />
      <NoteInfo note={note} />
      <NoteDescription
        description={note.description}
        onChange={(newDesc) => updateNoteDesc(newDesc, note.id)}
      />
    </div>
  );
};

export default Note;
