import React from "react";
import styles from "./NoteInfo.module.css";
import NoteInfoComponent from "./note-info-components/NoteInfoComponent";
import { formatFullDate } from "../../../services/dateService";

const NoteInfo = ({ note }) => {
  return (
    <div className={styles.main}>
      <p>{note.title}</p>
      <NoteInfoComponent
        title="Created"
        child={formatFullDate(note.dateOfCreation)}
      />
      {note.dateOfEdit && (
        <NoteInfoComponent
          title="Last edited"
          child={formatFullDate(note.dateOfEdit)}
        />
      )}
    </div>
  );
};

export default NoteInfo;
